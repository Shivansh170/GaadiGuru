const MSM = require("../models/marutisuzuki");
const hyundaiCar = require("../models/hyundai");
const tataCar = require("../models/tata");
const mahindraCar = require("../models/mahindra");
const kiaCar = require("../models/kia");
const toyotaCar = require("../models/toyota");
const hondaCar = require("../models/honda");
const volkswagenCar = require("../models/volkswagen");
const skodaCar = require("../models/skoda");
const mgCar = require("../models/mg");

const getSpecificCar = async (req, res) => {
  const { brandName, model } = req.params;

  // Map brandName to its respective model
  const brandModels = {
    hyundai: hyundaiCar,
    maruti: MSM,
    tata: tataCar,
    mahindra: mahindraCar,
    kia: kiaCar,
    toyota: toyotaCar,
    honda: hondaCar,
    volkswagen: volkswagenCar,
    skoda: skodaCar,
    mg: mgCar,
  };

  try {
    const Model = brandModels[brandName.toLowerCase()];
    if (!Model) {
      return res.status(404).json({ error: `Brand '${brandName}' not found` });
    }

    const result = await Model.findOne({ name: model }); // findOne since name should be unique
    if (!result) {
      return res
        .status(404)
        .json({ error: `Model '${model}' not found in ${brandName}` });
    }

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getSpecificCar };
