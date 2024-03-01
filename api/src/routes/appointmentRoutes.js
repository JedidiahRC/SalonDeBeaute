const express = require("express");
const router = express.Router();
const appointmentController = require("../controllers/appointmentController");

router.post("/createAppointment", appointmentController.createAppointment);
router.get("/getAllAppointments", appointmentController.getAllAppointments);
router.get(
  "/getAppointmentsByUser/:employeeId",
  appointmentController.getAppointmentsByUser
);

module.exports = router;
