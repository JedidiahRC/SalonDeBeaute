const express = require("express");
const router = express.Router();
const employeController = require("../controllers/employeController");

router.post("/addEmploye", employeController.createEmploye);
router.get("/getEmploye", employeController.getAllEmployees);
// router.get("/getEmployeById", employeController.getEmployeById);

router.get("getEmployeById/:employeeId", async (req, res) => {
  const employeeId = req.params.employeeId;
  try {
    const employee = await employeController.getEmployeById(employeeId);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.json(employee);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
