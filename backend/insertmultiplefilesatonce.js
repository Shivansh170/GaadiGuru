const mongoose = require("mongoose");

// Connect to your MongoDB database
mongoose
  .connect(
    "mongodb+srv://shivanshlavaniya:s12345678@nodeandexpress.nmwespp.mongodb.net/GaadiGuru?retryWrites=true&w=majority&appName=NodeandExpress",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

// Define your schema and model
const mgSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true, // No duplicate car models
    trim: true,
    maxlength: 100,
  },
  imageUrl: {
    type: String,
    trim: true,
    lowercase: true,
    validate: {
      validator: (v) => /^https?:\/\/[^\s/$.?#].[^\s]*$/i.test(v),
      message: "Invalid URL format",
    },
  },
  fuelType: {
    type: String,
    required: true,
    enum: ["Petrol", "Diesel", "CNG", "Electric", "Hybrid"], // only valid fuel types
  },
  transmission: {
    type: String,
    enum: ["Manual", "Automatic", "AMT", "CVT", "DCT"],
    default: "Manual",
  },
  seatingCapacity: {
    type: Number,
    min: 2,
    max: 10,
    required: true,
  },
  bodyType: {
    type: String,
    enum: ["Hatchback", "Sedan", "SUV", "MUV", "Van", "MPV", "Pickup"],
  },
  engineCC: {
    type: Number,
    min: 0, // smallest Maruti engines
    max: 4000, // generally they don’t go above 2.0L
  },
  mileage: {
    type: Number,
    min: 5,
    max: 600, // realistic range (km/l)
  },
  showRoomPrice: {
    type: Number,
    required: true,
    min: 200000, // Maruti cars generally start ~2 lakh
  },
  launchYear: {
    type: Number,
    min: 1980,
    max: new Date().getFullYear(),
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const mgCar = mongoose.model("mgCar", mgSchema);

async function insertCars() {
  const mgCars = [
    {
      name: "MG Hector",
      imageUrl: "https://www.mgmotor.co.in/vehicles/mghector",
      fuelType: "Petrol",
      transmission: "Manual",
      seatingCapacity: 5,
      bodyType: "SUV",
      engineCC: 1498,
      mileage: 18,
      showRoomPrice: 1449000,
      launchYear: 2019,
    },
    {
      name: "MG Astor",
      imageUrl: "https://www.mgmotor.co.in/vehicles/mgastor",
      fuelType: "Petrol",
      transmission: "Manual",
      seatingCapacity: 5,
      bodyType: "SUV",
      engineCC: 1498,
      mileage: 17,
      showRoomPrice: 999000,
      launchYear: 2021,
    },
    {
      name: "MG Gloster",
      imageUrl: "https://www.mgmotor.co.in/vehicles/mggloster",
      fuelType: "Diesel",
      transmission: "Automatic",
      seatingCapacity: 7,
      bodyType: "SUV",
      engineCC: 1996,
      mileage: 12,
      showRoomPrice: 4107000,
      launchYear: 2020,
    },
    {
      name: "MG ZS EV",
      imageUrl:
        "https://www.mgmotor.co.in/vehicles/mgzs-ev-electric-car-in-india",
      fuelType: "Electric",
      transmission: "Automatic",
      seatingCapacity: 5,
      bodyType: "SUV",
      engineCC: 0,
      mileage: 460, // approximate range in km
      showRoomPrice: 1300000,
      launchYear: 2020,
    },
    {
      name: "MG Comet EV",
      imageUrl:
        "https://www.mgmotor.co.in/vehicles/mgcomet-ev-electric-car-in-india",
      fuelType: "Electric",
      transmission: "Automatic",
      seatingCapacity: 4,
      bodyType: "Hatchback",
      engineCC: 0,
      mileage: 300, // approximate range in km
      showRoomPrice: 499000,
      launchYear: 2022,
    },
    {
      name: "MG Windsor EV",
      imageUrl:
        "https://www.mgmotor.co.in/vehicles/mgwindsor-ev-electric-car-in-india",
      fuelType: "Electric",
      transmission: "Automatic",
      seatingCapacity: 4,
      bodyType: "Hatchback",
      engineCC: 0,
      mileage: 360,
      showRoomPrice: 999000,
      launchYear: 2023,
    },
    {
      name: "MG M9 (Mifa 9)",
      imageUrl:
        "https://www.mgmotor.co.in/vehicles/mgwindsor-ev-electric-car-in-india", // Placeholder
      fuelType: "Electric",
      transmission: "Automatic",
      seatingCapacity: 7,
      bodyType: "MUV",
      engineCC: 3500,
      mileage: 565,
      showRoomPrice: 10000000,
      launchYear: 2025,
    },
  ];

  try {
    const result = await mgCar.insertMany(mgCars);
    console.log(`${result.length} cars were inserted successfully.`);
  } catch (error) {
    console.error("Error inserting cars:", error);
  }
}

// Call the function to insert cities
insertCars();
