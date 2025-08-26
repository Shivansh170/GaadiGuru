import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import Brands from "./components/Brands.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" index element={<Homepage />} />
          <Route path="brands" element={<Brands />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
