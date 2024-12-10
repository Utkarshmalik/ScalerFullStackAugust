

// Import the Express module
const express  = require("express");
var { productsData } = require("./productDB");
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

app.delete("/products/:id",(req,res)=>{

    const id = req.params.id;

    try{

    const requiredProduct = productsData.find(product => product.id == id);

        if(!requiredProduct){
            return res.status(404).send({message:`The passed productId : ${id} is invalid`});
        }

        //delete a product 
        productsData = productsData.filter((product)=> product.id!=id);

        res.status(200).send({message:`Product with id : ${id} has been deleted successfully`});
   }
      catch(err){
        res.status(500).send({message:"Internal Server Error! Please try again"});
    }

})


app.put("/products/:id",(req,res)=>{

        const id = req.params.id;

          try{ 
            const requiredProduct = productsData.find(product => product.id == id);

            if(!requiredProduct){
                return res.status(404).send({message:`The passed productId : ${id} is invalid`});
            }

            const updatedProductDetails = req.body;
            updatedProductDetails.id = id;

            //delete 
            const allProductsAfterFilter = productsData.filter((product)=> product.id!=id);
            productsData = [...allProductsAfterFilter, updatedProductDetails];


            return res.status(200).send(updatedProductDetails);

          }
          catch(err){
             res.status(500).send({message:"Internal Server Error! Please try again"});

          }
})


//CRUD


const port = 3000;

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})
