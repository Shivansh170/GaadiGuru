const mongoose = require("mongoose");

const citySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100,
  },
  state: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100,
  },
  roadTaxPercent: {
    type: Number,
    required: true,
    min: 0,
    max: 100, // percentage of ex-showroom price
  },
  registrationFee: {
    type: Number,
    required: true,
    min: 0,
    default: 0, // flat fee in INR
  },
  insuranceMultiplier: {
    type: Number,
    required: true,
    min: 0,
    default: 1.0, // factor applied on base insurance premium
  },
  otherCharges: {
    type: Number,
    default: 0, // handling, green cess, etc.
  },
  landmarkImage: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: (v) => /^https?:\/\/[^\s/$.?#].[^\s]*$/i.test(v),
      message: "Invalid URL format",
    },
  },
});

const City = mongoose.model("City", citySchema);
module.exports = City;
