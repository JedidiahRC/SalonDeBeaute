const Service = require("../models/Services");


exports.createService = async(req, res) =>{
    try {
        const service = await Service.create(req.body)
        const newService = new Service(service);
        

        res.status(200).json(service); 
        console.log('mipotsa');
        console.log(req.body);
        
    } catch (error) {
        res.status(500).json({message: error.message})   
        console.log('tsy tafiditsa');
        console.log(req.body);
             
    }
}
