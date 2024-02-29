const employeRoutes = require("./src/routes/employeRoutes");
const serviceRoutes = require("./src/routes/serviceRoutes");


function setupRoutes2(app) {
  app.use("/api/employe", employeRoutes);
  app.use("/api/service", serviceRoutes);
}

module.exports = setupRoutes2;
