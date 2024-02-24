const express = require("express");
const router = express.Router();
const employeController = require("../controllers/employeController");

router.post("/addEmploye", employeController.createEmploye);

module.exports = router;
