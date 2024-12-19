const UserModel = require("../Models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const onLogin = async (req,res)=>{

  const {email, password} = req.body;

    if(!email || !password){
        return res.status(400).send({message:"Incomplete data for login!"})
    }

    try{

        const user = await UserModel.findOne({email:email});

        if(!user){
            return res.status(404).send({success:false,
            message:"User doesnot exists , Please registerr"});
        }

        const isPasswordValid = bcrypt.compareSync(password, user.password);

        if(!isPasswordValid){
          return res.send({success:false,
            message:"Sorry! Invalid Password entered"});
        }

        console.log(process.env.SECRET);

        var token = jwt.sign({ userId:user._id}, process.env.SECRET);

        console.log(token);

        return res.send({
            success:true,
            message:"Login Successful",
            token:token
        })
        
    }
     catch(err){
        console.log(err);
        return res.status(500).send({message:"Internal Server Error! Please try again",err});
    }

}


const onRegister = async (req,res)=>{

    const {name, email, password} = req.body;

    if(!name || !email || !password){
        return res.status(400).send({message:"Incomplete data for register!"})
    }

    try{

     const user = await UserModel.findOne({email:email});

     if(user){
        return res.send({success:false,message:"Email already exists"});
     }

     const salt = await bcrypt.genSalt(10);
     const hashedPassword = bcrypt.hashSync(req.body.password, salt);
     console.log(hashedPassword);

     req.body.password = hashedPassword;

     const newUser = new UserModel(req.body);
     await newUser.save();

     return res.status(201).send({success:true,message:"Registration Successful, Please login"});

    }
     catch(err){
        return res.status(500).send({message:"Internal Server Error! Please try again",err});
    }


}


module.exports = {
    onLogin,
    onRegister
}