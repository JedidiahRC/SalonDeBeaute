const User = require("../models/User");

exports.login = async (req, res) => {
  // console.log(User.find());
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    console.log(req.body);
    console.log(
      `here is the printing of the findone` + User.findOne({ email })
    );

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    console.log(`ito ny User:` + user);
    console.log("password base:" + user.password, "password front:" + password);

    if (password != user.password) {
      return res.status(401).json({ message: "Invalid email or password" });
    } else {
      res.status(200).json({
        message: "Login successful, connected as : " + user.firstName,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    console.log("All signed-up users:");
    console.log(users);
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
