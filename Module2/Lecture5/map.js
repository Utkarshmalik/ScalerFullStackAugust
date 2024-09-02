
// we are given an array of numbers and we want the square of every number of an array

// let arr = [1,2,3,4,5];

// let squaredArr=[];

// for(let i=0;i<arr.length;i++){
//     squaredArr.push(arr[i] * arr[i]);
// }

// console.log(squaredArr);

// arr.map(callback);

// const squaredArr = arr.map(function(val,idx,array){
//     return  val * val;
// });

// console.log(arr);
// console.log(squaredArr);



//  const output = arr.map(
//     function(value,index,actualArr){
//     return value * 5;
// });

// console.log(arr);

// console.log(output);






// You are given a transaction array treat the transaction amount in rupees,
//  and convert those amounts into dollars and conversion rate is also provided to us.


const transactions = [1000, 3000, 4000, 2000, - 898, 3800, - 4500];
const inrtToUsd = 80;



const conversionToDollar  = transactions.map(function(amount){
    return amount/inrtToUsd;
})

console.log(conversionToDollar);