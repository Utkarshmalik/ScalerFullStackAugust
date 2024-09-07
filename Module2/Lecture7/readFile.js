

// Import the 'fs' module
const fs = require("fs");

console.log("Before");

async function readMultipleFiles(){
 const data1 = await fs.promises.readFile('f1.txt');  
 const data2 = await fs.promises.readFile('f2.txt');  
 const data3 = await fs.promises.readFile('f3.txt');  

console.log("File 1 data "+ data1);
console.log("File 2 data "+ data2);
console.log("File 3 data "+ data3);
}

readMultipleFiles();

console.log("end"); 
