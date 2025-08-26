const mongoose = require("mongoose");

const brandSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    maxlength: 100,
  },
  url: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: (v) => /^https?:\/\/[^\s/$.?#].[^\s]*$/i.test(v),
      message: "Invalid URL format",
    },
  },
  carsLaunchedInIndia: {
    type: Number,
    required: true,
    min: 0,
  },
});

const Brand = mongoose.model("Brand", brandSchema);

module.exports = Brand;
