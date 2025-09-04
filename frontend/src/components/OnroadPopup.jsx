import { X } from "lucide-react";
import { indianStatesAndUTs } from "../assets/indianStatesAndUTs";
import { useContext, useEffect, useState } from "react";
import { PriceContext } from "../context/Pricecontext";
import { Link } from "react-router-dom";

export default function OnroadPopup({ toggleShowPopUp, showPopUp }) {
  const {
    state,
    setState,
    setDistrict,
    setRoadTaxPercent,
    setRegistrationCharges,
    setInsurancePercent,
    setHanglingCharges,
  } = useContext(PriceContext);
  const [districtList, setDistrictList] = useState([]);
  const regions = indianStatesAndUTs.map((e) => e.region);
  useEffect(() => {
    const result = indianStatesAndUTs.find((e) => e.region === state);
    if (result) {
      setDistrictList(result.districts);
    } else {
      setDistrictList([]);
    }
  }, [state]);

  const calculatePrice = () => {
    if (!state) return;
    const targetRegion = indianStatesAndUTs.find((e) => {
      return e.region === state;
    });
    const onRoadPriceFactors = targetRegion.onRoadPriceFactors;
    setRoadTaxPercent(onRoadPriceFactors.roadTaxPercent);
    setRegistrationCharges(onRoadPriceFactors.registrationCharges);
    setInsurancePercent(onRoadPriceFactors.insurancePercent);
    setHanglingCharges(onRoadPriceFactors.handlingCharges);
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      {/* Modal Container */}
      <div className="relative bg-white w-11/12 md:w-1/4 rounded-2xl shadow-2xl p-6 animate-fadeIn">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition"
          onClick={() => {
            toggleShowPopUp(!showPopUp);
          }}
        >
          <X className="w-6 h-6" />
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Select Your Location
        </h2>

        {/* State Selector */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">State</label>
          <select
            name="State"
            className="w-full text-base p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-50"
            onChange={(e) => setState(e.target.value)}
          >
            <option value={0} key="stateSelector">
              Select Your State
            </option>
            {regions.map((e) => (
              <option value={e} key={e}>
                {e}
              </option>
            ))}
          </select>
        </div>

        {/* District Selector */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            District
          </label>
          <select
            name="District"
            className="w-full text-base p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-50"
            onChange={(e) => setDistrict(e.target.value)}
          >
            <option value="districtSelector">Select Your District</option>
            {districtList.length > 0 &&
              districtList.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
          </select>
        </div>

        <Link to="finalPrice">
          <button
            className="w-full py-3 text-lg text-white font-semibold bg-orange-500 rounded-xl hover:bg-orange-600 transition transform hover:scale-[1.02]"
            onClick={calculatePrice}
          >
            Calculate
          </button>
        </Link>
      </div>
    </div>
  );
}
