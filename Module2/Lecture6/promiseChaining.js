// The .then() method returns a new promise, which allows for sequential execution of asynchronous operations



//cleanRom promise 
//removeGarbage promise

//winIcecream promise 



let cleanRoom = function(){
    return new Promise(function(resolve,reject){
        resolve("Cleaned the room")
        // reject("I didnt clean the room");
    })
};

let removeGarbage = function(){

    return new Promise(function(resolve,reject){
        // resolve("removed the garbage");
        reject("I didnt remove the garbage");
    })
}

let winIceCream = function(){
    return new Promise(function(resolve,reject){
        resolve("You won the ice cream");
    })
}

// When chaining these promises, we can handle rejection at each step or at the end of the chain. Handling it at each step allows for more granular error handling, which might be useful if you want to attempt recovery or perform specific actions based on the type of failure.



cleanRoom()
.then((message1)=>{
    console.log(message1);
    return removeGarbage()
})
.then((message2)=>{
    console.log(message2)
    return winIceCream()
})
.then((message3)=>{
    console.log(message3);
})
.catch((err)=>{
    console.log("You lost the icecream ",err)
})


















// cleanRoom()
// .then((message1)=>{
//     console.log(message1);
//     removeGarbage()
//     .then((message2)=>{
//         console.log(message2);
//         winIceCream()
//         .then((message3)=>{
//             console.log(message3);
//         })

//     })
// })
