
const mongoose = require("mongoose");


const bookingSchema = new mongoose.Schema({

    show:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Shows'
    },
    user:{
          type:mongoose.Schema.Types.ObjectId,
        ref:'Users'
    },
    seats:{
        type:Array,
        required:true
    },
    transactionId:{
        type:String,
        required:true
    }

})

const BookingsModel = mongoose.model("Bookings",bookingSchema);

module.exports  = BookingsModel;

