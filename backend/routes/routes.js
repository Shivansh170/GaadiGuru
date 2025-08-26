const express = require("express");
const router = express.Router();
const { getAllBrands } = require("../controllers/BrandController");
router.get("/", getAllBrands);
module.exports = router;
