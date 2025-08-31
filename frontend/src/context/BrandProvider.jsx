import { useState } from "react";
import { BrandContext } from "./BrandContext";

export default function BrandProvider({ children }) {
  const [brandName, setBrandName] = useState("");
  return (
    <BrandContext.Provider value={{ brandName, setBrandName }}>
      {children}
    </BrandContext.Provider>
  );
}
