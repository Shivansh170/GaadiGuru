import { useState } from "react";

import { PriceContext } from "./Pricecontext";

export default function PriceProvider({ children }) {
  const [showRoomPrice, setShowRoomPrice] = useState(0);
  const [roadTaxPercent, setRoadTaxPercent] = useState(0);
  const [registrationCharges, setRegistrationCharges] = useState(0);
  const [insurancePercent, setInsurancePercent] = useState(0);
  const [handlingCharges, setHanglingCharges] = useState(0);
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [company, setCompany] = useState("");
  const [car, setCar] = useState("");
  return (
    <PriceContext.Provider
      value={{
        showRoomPrice,
        setShowRoomPrice,
        roadTaxPercent,
        setRoadTaxPercent,
        registrationCharges,
        setRegistrationCharges,
        insurancePercent,
        setInsurancePercent,
        handlingCharges,
        setHanglingCharges,
        state,
        setState,
        district,
        setDistrict,
        company,
        setCompany,
        car,
        setCar,
      }}
    >
      {children}
    </PriceContext.Provider>
  );
}
