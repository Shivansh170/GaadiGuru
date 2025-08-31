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
const mahindraSchema = new mongoose.Schema({
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
    enum: ["Hatchback", "Sedan", "SUV", "MUV", "Van"],
  },
  engineCC: {
    type: Number,
    min: 600, // smallest Maruti engines
    max: 2200, // generally they don’t go above 2.0L
  },
  mileage: {
    type: Number,
    min: 5,
    max: 50, // realistic range (km/l)
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

const mahindraCar = mongoose.model("mahindraCar", mahindraSchema);

async function insertCars() {
  const mahindraCars = [
    {
      name: "Mahindra Thar",
      imageUrl:
        "https://www.autovista.in/assets/img/new_cars_colour_variants/Thar-red.png",
      fuelType: "Petrol",
      transmission: "Manual",
      seatingCapacity: 4,
      bodyType: "SUV",
      engineCC: 2198,
      mileage: 15,
      showRoomPrice: 1200000,
      launchYear: 2021,
      createdAt: "2025-08-28T04:16:28.150+00:00",
      __v: 0,
    },
    {
      name: "Mahindra XUV700",
      imageUrl:
        "https://www.autovista.in/assets/img/new_cars_colour_variants/XUV700-grey.png",
      fuelType: "Diesel",
      transmission: "Automatic",
      seatingCapacity: 7,
      bodyType: "SUV",
      engineCC: 2198,
      mileage: 16,
      showRoomPrice: 2500000,
      launchYear: 2021,
      createdAt: "2025-08-28T04:19:35.385+00:00",
      __v: 0,
    },
    {
      name: "Mahindra XUV300",
      imageUrl:
        "https://www.autovista.in/assets/img/new_cars_colour_variants/XUV300-blue.png",
      fuelType: "Petrol",
      transmission: "Manual",
      seatingCapacity: 5,
      bodyType: "SUV",
      engineCC: 1197,
      mileage: 17,
      showRoomPrice: 900000,
      launchYear: 2020,
      createdAt: "2025-08-28T04:20:53.817+00:00",
      __v: 0,
    },
    {
      name: "Mahindra Scorpio",
      imageUrl:
        "https://www.autovista.in/assets/img/new_cars_colour_variants/Scorpio-green.png",
      fuelType: "Diesel",
      transmission: "Manual",
      seatingCapacity: 7,
      bodyType: "SUV",
      engineCC: 2184,
      mileage: 15,
      showRoomPrice: 1300000,
      launchYear: 2021,
      createdAt: "2025-08-28T04:21:36.005+00:00",
      __v: 0,
    },
    {
      name: "Mahindra Marazzo",
      imageUrl:
        "https://www.autovista.in/assets/img/new_cars_colour_variants/Marazzo-blue.png",
      fuelType: "Diesel",
      transmission: "Manual",
      seatingCapacity: 7,
      bodyType: "MUV",
      engineCC: 1497,
      mileage: 17,
      showRoomPrice: 1500000,
      launchYear: 2021,
      createdAt: "2025-08-28T04:21:59.499+00:00",
      __v: 0,
    },
    {
      name: "Mahindra Bolero",
      imageUrl:
        "https://www.autovista.in/assets/img/new_cars_colour_variants/Bolero-yellow.png",
      fuelType: "Diesel",
      transmission: "Manual",
      seatingCapacity: 7,
      bodyType: "SUV",
      engineCC: 1493,
      mileage: 16,
      showRoomPrice: 900000,
      launchYear: 2020,
      createdAt: "2025-08-28T04:22:14.990+00:00",
      __v: 0,
    },
    {
      name: "Mahindra TUV300",
      imageUrl:
        "https://www.autovista.in/assets/img/new_cars_colour_variants/TUV300-orange.png",
      fuelType: "Diesel",
      transmission: "Manual",
      seatingCapacity: 7,
      bodyType: "SUV",
      engineCC: 1493,
      mileage: 18,
      showRoomPrice: 850000,
      launchYear: 2021,
      createdAt: "2025-08-28T04:22:31.231+00:00",
      __v: 0,
    },
    {
      name: "Mahindra Alturas G4",
      imageUrl:
        "https://www.autovista.in/assets/img/new_cars_colour_variants/Alturas-white.png",
      fuelType: "Diesel",
      transmission: "Automatic",
      seatingCapacity: 7,
      bodyType: "SUV",
      engineCC: 2159,
      mileage: 12,
      showRoomPrice: 3000000,
      launchYear: 2021,
      createdAt: "2025-08-28T04:22:52.231+00:00",
      __v: 0,
    },
  ];

  try {
    const result = await mahindraCar.insertMany(mahindraCars);
    console.log(`${result.length} cars were inserted successfully.`);
  } catch (error) {
    console.error("Error inserting cars:", error);
  }
}

// Call the function to insert cities
insertCars();
