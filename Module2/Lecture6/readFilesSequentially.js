

// Import the 'fs' module
const fs = require("fs");

console.log("Before");


 const readFilePromise1 = fs.promises.readFile('f1.txt');  //2
 const readFilePromise2 = fs.promises.readFile('f2.txt');  //3
 const readFilePromise3 = fs.promises.readFile('f3.txt');  //7

 readFilePromise1
 .then((data1)=>{
    console.log("File 1 data "+ data1);
    return readFilePromise2;
 })
 .then((data2)=>{
       console.log("File 2 data "+ data2);
       return readFilePromise3;
 })
.then((data3)=>{
       console.log("File 3 data "+ data3);
})
 .catch((err)=>{
    console.log("Unable to read the file ",err);
 })


console.log("end"); 
