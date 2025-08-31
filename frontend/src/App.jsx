import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useState } from "react";
export default function App() {
  const [brandName, setBrandname] = useState("");
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
}
