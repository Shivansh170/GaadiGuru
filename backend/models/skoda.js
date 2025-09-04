const mongoose = require("mongoose");

const skodaSchema = mongoose.Schema({
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

const skodaCar = mongoose.model("skodaCar", skodaSchema);

module.exports = skodaCar;
