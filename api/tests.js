const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const signupRoutes = require("./src/routes/signupRoutes");
const authRoutes = require("./src/routes/authRoutes"); // Corrected path
const cors = require("cors");

const app = express();

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/SB")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.use(bodyParser.json());
app.use(cors()); // Use cors middleware
app.options("*", cors());

// Routes
app.use("/api", signupRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
