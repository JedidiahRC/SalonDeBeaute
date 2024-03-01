const Appointment = require("../models/Appointments");

exports.createAppointment = async (req, res) => {
  console.log("Launching saveAppointment");
  console.log(req.body);
  try {
    const appointment = new Appointment({
      service: req.body.service,
      date: req.body.date,
      appointmentTime: req.body.appointmentTime,
      employee: req.body.employee,
      employeeName: req.body.employeeName,
      note: req.body.note,
      price: req.body.price,
      comission: req.body.comission,
      duration: req.body.duration,
      clientId: req.body.clientId,
      clientName: req.body.clientName,
      clientEmail: req.body.clientEmail,
    });
    console.log("saving appointments");
    const savedAppointment = await appointment.save();
    res.status(201).json(savedAppointment);
  } catch (error) {
    console.log("saving appointments failed");

    res.status(500).json({ message: error.message });
  }
};

exports.getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({ _id: -1 });
    console.log("All appointments:");
    console.log(appointments);
    res.status(200).json(appointments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getAppointmentsByUser = async (req, res) => {
  console.log("running appbyuser");
  try {
    const { employeeId } = req.params;
    const appointments = await Appointment.find({ employee: employeeId }).sort({
      _id: -1,
    });
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
