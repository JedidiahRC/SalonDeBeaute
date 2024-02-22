const mongoose = require("mongoose");

const serviceSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    duration:{
        type:Number,
        required:true
    }
});
module.exports = mongoose.model('Service', serviceSchema);