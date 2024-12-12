
const ProductModel = require("../Models/Product.model");

const createProduct = async (req,res)=>{

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

}


const getAllProducts = async (req,res)=>{

    try{
          const data = await ProductModel.find({});

          return res.status(200).send(data);
        
    }
    catch(err){
        return res.status(500).send({message:"Internal Server Error! Please try again"});
    }    
}


const getProductByProductId = async (req,res)=>{

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
}


const deleteProductByProductId = async (req,res)=>{

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
}

const updateProductByProductId = async (req,res)=>{

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

}



module.exports = {
    createProduct,
    getAllProducts,
    getProductByProductId,
    deleteProductByProductId,
    updateProductByProductId
}