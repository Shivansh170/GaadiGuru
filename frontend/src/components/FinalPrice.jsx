import { useContext, useEffect, useState } from "react";
import { PriceContext } from "../context/Pricecontext";

export default function FinalPrice() {
  const [imageUrl, setImageURL] = useState("");
  const {
    showRoomPrice,
    roadTaxPercent,
    registrationCharges,
    insurancePercent,
    handlingCharges,
    state,
    district,
    car,
    company,
  } = useContext(PriceContext);

  useEffect(() => {
    async function fetchCar() {
      const res = await fetch(
        `http://localhost:3000/api/brands/${
          company.toLowerCase().split(" ")[0]
        }/${car}`
      );
      const data = await res.json();
      setImageURL(data.imageUrl);
    }
    fetchCar();
  }, []);

  const calculatePrice = () => {
    return (
      showRoomPrice +
      (roadTaxPercent / 100) * showRoomPrice +
      registrationCharges +
      (insurancePercent / 100) * showRoomPrice +
      handlingCharges
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Car Image */}
        <div className="flex items-center justify-center">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={car}
              className="rounded-2xl shadow-lg max-h-[350px] object-contain"
            />
          ) : (
            <div className="w-full h-64 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-500">
              Loading Image...
            </div>
          )}
        </div>

        {/* Price Details */}
        <div>
          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
            On-Road Price in{" "}
            <span className="text-orange-600">
              {district}, {state}
            </span>
          </h1>

          {/* Car Name */}
          <h2 className="text-xl font-semibold text-gray-700 text-center mb-4">
            {car}
          </h2>

          {/* Final Price */}
          <div className="bg-orange-100 text-orange-700 font-bold text-3xl rounded-xl text-center py-4 mb-6 shadow">
            ₹ {calculatePrice().toLocaleString("en-IN")}
          </div>

          {/* Breakdown */}
          <div className="space-y-3">
            <div className="flex justify-between text-gray-600">
              <span>Showroom Price:</span>
              <span className="font-medium">
                ₹ {showRoomPrice.toLocaleString("en-IN")}
              </span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Road Tax ({roadTaxPercent}%):</span>
              <span className="font-medium">
                ₹{" "}
                {((roadTaxPercent / 100) * showRoomPrice).toLocaleString(
                  "en-IN"
                )}
              </span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Registration Charges:</span>
              <span className="font-medium">
                ₹ {registrationCharges.toLocaleString("en-IN")}
              </span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Insurance ({insurancePercent}%):</span>
              <span className="font-medium">
                ₹{" "}
                {((insurancePercent / 100) * showRoomPrice).toLocaleString(
                  "en-IN"
                )}
              </span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Handling Charges:</span>
              <span className="font-medium">
                ₹ {handlingCharges.toLocaleString("en-IN")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
