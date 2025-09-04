export default function Button_carCard({ children, checkonRoadPrice }) {
  return (
    <button
      onClick={checkonRoadPrice}
      className="w-full md:w-auto px-5 py-2.5 
                 bg-orange-500 text-white font-medium 
                 rounded-xl shadow-md 
                 hover:bg-orange-600 active:scale-95 
                 transition-all duration-200 ease-in-out"
    >
      {children}
    </button>
  );
}
