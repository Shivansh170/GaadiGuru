import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="w-11/12 flex justify-between items-center lg:w-[85vw] mx-auto lg:py-1">
        <div>
          <h1 className="text-lg lg:text-3xl font-bold text-orange-500">
            GaadiGuru
          </h1>
        </div>
        <div className="text-xl font-medium hidden lg:flex gap-2">
          <Link to="/">
            <button className="">Home</button>
          </Link>
          <Link to="brands">
            <button>Brands</button>
          </Link>
          <Link to="On-Road Price">
            <button>On Road Price</button>
          </Link>
        </div>
        <div>Profile</div>
      </nav>
    </>
  );
}
