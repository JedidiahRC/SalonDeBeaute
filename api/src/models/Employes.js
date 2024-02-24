
const mongoose = require("mongoose");

const employeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    adresse:{
        type:String,
        required: true
    },
    contact:{
        type:String,
        required: true
    },
    specialite:{
        type:String,
        required: true
    },
    horaire:{
        type:String,
        required: true
    },
    salaire:{
        type:Number,
        required: true
    },
    statut:{
        type:String,
        required: true
    },
    is_admin:{
        type:Number,
        required: true
    },
  
});
module.exports = mongoose.model('Employe', employeSchema);