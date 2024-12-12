
const mongoose = require("mongoose");



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

module.exports = ProductModel;