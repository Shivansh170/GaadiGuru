import React, { useContext } from "react";
import Button_carCard from "./Button_carCard";
import { PriceContext } from "../context/Pricecontext";
import { Link, useParams } from "react-router-dom";

export default function CarCard({ car, showPopUp, toggleShowPopUp }) {
  const { brandName } = useParams();
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
  const { setShowRoomPrice, setCompany, setCar } = useContext(PriceContext);
  const checkonRoadPrice = () => {
    toggleShowPopUp(!showPopUp),
      setShowRoomPrice(showRoomPrice),
      setCar(name),
      setCompany(brandName);
  };
  return (
    <div className="md:flex gap-8 items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="w-full md:w-1/3">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-auto object-cover rounded-xl"
        />
      </div>
      <div className="md:flex items-center justify-between w-full mt-4 md:mt-0 md:w-2/3">
        {/* Car Info */}
        <div className="text-gray-600 mb-4 md:mb-0">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">{name}</h1>

          <div className="grid grid-cols-2 gap-x-8 gap-y-2">
            <p>
              <span className="text-gray-500">Fuel Type:</span>{" "}
              <span className="font-medium">{fuelType}</span>
            </p>
            <p>
              <span className="text-gray-500">Transmission:</span>{" "}
              <span className="font-medium">{transmission}</span>
            </p>
            <p>
              <span className="text-gray-500">Seating:</span>{" "}
              <span className="font-medium">{seatingCapacity}</span>
            </p>
            <p>
              <span className="text-gray-500">Engine:</span>{" "}
              <span className="font-medium">{engineCC} CC</span>
            </p>
            <p>
              <span className="text-gray-500">Mileage:</span>{" "}
              <span className="font-medium">{mileage} km/l</span>
            </p>
            <p>
              <span className="text-gray-500">Price:</span>{" "}
              <span className="font-semibold text-green-600">
                ₹{showRoomPrice}
              </span>
            </p>
            <p>
              <span className="text-gray-500">Launch Year:</span>{" "}
              <span className="font-medium">{launchYear}</span>
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3">
          <Button_carCard checkonRoadPrice={checkonRoadPrice}>
            Check On Road Price
          </Button_carCard>

          <Button_carCard>Add to Favorites</Button_carCard>
        </div>
      </div>
    </div>
  );
}
