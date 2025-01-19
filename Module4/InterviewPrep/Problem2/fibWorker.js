

function calculateFibonaciiNumber(n){

    if(n===1){
        return 0; 
    }

    if(n===2){
        return 1;
    }

    return calculateFibonaciiNumber(n-2) + calculateFibonaciiNumber(n-1);

}


process.on("message",(msg)=>{

    const {requiredNumber} =  msg;

    const result = calculateFibonaciiNumber(requiredNumber);

    process.send(result);

})