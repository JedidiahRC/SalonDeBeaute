const Employe = require("../models/Employes");

exports.createEmploye = async (req, res) => {
  try {
    const employe = await Employe.create(req.body);
    const newEmploye = new Employe(employe);

    res.status(200).json(employe);
    console.log("mipotsa");
    console.log(req.body);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log("tsy tafiditsa");
    console.log(req.body);
  }
};

exports.getAllEmployees = async (req, res) => {
  try {
    const employe = await Employe.find();
    console.log("All signed-up employe:");
    console.log(employe);
    res.status(200).json(employe);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

async function getEmployeById(employeeId) {
  try {
    const employee = await Employe.findById(employeeId);
    return employee;
  } catch (error) {
    // Handle error
    console.error("Error retrieving employee by ID:", error);
    throw error; // You can choose to handle or throw the error as per your requirement
  }
}
