import { useEffect, useState } from "react";
import Citycard from "./Citycard";
export default function Cities() {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    async function getAllCities() {
      const res = await fetch("http://localhost:3000/api/cities");
      const data = await res.json();
      console.log(data);
      setCities(data);
    }
    getAllCities();
  }, []);
  return (
    <>
      <section className="min-h-screen bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h1 className="text-3xl font-bold text-center text-orange-500 mb-10">
            Select your City
          </h1>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {cities.map((e) => (
              <Citycard key={e._id} city={e} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
