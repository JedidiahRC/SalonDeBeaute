const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  phone: String,
  gender: String,
  email: String,
  password: String,
});

module.exports = mongoose.model("User", userSchema);
