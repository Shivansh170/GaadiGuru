import React from "react";

export default function CarCard({ car }) {
  const {
    _id,
    name,
    imageUrl,
    fuelType,
    transmission,
    seatingCapacity,
    engineCC,
    mileage,
    showRoomPrice,
    launchYear,
  } = car; // Destructuring the car object

  return (
    <div className="flex gap-8 items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="w-1/3">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-auto object-cover rounded-xl"
        />
      </div>
      <div className="w-2/3">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">{name}</h1>
        <div className="text-gray-600 mb-2">
          <p>
            <strong>Fuel Type:</strong> {fuelType}
          </p>
          <p>
            <strong>Transmission:</strong> {transmission}
          </p>
          <p>
            <strong>Seating Capacity:</strong> {seatingCapacity}
          </p>
          <p>
            <strong>Engine CC:</strong> {engineCC} CC
          </p>
          <p>
            <strong>Mileage:</strong> {mileage} km/l
          </p>
          <p>
            <strong>Showroom Price:</strong> ₹{showRoomPrice}
          </p>
          <p>
            <strong>Launch Year:</strong> {launchYear}
          </p>
        </div>
      </div>
    </div>
  );
}
