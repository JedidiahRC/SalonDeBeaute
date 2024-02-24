const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const signupRoutes = require("./src/routes/signupRoutes");
const authRoutes = require("./src/routes/authRoutes"); // Corrected path
const employeRoutes = require("./src/routes/employeRoutes"); // Corrected path
const cors = require("cors");

app.use(bodyParser.json());

app.use(cors()); // Use cors middleware
app.options("*", cors());

mongoose
  .connect(
    "mongodb+srv://rabemiarintsoacjedidiah:654321Mongodb@cluster0.rso5g9w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
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
app.use("/api/user", signupRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/employe", employeRoutes);
