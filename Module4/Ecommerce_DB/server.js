
const express = require("express");
const mongoose = require("mongoose");
var bodyParser = require('body-parser')
const ProductRoutes = require("./src/Routes/Product.routes");

const app = express();

mongoose.connect("mongodb+srv://utkarshmalik1:cOSsLMMR1LvTHXHj@cluster0.49bji.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("Connected to DB Successfully")
})
.catch((err)=>{
    console.log(err);
})

app.use(bodyParser.json());


ProductRoutes(app);





const port = 3000;

app.listen(port,()=>{

    console.log(`Server is running on port ${port}`);
})


// ObjectId is a 12-byte hexadecimal value
