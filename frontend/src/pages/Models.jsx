import { useContext, useEffect, useState } from "react";
import { BrandContext } from "../context/BrandContext";
import CarCard from "../components/CarCard";

export default function Models() {
  const { brandName } = useContext(BrandContext);
  const [carList, setCarList] = useState([]);
  const [error, setError] = useState(null); // state to store error message
  const [loading, setLoading] = useState(true); // state to handle loading state

  useEffect(() => {
    async function fetchCarList() {
      const parameter = brandName.toLowerCase().split(" ")[0];
      console.log(parameter);
      setLoading(true); // Set loading to true before fetching data
      try {
        const res =
          parameter === "maruti"
            ? await fetch("http://localhost:3000/api/brands/maruti-suzuki")
            : await fetch(`http://localhost:3000/api/brands/${parameter}`);

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await res.json();
        setCarList(data);
      } catch (error) {
        console.error(error.message);
        setError(error.message); // Set error state
      } finally {
        setLoading(false); // Stop loading when the request finishes
      }
    }

    fetchCarList();
  }, [brandName]); // Add brandName as a dependency

  if (loading) {
    return <div>Loading...</div>; // Simple loading state
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error if any
  }

  return (
    <div className="overflow-y-auto max-h-[80vh] py-6">
      <div className="space-y-6">
        {carList.map((car) => (
          <CarCard key={car._id} car={car} />
        ))}
      </div>
    </div>
  );
}
