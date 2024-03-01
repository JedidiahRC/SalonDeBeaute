const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/login", authController.login);
router.post("/loginEmploye", authController.loginEmploye);
router.post("/loginManager", authController.loginManager);
router.get("/users", authController.getAllUsers);

module.exports = router;
