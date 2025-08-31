import { Search } from "lucide-react";

export default function Searchbar() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3">
      <div className="relative">
        <input
          type="text"
          placeholder="Enter car or brand name to search..."
          className="w-full px-4 py-3 pr-12 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-orange-500 placeholder:text-orange-500 shadow-md bg-black opacity-65"
        />
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center bg-orange-500 rounded-xl p-2 cursor-pointer">
          <Search className="text-white w-5 h-5" />
        </div>
      </div>
    </div>
  );
}
