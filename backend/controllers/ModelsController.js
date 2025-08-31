const MSM = require("../models/marutisuzuki");
const hyundaiCar = require("../models/hyundai");
const tataCar = require("../models/tata");
const mahindraCar = require("../models/mahindra");
const getAllMarutiModels = async (req, res) => {
  try {
    const MSMs = await MSM.find();
    res.status(200).json(MSMs);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};
const getAllHyundaiModels = async (req, res) => {
  try {
    const hyundaiCars = await hyundaiCar.find();
    res.status(200).json(hyundaiCars);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};
const getAllTataCars = async (req, res) => {
  try {
    const tataCars = await tataCar.find();
    res.status(200).json(tataCars);
  } catch (err) {
    res.status.json({ error: err.message });
  }
};
const getAllMahindraModels = async (req, res) => {
  try {
    const mahindraCars = await mahindraCar.find();
    res.status(200).json(mahindraCars);
  } catch (err) {
    res.status.json({ error: err.message });
  }
};
const createTataModel = async (req, res) => {
  try {
    const {
      name,
      imageUrl,
      fuelType,
      transmission,
      seatingCapacity,
      bodyType,
      engineCC,
      mileage,
      showRoomPrice,
      launchYear,
      createdAt,
    } = req.body;
    const newTataCar = new tataCar({
      name,
      imageUrl,
      fuelType,
      transmission,
      seatingCapacity,
      bodyType,
      engineCC,
      mileage,
      showRoomPrice,
      launchYear,
      createdAt,
    });
    await newTataCar.save();
    res.status(201).json(newTataCar);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};
const createMarutiModel = async (req, res) => {
  const {
    name,
    imageUrl,
    fuelType,
    transmission,
    seatingCapacity,
    bodyType,
    engineCC,
    mileage,
    showRoomPrice,
    launchYear,
    createdAt,
  } = req.body;
  const newMSM = new MSM({
    name,
    imageUrl,
    fuelType,
    transmission,
    seatingCapacity,
    bodyType,
    engineCC,
    mileage,
    showRoomPrice,
    launchYear,
    createdAt,
  });
  await newMSM.save();
  res.status(201).json(newMSM);
};
const createHyundaiModel = async (req, res) => {
  try {
    const {
      name,
      imageUrl,
      fuelType,
      transmission,
      seatingCapacity,
      bodyType,
      engineCC,
      mileage,
      showRoomPrice,
      launchYear,
      createdAt,
    } = req.body;
    const newhyundaiModel = new hyundaiCar({
      name,
      imageUrl,
      fuelType,
      transmission,
      seatingCapacity,
      bodyType,
      engineCC,
      mileage,
      showRoomPrice,
      launchYear,
      createdAt,
    });
    await newhyundaiModel.save();
    res.status(201).json(newhyundaiModel);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};
module.exports = {
  getAllMarutiModels,
  getAllHyundaiModels,
  getAllTataCars,
  getAllMahindraModels,
  createMarutiModel,
  createHyundaiModel,
  createTataModel,
};
