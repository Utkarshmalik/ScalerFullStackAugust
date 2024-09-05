

// Import the 'fs' module
const fs = require("fs");

console.log("Before");


 const readFilePromise1 = fs.promises.readFile('f1.txt');   //4


 readFilePromise1
 .then((data1)=>{
    console.log("File 1 data "+ data1);
    return fs.promises.readFile('f2.txt');
 })
 .then((data2)=>{
       console.log("File 2 data "+ data2); 
       return fs.promises.readFile('f3.txt');;  //5
 })
.then((data3)=>{
       console.log("File 3 data "+ data3);
})
 .catch((err)=>{
    console.log("Unable to read the file ",err);  //2
 })


console.log("end"); 
