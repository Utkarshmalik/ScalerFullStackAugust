const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./src/Routes/auth.routes');
var bodyParser = require('body-parser')

require('dotenv').config()

const app = express();

app.use(bodyParser.json())


mongoose.connect(process.env.DB_URL)
.then(()=>{
    console.log("Successfully connected to the database");
})
.catch((err)=>{
    console.log("Unable to connect to the DB",err);
})


authRoutes(app);



app.listen(process.env.PORT,()=>{

    console.log("Server is running on port 8000");
})