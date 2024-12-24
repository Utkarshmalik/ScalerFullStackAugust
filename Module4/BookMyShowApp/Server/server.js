const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./src/Routes/auth.routes');
const movieRoutes = require('./src/Routes/movies.routes')
const theatreRoutes = require("./src/Routes/theatre.routes");
const showsRoutes = require("./src/Routes/show.routes");

var bodyParser = require('body-parser')
var cors = require('cors');
const showRoutes = require('./src/Routes/show.routes');

require('dotenv').config()

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


authRoutes(app);
movieRoutes(app);
theatreRoutes(app);
showRoutes(app);


app.listen(process.env.PORT,()=>{

    console.log("Server is running on port 8000");
})