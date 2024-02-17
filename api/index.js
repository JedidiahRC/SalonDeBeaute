const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://rabemiarintsoacjedidiah:654321Mongodb@cluster0.rso5g9w.mongodb.net/todoappdb",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

const signupSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  phone: String,
  gender: String,
  email: String,
  password: String,
});

const Signup = mongoose.model("Signup", signupSchema);

app.use(bodyParser.json());

// Handle POST request to /api/signup
app.post("/api/signup", (req, res) => {
  const formData = req.body;

  // Create a new instance of Signup model
  const newSignup = new Signup(formData);

  // Save the form data to MongoDB
  newSignup
    .save()
    .then(() => {
      res.status(200).json({ message: "Form submitted successfully!" });
    })
    .catch((error) => {
      res.status(500).json({ error: "Error submitting form to database" });
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
