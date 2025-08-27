import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <>
      {/* ====== Header Wrapper ====== */}
      <header className="flex shadow-[0px_0px_16px_rgba(17,_17,_26,_0.1)] py-4 px-4 sm:px-6 bg-white min-h-[70px] tracking-wide relative z-50">
        <div className="flex flex-wrap items-center justify-between gap-4 w-full max-w-screen-xl mx-auto">
          {/* ====== Desktop Logo ====== */}
          <Link to="/" className="max-sm:hidden">
            <img src={logo} alt="logo" className="w-24 h-20 rounded-full" />
          </Link>

          {/* ====== Mobile Logo ====== */}
          <Link to="/" className="hidden max-sm:block">
            <img src={logo} alt="logo" className="w-9" />
          </Link>

          {/* ====== Collapsible Menu (for small screens) ====== */}
          <div
            id="collapseMenu"
            className="max-lg:hidden lg:!block 
            max-lg:before:fixed max-lg:before:bg-black 
            max-lg:before:opacity-50 max-lg:before:inset-0 
            max-lg:before:z-50"
          >
            {/* ====== Close Button (only in mobile) ====== */}
            <button
              id="toggleClose"
              className="lg:hidden fixed top-2 right-4 z-[100] 
              rounded-full bg-white w-9 h-9 flex items-center 
              justify-center border border-gray-200 cursor-pointer"
            >
              {/* Cross Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 h-3.5 fill-orange-500"
                viewBox="0 0 320.591 320.591"
              >
                <path d="M30.391 318.583a30.37 ..."></path>
                <path d="M287.9 318.583a30.37 ..."></path>
              </svg>
            </button>

            {/* ====== Navbar Links List ====== */}
            <ul
              className="lg:flex gap-x-5 
              max-lg:space-y-3 max-lg:fixed max-lg:bg-white 
              max-lg:w-1/2 max-lg:min-w-[300px] 
              max-lg:top-0 max-lg:left-0 max-lg:p-6 
              max-lg:h-full max-lg:shadow-md 
              max-lg:overflow-auto z-50"
            >
              {/* Mobile Logo inside menu */}
              <li className="mb-6 hidden max-lg:block">
                <Link to="/">
                  <img src={logo} alt="logo" className="w-36" />
                </Link>
              </li>

              {/* Home Link */}
              <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
                <Link to="/">
                  <button className="hover:text-orange-500 text-orange-500 font-medium block text-base">
                    Home
                  </button>
                </Link>
              </li>

              {/* Brands Link */}
              <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
                <Link to="brands">
                  <button className="hover:text-orange-500 text-slate-900 font-medium block text-base">
                    Brands
                  </button>
                </Link>
              </li>

              {/* On Road Price Link */}
              <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
                <Link
                  to="Onroadprice"
                  className="hover:text-orange-500 text-slate-900 font-medium block text-base"
                >
                  Get OnRoad Price
                </Link>
              </li>

              {/* About Link */}
              <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
                <Link
                  to="about"
                  className="hover:text-orange-500 text-slate-900 font-medium block text-base"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* ====== Right Side Buttons (Desktop) ====== */}
          <div className="flex items-center max-lg:ml-auto space-x-4">
            {/* Profile/Login Button */}
            <button
              type="button"
              className="hidden bg-orange-500 hover:bg-orange-500 
              px-4 py-3 rounded-full text-white text-[15px] font-medium 
              lg:flex items-center justify-center gap-2 cursor-pointer"
            >
              {/* Person Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 ..." />
                <path d="M0 8a8 8 0 1 1 16 0 ..." />
              </svg>
            </button>

            {/* Hamburger Menu Button (Mobile) */}
            <button id="toggleOpen" className="lg:hidden cursor-pointer">
              <svg
                className="w-7 h-7"
                fill="#000"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 ..."
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
