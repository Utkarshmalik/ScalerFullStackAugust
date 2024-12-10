
const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb+srv://utkarshmalik1:cOSsLMMR1LvTHXHj@cluster0.49bji.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("Connected to DB Successfully")
})
.catch((err)=>{
    console.log(err);
})

//Products 


//Create a Schema for that collection 
const ProductSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
        min:0
    },
    category:{
        type:String,
        required:true,
        enum:["Electronics","Fashion","Jewellery"]
    }

})

//ccreate a collection 
const ProductModel = mongoose.model("Products",ProductSchema);


//insert a document in a collection 

//data for my document 

// const product1 = {
//     name:"Iphone17",
//     description:"The most useless phone in the world",
//     price:5000,
//     category:"Electronic"
// }

//creating a new doucment with the data 

// const product1Document = new ProductModel(product1);

// product1Document.save()
// .then(()=>{
//     console.log("Record Added Successfully")
// })
// .catch((err)=>{
//     console.log("Unable to insert the record");
// })


ProductModel.find({})
.then((productData)=>{
    console.log(productData);
})
.catch((err)=>{
    console.log(err);
})




const port = 3000;

app.listen(port,()=>{

    console.log(`Server is running on port ${port}`);
})