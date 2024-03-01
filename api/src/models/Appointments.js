const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  service: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  appointmentTime: {
    type: String,
    required: true,
  },
  employee: {
    type: String,
    required: true,
  },
  employeeName: {
    type: String,
  },
  note: {
    type: String,
  },
  price: {
    type: Number,
  },
  comission: {
    type: Number,
  },
  duration: {
    type: Number,
  },
  clientId: {
    type: String,
  },
  clientName: {
    type: String,
  },
  clientEmail: {
    type: String,
  },
});

appointmentSchema.pre("save", function (next) {
  const formattedDate = formatDate(this.date);
  this.date = formattedDate;
  next();
});

function formatDate(date) {
  const d = new Date(date);
  const day = d.getDate().toString().padStart(2, "0");
  const month = (d.getMonth() + 1).toString().padStart(2, "0"); // January is 0!
  const year = d.getFullYear();
  return `${day}-${month}-${year}`;
}

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;
