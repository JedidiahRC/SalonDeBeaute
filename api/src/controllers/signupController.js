const Signup = require("../models/Signup");

exports.createSignup = async (req, res) => {
  console.log(req.body);
  try {
    const formData = req.body;
    const newSignup = new Signup(formData);
    await newSignup.save();
    res.status(201).json({ message: "Form submitted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error submitting form to database" });
  }
};
