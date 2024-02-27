const signupRoutes = require("./src/routes/signupRoutes");
const authRoutes = require("./src/routes/authRoutes");

function setupRoutes1(app) {
  app.use("/api/user", signupRoutes);
  app.use("/api/auth", authRoutes);
}

module.exports = setupRoutes1;
