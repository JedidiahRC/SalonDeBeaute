const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
require("dotenv").config();

const setupRoutes1 = require("./routes1");
const setupRoutes2 = require("./routes2");

const signupRoutes = require("./src/routes/signupRoutes");
const authRoutes = require("./src/routes/authRoutes");
const employeRoutes = require("./src/routes/employeRoutes");
const serviceRoutes = require("./src/routes/serviceRoutes");
const cors = require("cors");
const Employes = require("./src/models/Employes");

app.use(bodyParser.json());

app.use(cors());
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
setupRoutes1(app);
setupRoutes2(app);




const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "andryanony08@gmail.com",
    pass: "jqupfetjgjtuxnju",
  },
});

  const mailOptions = {
  from: "andryanony08@gmail.com",
  to: "rabemiarintsoa@gmail.com",
  text:"Nosokafany"

  };
transporter.sendMail(mailOptions, function(error, info){
  if(error){
    console.log(error);
  }else{
    console.log("Email sent: " + info.response);
  }
});
