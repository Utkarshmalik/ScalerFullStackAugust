const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()

const authRoutes = require('./src/Routes/auth.routes');
const movieRoutes = require('./src/Routes/movies.routes')
const theatreRoutes = require("./src/Routes/theatre.routes");
const showsRoutes = require("./src/Routes/show.routes");
var bodyParser = require('body-parser')
var cors = require('cors');
const showRoutes = require('./src/Routes/show.routes');
const bookingRoutes = require('./src/Routes/booking.routes');
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");

const app = express();

app.use(bodyParser.json())
app.use(cors())

mongoose.connect(process.env.DB_URL)
.then(()=>{
    console.log("Successfully connected to the database");
})
.catch((err)=>{
    console.log("Unable to connect to the DB",err);
})




//Create a rate limiter 

const limiter = rateLimit({
    windowMs:5*1000, //5seconds 
    max:2,
    message:{
        status:429,
        error:"Too many Requests",
        message:"You have exceeded the request limit. Please try again later"
    }    
})

// Apply the rate limiting middleware to all requests.
app.use(limiter);



//Repalce my prohivited characters with _
app.use(
    mongoSanitize({
        replaceWith:"_"     // Replace $ and . with _
    })
)


authRoutes(app);
movieRoutes(app);
theatreRoutes(app);
showRoutes(app);
bookingRoutes(app);


app.listen(process.env.PORT,()=>{

    console.log("Server is running on port 8000");
})







//internal 
//IP Based 
// Client  (For shipping business : shipper based)
// Channel Based 