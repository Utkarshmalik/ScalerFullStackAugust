

// Import the 'fs' module
const fs = require("fs");

console.log("Before");


 const readFilePromise1 = fs.promises.readFile('f1.txt');
 const readFilePromise2 = fs.promises.readFile('f2.txt');
 const readFilePromise3 = fs.promises.readFile('f3.txt');

 readFilePromise1
 .then((data)=>{
    console.log("File 1 data "+ data);
 })
 .catch((err)=>{
    console.log("Unable to read the file ",err);
 })

  readFilePromise2
 .then((data)=>{
    console.log("File 2 data "+ data);
 })
 .catch((err)=>{
    console.log("Unable to read the file ",err);
 })



  readFilePromise3
 .then((data)=>{
    console.log("File 3 data "+ data);
 })
 .catch((err)=>{
    console.log("Unable to read the file ",err);
 })



console.log("end"); 
