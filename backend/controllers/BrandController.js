const Brand = require("../models/Brand");
const City = require("../models/City");
const getAllBrands = async (req, res) => {
  try {
    const brands = await Brand.find();
    res.status(200).json(brands);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};
const getAllCities = async (req, res) => {
  try {
    const cities = await City.find();
    res.status(200).json(cities);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};
module.exports = { getAllBrands, getAllCities };
