import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import Brands from "./components/Brands.jsx";
import Models from "./pages/Models.jsx";
import Onroadprice from "./components/Onroadprice.jsx";
import PriceProvider from "./context/PriceProvider.jsx";
import FinalPrice from "./components/FinalPrice.jsx";
import Loginpage from "./components/Loginpage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PriceProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" index element={<Homepage />} />
            <Route path="brands" element={<Brands />} />
            <Route path="/models/:brandName" element={<Models />} />
            <Route path="Onroadprice" element={<Onroadprice />} />
            <Route
              path="Onroadprice/calculatedPrice"
              element={<FinalPrice />}
            />
            <Route
              path="/models/:brandName/finalprice"
              element={<FinalPrice />}
            />
          </Route>
          <Route path="login" element={<Loginpage />} />
        </Routes>
      </BrowserRouter>
    </PriceProvider>
  </StrictMode>
);
