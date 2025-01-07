const UserModel = require("../Models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sendEmail = require("../Utils/NotificationUtils");
const otpScript = require("../scripts/otpScript");

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


const onForgetPassword = async (req,res)=>{
    
    const {email}  =  req.body;

    if(!email){   
        return res.status(401)
        .send({
            success:false,
            message:"Email is missing!"
        })
    }

    try{
        let user = await UserModel.findOne({email:req.body.email});

        if(user==null){
            return res.status(404)
            .send({
                success:false,
                message:"User doesnot exists with this email Id"
            })
        }

        //email is correct 

        //generate an OTP 
        const otp = otpGenerator();
        console.log(otp);


        //store this OTP in our storge
        user.otp = otp;
        user.otpExpiry =  Date.now() + 2 * 60 * 1000;
        

        await user.save();



        //send that OTP to the email address 
        sendEmail([user.email],"Reset Password for Bookings App",otpScript(user.name,user.email,otp));


        return res.status(200).send({
            status:"success",
            message:`OTP sent successfully on email Id ${user.email}`
        })


    }

    catch(err){

    }



}

const onResetPassword = async (req,res)=>{
    
    const {otp,password} = req.body;

    if(!otp || !password){
        return res.status(400).send({success:false, message:"Either OTP or Password is not passed"});
    }

    const user = await UserModel.findOne({otp:otp});

    if(user==null){
        return res.status(404).send({
            success:false,
            message:"OTP is incorrect"
        })
    };

    if(Date.now() > user.otpExpiry){
        return res.status(404).send({
            success:false,
            message:"OTP has been expired"
        })
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    user.password  = hashedPassword;
    user.otp=null;
    user.otpExpiry=null;

    await user.save();

    return res.status(200).send({
        success:true,
        message:"Password Reset Successful"
    })
    

}

module.exports = {
    onLogin,
    onRegister,
    onForgetPassword,
    onResetPassword
}


function otpGenerator(){
    return Math.floor((Math.random()*10000)+ 90000);
}