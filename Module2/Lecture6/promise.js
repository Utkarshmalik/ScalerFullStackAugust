
//It provides a way to handle asynchronous code more cleanly and manage the results or errors that may occur when the operation completes. 

//Promises have three states: pending, resolved (fulfilled), or rejected, and they allow you to attach callback functions to handle these different outcomes.




// Promises in JavaScript are a powerful way to handle asynchronous operations. 


// In JavaScript, a promise is an object representing the eventual completion or failure of an asynchronous operation. 





// States of Promise
//Made a Promise => Pending State
// Promise can be fulfilled => Resolved
// Promise can not be fulfilled => Rejected State
// Settled => Promise Executed






//executor




// resolve(value) — If the operation is successful, this function is called with the result.
// reject(error) — If the operation fails, this function is called with the error.



let coinTossPromise = new Promise(function(resolve,reject){

    //perfrom the actual asyncrnous operation 

    setTimeout(()=>{
        // simulate a coin toss delay
        const isHeads = Math.random() > 0.5;

        if(isHeads){
            resolve("Heads");
        }else{
            reject("Tails - Coin resulted in Tails, considered failure in this example");
        }

    },1000);
})
// To use a promise, you attach callbacks to it using the .then(), .catch(), and .finally() methods.




console.log("start");

coinTossPromise
.then((result)=>{
    console.log("Promise is resolved with value ", result)
})
.catch((err)=>{
    console.log("error ",err);
})


console.log("end");