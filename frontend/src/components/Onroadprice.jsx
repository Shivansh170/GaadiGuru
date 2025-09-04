import { useContext, useEffect, useState } from "react";
import bg from "../assets/background-onroadprice.jpg";
import { indianStatesAndUTs } from "../assets/indianStatesAndUTs";
import { Link } from "react-router-dom";
import { PriceContext } from "../context/Pricecontext";
export default function Onroadprice() {
  const [region, setRegion] = useState("");
  const [districts, setDistricts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [brand, setBrand] = useState("");
  const [models, setModels] = useState([]);
  const [model, setModel] = useState("");
  const [modelDetails, setModelDetails] = useState({});
  const {
    setShowRoomPrice,
    setRoadTaxPercent,
    setRegistrationCharges,
    setInsurancePercent,
    setHanglingCharges,
    setState,
    setDistrict,
    setCompany,
    setCar,
  } = useContext(PriceContext);

  const regions = indianStatesAndUTs.map((e) => {
    return e.region;
  });
  useEffect(() => {
    async function fetchBrands() {
      const res = await fetch("http://localhost:3000/api/brands");
      const data = await res.json();
      const cars = data.map((e) => e.name);
      setBrands(cars);
    }
    fetchBrands();
  }, []);
  useEffect(() => {
    if (!brand) return;
    async function fetchModels() {
      const res = await fetch(
        `http://localhost:3000/api/brands/${brand.toLowerCase().split(" ")[0]}`
      );
      const data = await res.json();
      const cars = data.map((e) => e.name);
      setModels(cars);
      setModelDetails(data);
    }
    fetchModels();
  }, [brand]);
  useEffect(() => {
    const dist = indianStatesAndUTs
      .filter((e) => e.region === region)
      .flatMap((e) => e.districts);
    setDistricts(dist);
  }, [region]);
  const calculatePrice = () => {
    const tshowRoomPrice = modelDetails
      .filter((e) => {
        return e.name == model;
      })
      .map((e) => e.showRoomPrice)[0];
    const expenses = indianStatesAndUTs
      .filter((e) => {
        return e.region == region;
      })
      .map((e) => e.onRoadPriceFactors)
      .map((e) => {
        return [
          e.roadTaxPercent,
          e.registrationCharges,
          e.insurancePercent,
          e.handlingCharges,
        ];
      });
    setRoadTaxPercent(expenses[0][0]);
    setRegistrationCharges(expenses[0][1]);
    setInsurancePercent(expenses[0][2]);
    setHanglingCharges(expenses[0][3]);
    setState(region), setCompany(brand), setCar(model);
    setShowRoomPrice(tshowRoomPrice);
  };
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row">
      {/* Left Side Image */}
      <div className="w-full md:w-2/3 h-96 md:h-screen">
        <img src={bg} alt="background" className="w-full h-full object-cover" />
      </div>

      {/* Right Side Form */}
      <div className="w-full md:w-1/3 flex items-center justify-center bg-gray-50">
        <div className="w-11/12 md:w-3/4 bg-white rounded-xl p-5 shadow-md">
          <div className="my-2">
            <select
              name="State"
              className="w-full text-lg md:text-xl p-2 md:p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              onChange={(e) => {
                setRegion(e.target.value);
              }}
            >
              <option value={0} key="stateSelector" default>
                Select Your State
              </option>
              {regions.map((e) => {
                return (
                  <option value={e} key={e}>
                    {e}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="my-4">
            <select
              name="District"
              className="w-full text-lg md:text-xl p-2 md:p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              onChange={(e) => {
                setDistrict(e.target.value);
              }}
            >
              <option value="districtSelector">Select Your District</option>
              {districts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>
          </div>

          <div className="md:flex md:gap-2">
            <div className="w-full my-2 md:my-0">
              <select
                name="Brand"
                className="w-full text-lg md:text-xl p-2 md:p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                onChange={(e) => {
                  setBrand(e.target.value);
                }}
              >
                <option value="brandSelector">Select a Brand</option>
                {brands.map((e) => (
                  <option value={e} key={e}>
                    {e}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-full my-2 md:my-0">
              <select
                name="Model"
                className="w-full text-lg md:text-xl p-2 md:p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                onChange={(e) => {
                  setModel(e.target.value);
                }}
              >
                <option value="modelSelector">Select a Model</option>
                {models.length > 0 &&
                  models.map((e) => (
                    <option value={e} key={e}>
                      {e}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <Link to="calculatedPrice">
            <button
              className="w-full py-3 mt-5 text-xl text-white font-semibold bg-orange-500 rounded-xl hover:bg-orange-600 transition"
              onClick={calculatePrice}
            >
              Calculate
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
