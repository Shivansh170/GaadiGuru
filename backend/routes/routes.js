const express = require("express");
const router = express.Router();
const {
  getAllBrands,
  getAllCities,
} = require("../controllers/BrandController");
const {
  getAllMarutiModels,
  createMarutiModel,
  getAllHyundaiModels,
  createHyundaiModel,
  getAllTataCars,
  createTataModel,
  getAllMahindraModels,
} = require("../controllers/ModelsController");
router.get("/brands", getAllBrands);
router.get("/cities", getAllCities);
router.get("/brands/maruti-suzuki", getAllMarutiModels);
router.get("/brands/hyundai", getAllHyundaiModels);
router.get("/brands/tata", getAllTataCars);
router.get("/brands/mahindra", getAllMahindraModels);
router.post("/brands/create-hyundai-model", createHyundaiModel);
router.post("/brands/create-tata-model", createTataModel);
router.post("/brands/create-maruti-model", createMarutiModel);
module.exports = router;
