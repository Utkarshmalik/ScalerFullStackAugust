// You are given an array of objects representing transactions made by customers. Each object contains the following properties:

// customerId: Number, representing the unique ID of the customer.
// amount: Number, representing the amount of the transaction.
// date: String, representing the date of the transaction (in the format "YYYY-MM-DD").const

// Your task is to write a JavaScript function using functional programming techniques that takes this array of transaction objects and returns an object containing the following information:

// totalTransactions: Total number of transactions.
// totalAmount: Total amount of all transactions.
// averageTransactionAmount: Average amount of transactions.
// transactionsPerDay: An object where keys are dates and values are arrays containing transactions made on that date.
// transactionsByCustomer: An object where keys are customer IDs and values are arrays containing transactions made by that customer.


const transactions = [
  { customerId: 1, amount: 100, date: '2024-03-01' },
  { customerId: 2, amount: 150, date: '2024-03-01' },
  { customerId: 1, amount: 200, date: '2024-03-02' },
  { customerId: 3, amount: 50, date: '2024-03-02' },
  { customerId: 2, amount: 120, date: '2024-03-03' }
];






// Step 1: Calculate the total number of transactions.
const totalTransactions = transactions.length;
console.log(totalTransactions);


// Step 2: Calculate the total amount of all transactions.
const totalAmount = transactions.reduce((total, transaction)=>{
    return total + transaction.amount
},0);

console.log(totalAmount);

const averageTransactionAmount = totalAmount/totalTransactions;
console.log(averageTransactionAmount);


// acc = {}     -> {2024-03-01:1}
// acc= {2024-03-01:1} -> {2024-03-01:2}
// {2024-03-01:2} => {2024-03-01:2, 2024-03-02:1}
// {2024-03-01:2, 2024-03-02:1}  => {2024-03-01:2, 2024-03-02:2}
//  {2024-03-01:2, 2024-03-02:2} =>  {2024-03-01:2, 2024-03-02:2, 2024-03-03 : 1}



const  transactionsPerDay = transactions.reduce((acc,transaction)=>{   
    const date = transaction.date;

    if(acc[date]){

        acc[date] +=1;

    }else{

        acc[date] = 1;

    }

    return acc;

},{})
console.log(transactionsPerDay);




const  transactionsByCustomer = transactions.reduce((acc,transaction)=>{   
    const customerId = transaction.customerId;
    
    if(acc[customerId]){

        acc[customerId] +=1;

    }else{

        acc[customerId] = 1;

    }

    return acc;

},{})
console.log(transactionsByCustomer);


// // output: 
// // {
// //   totalTransactions:5,
// //   totalAmount:620,
// //   averageTransactionAmount: 124,
// //   transactionsPerDay :{
//     2024-03-01: 2,
//     2024-03-02: 2, 
//     2024-03-03 :1
// }
// // //   transactionsByCustomer : {
//      1:2,
//      2:2,
//      3":1
// }
// // };