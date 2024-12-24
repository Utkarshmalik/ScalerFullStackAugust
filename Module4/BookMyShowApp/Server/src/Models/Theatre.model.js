

const mongoose = require("mongoose");

const theatreSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Users',
        required:true
    },
    isActive:{
        type:Boolean, 
        default:false
    }

})

const TheatreModel = mongoose.model("theatres",theatreSchema);

module.exports = TheatreModel;

