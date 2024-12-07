

// Import the Express module
const express  = require("express");
const { productsData } = require("./productDB");
var bodyParser = require('body-parser')


// Create an Express application
const app = express();


app.use(bodyParser.json());


//Define a basic route 
app.get("/",(req,res)=>{
    res.send('Hello! Express');
})

//Get all products 

app.get("/products",(req,res)=>{
    res.json(productsData);
});

//Get a product details via product Id 

app.get("/products/:id",(req,res)=>{
    
    const productId = req.params.id;

    try{

        const requiredProduct = productsData.find(product=>product.id==productId);

        if(!requiredProduct){
            return res.status(404).json({message:`Product with productId: ${productId} is not present`});
        }

        res.json(requiredProduct);


    }catch(err){
        res.status(500).send({message:"Internal Server Error! Please try again"});
    }

});




//middlewares

// When  a request comes to server   -------------  When to reaches the route


//Create a new product 
app.post("/products",(req,res)=>{

    try{
    const productData = req.body;

    if(!productData.title){
        return res.status(400).send({message:"Title is not passed in product data"});
    }

    //create a random UUID 
    const uuid = Math.floor((Math.random() * 100)*10).toString();

    productData.id = uuid;

    productsData.push(productData);

    return res.status(201).json({message:`Product Successfully created with ProductId : ${productData.id}`});
   }
   catch(err){
        res.status(500).send({message:"Internal Server Error! Please try again"});
    }

});




const port = 3000;

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})
