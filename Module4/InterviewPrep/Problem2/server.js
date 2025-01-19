const express = require("express");
var bodyParser = require('body-parser')
const {fork} = require("child_process");
const path = require("path");
//create an API that returns the nth fibonacii number 
const app = express();

app.use(bodyParser.json())


function calculateFibonaciiNumber(n){

    if(n===1){
        return 0; 
    }

    if(n===2){
        return 1;
    }

    return calculateFibonaciiNumber(n-2) + calculateFibonaciiNumber(n-1);

}


app.get("/fib",(req,res)=>{

    const requiredNumber =  Number(req.body.requiredNumber);

    if(requiredNumber<=0){
        return res.status(400).send({
            success:false,
            message:"requiredNumber cannot be less than 1"
        })
    };

    const answer = calculateFibonaciiNumber(requiredNumber);

    return res.status(200).send({
        success:true,
        data:answer
    })

})


app.get("/calculateFib",(req,res)=>{

    const requiredNumber =  Number(req.body.requiredNumber);

    if(requiredNumber<=0){
        return res.status(400).send({
            success:false,
            message:"requiredNumber cannot be less than 1"
        })
    };

    //create a new child process
    const fibChildProcess = fork(path.join(__dirname,'fibWorker.js'));

   //sending a message to a child
    fibChildProcess.send({requiredNumber:requiredNumber});


    //listening to a message from the child
    fibChildProcess.on("message",(result)=>{
        return res.status(200).send({
            success:true,
            data:result
        })

    })



 
})








app.listen(3000,()=>{
    console.log("App is running on port 3000");
})

