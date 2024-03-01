const express = require("express");
const router = express.Router();
const serviceController = require("../controllers/serviceController");

// router.post("/addService", serviceController.createEmploye);
router.get("/getAllServices", serviceController.getAllServices);
router.post("/addService", serviceController.createService);

module.exports = router;
