
const jwt = require("jsonwebtoken");

const verfiyToken = (req,res,next)=>{

    const tokenString = req.headers["x-access-token"];

    if(!tokenString){
        return res.status(403).send({message:"No Token is provided"});
    }

    const token = tokenString.split(' ')[1];

    jwt.verify(token,process.env.SECRET,(err,payload)=>{

        if(err){
            return res.status(403).send({message:"Invalid JWT token"});
        }
        
        console.log("Token is valid");
        console.log("payload, ",payload);
        next();
    })

}


module.exports = {
    verfiyToken
}