const Service = require("../models/Services");

exports.createService = async (req, res) => {
  try {
    const service = await Service.create(req.body);
    const newService = new Service(service);

    res.status(200).json(service);
    console.log("mipotsa");
    console.log(req.body);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log("tsy tafiditsa");
    console.log(req.body);
  }
};

const Service = require("../models/Services"); // Assuming your model file is in the "models" directory

exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    console.log("All signed-up services:");
    console.log(services);
    res.status(200).json(services);
  } catch (error) {
    console.error("Error retrieving services:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
