const signupRoutes = require("./src/routes/signupRoutes");
const authRoutes = require("./src/routes/authroutes");
const appointmentRoutes = require("./src/routes/appointmentRoutes");

function setupRoutes1(app) {
  app.use("/api/user", signupRoutes);
  app.use("/api/auth", authRoutes);
  app.use("/api/appointment", appointmentRoutes);
}

module.exports = setupRoutes1;
