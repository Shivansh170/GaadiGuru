const express = require("express");
const router = express.Router();
const {
  getAllBrands,
  getAllCities,
} = require("../controllers/BrandController");
router.get("/brands", getAllBrands);
router.get("/cities", getAllCities);
module.exports = router;
