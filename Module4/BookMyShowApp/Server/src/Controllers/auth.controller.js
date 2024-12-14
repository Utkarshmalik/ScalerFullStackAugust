const UserModel = require("../Models/user.model");



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

        if(password !== user.password){
          return res.send({success:false,
            message:"Sorry! Invalid Password entered"});
        }

        return res.send({
            success:true,
            message:"Login Successful"
        })
        
    }
     catch(err){
        return res.status(500).send({message:"Internal Server Error! Please try again"});
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

     const newUser = new UserModel(req.body);
     await newUser.save();

     return res.status(201).send({success:true,message:"Registration Successful, Please login"});

    }
     catch(err){
        return res.status(500).send({message:"Internal Server Error! Please try again"});
    }


}


module.exports = {
    onLogin,
    onRegister
}