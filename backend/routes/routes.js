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
  getAllKiaModels,
  getAllToyotaModels,
  getAllHondaModels,
  getAllVolkswagenModels,
  getAllSkodaModels,
  getAllMgModels,
} = require("../controllers/ModelsController");
const { getSpecificCar } = require("../controllers/specificsController");
router.get("/brands", getAllBrands);
router.get("/cities", getAllCities);
router.get("/brands/maruti", getAllMarutiModels);
router.get("/brands/hyundai", getAllHyundaiModels);
router.get("/brands/tata", getAllTataCars);
router.get("/brands/mahindra", getAllMahindraModels);
router.get("/brands/kia", getAllKiaModels);
router.get("/brands/toyota", getAllToyotaModels);
router.get("/brands/honda", getAllHondaModels);
router.get("/brands/volkswagen", getAllVolkswagenModels);
router.get("/brands/skoda", getAllSkodaModels);
router.get("/brands/mg", getAllMgModels);
router.get("/brands/:brandName/:model", getSpecificCar);
router.post("/brands/create-hyundai-model", createHyundaiModel);
router.post("/brands/create-tata-model", createTataModel);
router.post("/brands/create-maruti-model", createMarutiModel);
module.exports = router;
