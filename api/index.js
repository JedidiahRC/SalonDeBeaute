const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const signupRoutes = require("./src/routes/signupRoutes");
const authRoutes = require("./src/routes/authRoutes");
const employeRoutes = require("./src/routes/employeRoutes");
const cors = require("cors");

app.use(bodyParser.json());

app.use(cors()); // Use cors middleware
app.options("*", cors());

const PORT = process.env.PORT || 3000;

// mongoose
// .connect("mongodb://127.0.0.1:27017/SB")
// .connect(
//   "mongodb+srv://rabemiarintsoacjedidiah:654321Mongodb@cluster0.rso5g9w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// )
console.log(process.env.MONGODB_URI);
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connected to Mongodb");
    app.listen(PORT, () => {
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
