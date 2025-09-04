import { useEffect, useState } from "react";
import CarCard from "../components/CarCard";
import { useParams } from "react-router-dom";
import OnroadPopup from "../components/OnroadPopup";

export default function Models() {
  const { brandName } = useParams();
  const [carList, setCarList] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showPopUp, toggleShowPopUp] = useState(false);

  useEffect(() => {
    async function fetchCarList() {
      const parameter = brandName.toLowerCase().split(" ")[0];
      setLoading(true);
      try {
        const res = await fetch(
          `http://localhost:3000/api/brands/${parameter}`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await res.json();
        setCarList(data);
      } catch (error) {
        console.error(error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchCarList();
  }, [brandName]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-lg font-semibold text-gray-600">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen text-lg font-semibold text-red-500">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="overflow-y-auto max-h-[80vh] py-6 max-w-[90vw] md:max-w-[80vw] mx-auto">
      <div className="space-y-6">
        {carList.map((car) => (
          <CarCard
            key={car._id}
            car={car}
            toggleShowPopUp={toggleShowPopUp}
            showPopUp={showPopUp}
          />
        ))}
      </div>
      {showPopUp && (
        <OnroadPopup toggleShowPopUp={toggleShowPopUp} showPopUp={showPopUp} />
      )}
    </div>
  );
}
