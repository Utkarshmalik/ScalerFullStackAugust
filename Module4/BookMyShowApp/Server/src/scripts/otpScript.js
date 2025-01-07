


const otpScript =  (name,email,otp) => 
{
    return `<html>

<head>

</head>

<body>

   <h3> Hi ${name} </h3>

   <h4> Use OTP : ${otp} to reset your password for email id : ${email} on bookings app </h4>

</body>

</html>

`

}

module.exports = otpScript;