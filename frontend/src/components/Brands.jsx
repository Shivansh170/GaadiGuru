import { useEffect, useState } from "react";
import Brandscard from "./Brandscard";

export default function Brands() {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    async function fetchDetails() {
      try {
        const res = await fetch("http://localhost:3000/api/brands");
        const data = await res.json();
        setBrands(data);
      } catch (err) {
        console.error("Error fetching brands:", err);
      }
    }
    fetchDetails();
  }, []);

  return (
    <section className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-orange-500 mb-10">
          Popular Car Brands in India
        </h1>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {brands.map((e) => (
            <Brandscard
              key={e._id}
              name={e.name}
              url={e.url}
              logo={e.logo}
              carsLaunchedInIndia={e.carsLaunchedInIndia}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
