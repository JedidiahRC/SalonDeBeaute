const User = require("../models/User");

exports.createUser = async (req, res) => {
  console.log(req.body);
  try {
    const user = await User.create(req.body);
    const newUser = new User(user);
    res.status(201).json({ message: "User submitted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error submitting User form to database" });
  }
};
