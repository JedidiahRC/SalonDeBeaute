const Signup = require("../models/Signup");


exports.login = async (req, res) => {
  // console.log(Signup.find());
  try {
    const { email, password } = req.body;
    const signup = await Signup.findOne({ email });
    console.log(req.body);
    console.log(
      `here is the printing of the findone` + Signup.findOne({ email })
    );

    if (!signup) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    console.log(`ito ny signup:` + signup);
    console.log(
      "password base:" + signup.password,
      "password front:" + password
    );

    if (password != signup.password) {
      return res.status(401).json({ message: "Invalid email or password" });
    } else {
      res.status(200).json({
        message: "Login successful, connected as : " + signup.firstName,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};





exports.getAllUsers = async (req, res) => {
  try {
    const users = await Signup.find();
    console.log("All signed-up users:");
    console.log(users);
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
