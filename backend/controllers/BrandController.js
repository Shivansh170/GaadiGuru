const Brand = require("../models/Brand");
const getAllBrands = async (req, res) => {
  try {
    const brands = await Brand.find();
    res.status(200).json(brands);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};
module.exports = { getAllBrands };
