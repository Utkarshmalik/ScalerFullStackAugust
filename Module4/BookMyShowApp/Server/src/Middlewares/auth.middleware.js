
const jwt = require("jsonwebtoken");
const UserModel = require("../Models/user.model");

const verfiyToken =  (req,res,next)=>{

    const tokenString = req.headers["x-access-token"];

    if(!tokenString){
        return res.status(403).send({message:"No Token is provided"});
    }

    const token = tokenString.split(' ')[1];

    jwt.verify(token,process.env.SECRET,async (err,payload)=>{

        if(err){
            return res.status(403).send({message:"Invalid JWT token"});
        }

        const userId = payload.userId;
        
        try{
            const user = await UserModel.findById(userId);
            req.userDetails = user;
        }
        catch(err){

        }

        next();
    })

}

const verifyAdmin = (req,res,next)=>{

    const role = req.userDetails.role;
    
    if(role!='admin'){
       return res.status(403).send({message:"You are unauthorised to perform this operation"});
    }
    
    next();
}


module.exports = {
    verfiyToken,
    verifyAdmin
}