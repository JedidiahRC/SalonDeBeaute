const employeRoutes = require("./src/routes/employeRoutes");

function setupRoutes2(app) {
  app.use("/api/employe", employeRoutes);
}

module.exports = setupRoutes2;
