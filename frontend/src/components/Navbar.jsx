import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useState } from "react";

export default function Navbar() {
  const [showMenu, toggleShowMenu] = useState(false);

  return (
    <header className="flex shadow-[0px_0px_16px_rgba(17,_17,_26,_0.1)] py-2 px-4 sm:px-6 bg-white min-h-[70px] tracking-wide relative z-50">
      <div className="flex items-center justify-between w-full max-w-screen-xl mx-auto">
        {/* ====== Left: Logo ====== */}
        <Link to="/" className="flex items-center text-2xl font-bold">
          <img src={logo} alt="logo" className="w-20 h-16 rounded-full" />
          <h1 className="text-orange-500 ml-2 hidden sm:block">GaadiGuru</h1>
        </Link>

        {/* ====== Middle: Links (only large screens) ====== */}
        <nav className="hidden lg:flex flex-1 justify-center gap-x-8 text-base font-medium">
          <Link
            to="/"
            className="text-orange-500 hover:text-orange-600 transition"
          >
            Home
          </Link>
          <Link
            to="/brands"
            className="text-slate-900 hover:text-orange-500 transition"
          >
            Brands
          </Link>
          <Link
            to="/Onroadprice"
            className="text-slate-900 hover:text-orange-500 transition"
          >
            Get OnRoad Price
          </Link>
          <Link
            to="/about"
            className="text-slate-900 hover:text-orange-500 transition"
          >
            About
          </Link>
        </nav>

        {/* ====== Right: Profile/Login (desktop) + Hamburger (mobile) ====== */}
        <div className="flex items-center gap-4">
          {/* Profile Button (desktop only) */}
          <Link to="/login">
            <button
              type="button"
              className="hidden lg:flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-full text-white text-[15px] font-medium transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  fillRule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.226 5.468 2.37A7 7 0 0 0 8 1z"
                />
              </svg>
              Profile
            </button>
          </Link>

          {/* Hamburger (mobile only) */}
          <button
            className="lg:hidden cursor-pointer"
            onClick={() => toggleShowMenu(true)}
          >
            <svg
              className="w-7 h-7"
              fill="black"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5h14a1 1 0 010 2H3a1 1 0 110-2zm0 5h14a1 1 0 010 2H3a1 1 0 110-2zm0 5h14a1 1 0 010 2H3a1 1 0 110-2z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* ====== Mobile Menu Overlay + Drawer ====== */}
      {showMenu && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => toggleShowMenu(false)}
          ></div>

          {/* Side Drawer */}
          <div
            className={`fixed top-0 right-0 w-2/3 max-w-xs h-full bg-white shadow-lg p-6 space-y-6 z-50 transform transition-transform duration-300 ${
              showMenu ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-orange-500"
              onClick={() => toggleShowMenu(false)}
            >
              ✕
            </button>

            {/* Links */}
            <Link
              to="/login"
              className="block text-lg hover:text-orange-500"
              onClick={() => toggleShowMenu(false)}
            >
              Profile
            </Link>
            <Link
              to="/"
              className="block text-lg hover:text-orange-500"
              onClick={() => toggleShowMenu(false)}
            >
              Home
            </Link>
            <Link
              to="/brands"
              className="block text-lg hover:text-orange-500"
              onClick={() => toggleShowMenu(false)}
            >
              Brands
            </Link>
            <Link
              to="/Onroadprice"
              className="block text-lg hover:text-orange-500"
              onClick={() => toggleShowMenu(false)}
            >
              Get OnRoad Price
            </Link>
            <Link
              to="/about"
              className="block text-lg hover:text-orange-500"
              onClick={() => toggleShowMenu(false)}
            >
              About
            </Link>
          </div>
        </>
      )}
    </header>
  );
}
