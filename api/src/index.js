const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const signupRoutes = require("./routes/signupRoutes");
const authRoutes = require("./routes/authRoutes"); // Corrected path
const cors = require("cors");

app.use(bodyParser.json());

app.use(cors()); // Use cors middleware
app.options("*", cors());

mongoose
  .connect("mongodb://127.0.0.1:27017/SB")
  .then(() => {
    console.log("connected to Mongodb");
    app.listen(3200, () => {
      console.log("Server is running");
    });
  })
  .catch((error) => {
    console.log(error);
  });

// Routes
app.use("/api", signupRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
