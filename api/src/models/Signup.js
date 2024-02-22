const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  phone: String,
  gender: String,
  email: String,
  password: String,
});

module.exports = mongoose.model("Signup", signupSchema);
