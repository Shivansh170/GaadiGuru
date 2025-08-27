import { Link } from "react-router-dom";
export default function Brandscard({ name, url, carsLaunchedInIndia, logo }) {
  return (
    <div className="w-full sm:w-72 bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition">
      {/* Brand Logo */}
      <img
        src={logo}
        alt={`${name} logo`}
        className="w-24 h-24 object-contain mb-4"
      />

      {/* Brand Name */}
      <h2 className="text-xl font-semibold text-orange-500">{name}</h2>

      {/* Cars launched */}
      <p className="text-gray-700 mt-2">
        Cars Launched in India:{" "}
        <span className="font-semibold">{carsLaunchedInIndia}</span>
      </p>

      {/* Website Link */}
      <div className="lg:flex lg:gap-2">
        <Link
          to={url}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-4 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
        >
          Visit Website
        </Link>
        <Link
          to={url}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-4 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
        >
          See Models
        </Link>
      </div>
    </div>
  );
}
