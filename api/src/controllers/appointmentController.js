const Appointment = require("../models/Appointments");

const nodemailer = require("nodemailer");

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

    process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "andryanony08@gmail.com",
        pass: "jqupfetjgjtuxnju",
      },
      tls: {
        rejectUnauthorized: false, // Bypass SSL verification
      },
    });

    const { service, price, appointmentTime, date, duration, employe } =
      req.body;
    const clientName = req.body.clientName;
    const clientEmail = req.body.clientEmail;

    const mailOptions = {
      from: "andryanony08@gmail.com",
      to: clientEmail,
      subject: `Good Morning Mrs.M. ${clientName}, these are your appointment details at Beauty'full Beauty Salon`,
      text: `
    The service you have choosen: ${service}
    Price of it: ${price} MGA
    Your Appointment Time: ${date} - ${appointmentTime}
    Duration of it: ${duration} h
    The employee you have choosen: ${employe}
  `,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log("Ato anaty erreur");
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    console.log(req.body.clientEmail);

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
