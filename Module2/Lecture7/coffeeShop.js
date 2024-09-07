// we have a problem that we are at a coffee shop and the now the coffee shop only has coffee we cannot order for any other drink , it will reject if any other drink is ordered and if s coffee is ordered it will be accepted then it will be processed then it will be serverd and at the end we will recieve a bill


function placeOrder(drink){
    return new Promise((function(resolve,reject){

        if(drink==="coffee"){
            resolve("Order for coffee placed");
        }else{
            reject("Order cannot be placed");
        }
    }))
}

function processOrder(orderPlaced){
    return new Promise((function(resolve,reject){
        resolve(`${orderPlaced} and processed`);
    }))
}

function generateBill(processedOrder){
    return new Promise(function(resolve, reject){
        resolve(`${processedOrder} and Bill Generated with 200Rs`);
        // reject("Bill Machine is faulty");
    })
}


async function serveOrder(){
    try{
    let orderStatus = await placeOrder("coffee");
    let processedOrder = await processOrder(orderStatus);
    let generatedBill = await generateBill(processedOrder);
    console.log(generatedBill);
    }
    catch(err){
        console.log("Something went wrong ",err);
    }
}


serveOrder();







placeOrder('coffee')
.then((orderStatus)=>{
    return orderStatus;
})
.then((orderStatus)=>{
    return processOrder(orderStatus);
})
.then((orderIsProcessed)=>{
     return  generateBill(orderIsProcessed);
})
.then((billGenerated)=>{
    console.log(billGenerated);
})
.catch((err)=>{
    console.log("Something went Wrong ", err);
})



// function a (){

//     return new Promise((function(resolve,reject){

//         setTimeout(()=>{
//             resolve("Hii");
//         },1000)

//     }))
// }


// a()
// .then((data)=>{
//     console.log(data);
//     return "Bye";
// })
// .then((data)=>{
//     console.log(data);
//     return "Sie";
// })
// .then((data)=>{
//     console.log(data);
// })