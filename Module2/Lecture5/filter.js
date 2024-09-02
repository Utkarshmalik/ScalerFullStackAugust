



// == : checks the value , not the type 
// === : strict check : it checks the value as well as the type 

// 1 == 1 : true 
// 1 == '1' : true 
// 1===1 : true 
// 1 === '1' : false

//return a new array containing only even numbers

// let myArr = [1,2,5,7,8,2,6,9,13,17];


// let results = [];

// for(let i=0;i<myArr.length;i++){
//     if(myArr[i]%2===0){
//         results.push(myArr[i]);
//     }
// }

// console.log(results);


// let myArr = [1,2,5,7,8,2,6,9,13,17];


// const output = myArr.filter(function(value,index, arr){

//     const includeInOutputArray = value % 2 ===0;
//     return includeInOutputArray;

// })

// console.log(myArr);
// console.log(output);


// const output = myArr.filter(function(value,index, arr){

//     //   return some boolean from this callback function 
    
//     ///if you return true for that element : it will be included in the output array 
//     // if you return false for that element : it will not be included in the output array 

// })


// function x(r){
//     return 5;
// }

// const x = (r)=>{
//     return  5;
// }



const transactions = [1000, 3000, 4000, 2000, - 898, 3800, - 4500];


const positiveTransactions = transactions.filter((transaction)=>{
    return transaction > 0;
})


// const positiveTransactions = transactions.filter(function(transaction){
//     return transaction > 0;
// })

console.log(positiveTransactions);