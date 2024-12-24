
const mongoose = require("mongoose");


const showSchema = new mongoose.Schema({

    name:{
        type:String, 
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    theatre:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'theatres',
        required:true
    },
    movie:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'movies',
        required:true
    },
    totalSeats:{
        type:Number,
        required:true
    },
    bookedSeats:{
        type:Array,
        default:[]
    },
    ticketPrice:{
        type:Number,
        required:true
    }

})

const ShowsModel = mongoose.model("Shows",showSchema);


module.exports = ShowsModel;