const BookingsModel = require('../Models/Booking.model');
const ShowsModel = require('../Models/Show.model');

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const makePayment = async (req,res)=>{


    try{
        
    const {token,amount} = req.body;

    console.log(token, amount);


    const customer = await stripe.customers.create({
        email: token.email,
        source: token.id
    });

    const paymentIntent = await stripe.paymentIntents.create({
        customer:customer.id,
        amount:amount,
        currency:'usd',
        payment_method_types:['card']
    })

    
    const transactionid = paymentIntent.id;

    return res.send({
        success:true,
        message:"Payment Successful",
        data:transactionid
    })

    }

    catch(err){

    }



}


const createBooking = async (req,res)=>{


    const {show,seats,transactionId} = req.body;
    const userId = req.userDetails._id;


    try{

        const newBooking = new BookingsModel({show,seats,transactionId,user:userId});

        const newBookingResponse = await newBooking.save();

        const showDetails = await ShowsModel.findById(show);

        const updatedBookedSeats = [...showDetails.bookedSeats, ...seats];

        await ShowsModel.findByIdAndUpdate(show,{bookedSeats:updatedBookedSeats});


        return res.send({
            success:true,
            message:`Booking successfully created with BookingId: ${newBookingResponse._id}`,
            data:newBookingResponse
        })
        

    }catch(err){


    }
    


}

module.exports={
    makePayment,
    createBooking
}