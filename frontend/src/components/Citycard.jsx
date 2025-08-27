export default function Citycard({ city }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden">
      <img
        src={city.landmarkImage}
        alt={`${city.name} landmark`}
        className="w-full h-80 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl text-orange-400 font-semibold">{city.name}</h2>
        <p className="text-gray-600">{city.state}</p>

        {/* <div className="mt-3 text-sm text-gray-700 space-y-1">
          <p>
            <span className="font-medium">Road Tax:</span> {city.roadTaxPercent}
            %
          </p>
          <p>
            <span className="font-medium">Reg. Fee:</span> ₹
            {city.registrationFee}
          </p>
          <p>
            <span className="font-medium">Insurance:</span> ×
            {city.insuranceMultiplier}
          </p>
          <p>
            <span className="font-medium">Other Charges:</span> ₹
            {city.otherCharges}
          </p>
        </div> */}
      </div>
    </div>
  );
}
