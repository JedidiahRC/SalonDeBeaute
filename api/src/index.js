const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const signupRoutes = require("./routes/signupRoutes");
const authRoutes = require("./routes/authRoutes"); // Corrected path
const employeRoutes = require("./routes/employeRoutes"); // Corrected path
const serviceRoutes = require('./routes/serviceRoutes')
const cors = require("cors");

app.use(bodyParser.json());

app.use(cors()); // Use cors middleware
app.options("*", cors());

mongoose
  .connect("mongodb://127.0.0.1:27017/SB")
  .then(() => {
    console.log("connected to Mongodb");
    app.listen(3000, () => {
      console.log("Server is running");
    });
  })
  .catch((error) => {
    console.log(error);
  });

// Routes
app.use("/api/addUser", signupRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/employe", employeRoutes);
app.use("/api/service", serviceRoutes);

