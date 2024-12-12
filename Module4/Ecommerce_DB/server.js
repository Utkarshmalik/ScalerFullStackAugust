
const express = require("express");
const mongoose = require("mongoose");
var bodyParser = require('body-parser')

const app = express();

mongoose.connect("mongodb+srv://utkarshmalik1:cOSsLMMR1LvTHXHj@cluster0.49bji.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("Connected to DB Successfully")
})
.catch((err)=>{
    console.log(err);
})

app.use(bodyParser.json())


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

app.post("/products",async (req,res)=>{

    if(!req.body.name || !req.body.description || !req.body.price || !req.body.category){
        return res.status(400).send({message:"Some parameters in the request are missing"});
    }


    const product = new ProductModel(req.body);

    try{
         const  data = await product.save();

         if(data){
            return res.status(201).send(data);
         }

    }
    catch(err){
        return res.status(500).send({message:"Internal Server Error! Please try again"});
    }

});



app.get("/products",async (req,res)=>{

    try{
          const data = await ProductModel.find({});

          return res.status(200).send(data);
        
    }
    catch(err){
        return res.status(500).send({message:"Internal Server Error! Please try again"});
    }    
})

app.get("/products/:id",async (req,res)=>{

    const productId  = req.params.id;

    const idValidObjectId = mongoose.Types.ObjectId.isValid(productId);

    if(!idValidObjectId){
        return res.status(400).send({message:`Id passed : ${productId} is not a valid Object Id`})
    }

 try{

     const data = await ProductModel.findById(productId);

     if(data==null){
        return res.status(404).send({message:`Product with productId: ${productId} is not a valid product id`})
     }
       return res.status(200).send(data);   
    }
    catch(err){
        
        return res.status(500).send({message:`Internal Server Error : ${err.message}! Please try again`,});
    }    
})


app.delete("/products/:id",async (req,res)=>{

     const productId  = req.params.id;

    const idValidObjectId = mongoose.Types.ObjectId.isValid(productId);

    if(!idValidObjectId){
        return res.status(400).send({message:`Id passed : ${productId} is not a valid Object Id`})
    }

 try{

     const data = await ProductModel.deleteOne({_id:productId});

     console.log(data);

     if(data==null || data.deletedCount===0 ){
        return res.status(404).send({message:`Product with productId: ${productId} is not a valid product id`})
     }

       return res.status(200).send({message:`Product with productId: ${productId} deleted successfully`});   
    }
    catch(err){
        
        return res.status(500).send({message:`Internal Server Error : ${err.message}! Please try again`,});
    }   

})


app.put("/products/:id",async (req,res)=>{

     const productId  = req.params.id;

    const idValidObjectId = mongoose.Types.ObjectId.isValid(productId);

    if(!idValidObjectId){
        return res.status(400).send({message:`Id passed : ${productId} is not a valid Object Id`})
    }

 try{

     const data = await ProductModel.findByIdAndUpdate(productId,req.body,{new:true});

     if(!data){
        return res.status(404).send({message:`Product with productId: ${productId} is not a valid product id`})
     }

     return res.status(200).send(data);
   
    }
    catch(err){
        
        return res.status(500).send({message:`Internal Server Error : ${err.message}! Please try again`,});
    }   

})






















//insert a document in a collection 

//data for my document 

// const product1 = {
//     name:"iphone18",
//     description:"The most useless phone in the world",
//     price:5000,
//     category:"Electronics"
// }

// creating a new doucment with the data 

// const product1Document = new ProductModel(product1);

// product1Document.save()
// .then(()=>{
//     console.log("Record Added Successfully")
// })
// .catch((err)=>{
//     console.log("Unable to insert the record",err);
// })


// ProductModel.find({})
// .then((productData)=>{
//     console.log(productData);
// })
// .catch((err)=>{
//     console.log(err);
// })



const port = 3000;

app.listen(port,()=>{

    console.log(`Server is running on port ${port}`);
})


// ObjectId is a 12-byte hexadecimal value
