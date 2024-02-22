const Employe = require("../models/Employes");


exports.createEmploye = async(req, res) =>{
    try {
        const employe = await Employe.create(req.body)
        const newEmploye = new Employe(employe);
        

        res.status(200).json(employe); 
        console.log('mipotsa');
        console.log(req.body);
        
    } catch (error) {
        res.status(500).json({message: error.message})   
        console.log('tsy tafiditsa');
        console.log(req.body);
             
    }
}
