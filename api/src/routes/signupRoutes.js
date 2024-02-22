const express = require("express");
const router = express.Router();
const signupController = require("../controllers/signupController");

router.post("/signup", signupController.createSignup);

module.exports = router;
