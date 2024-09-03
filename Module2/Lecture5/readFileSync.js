

// Import the 'fs' module
const fs = require("fs");

console.log("Before");

// Read file synchronously (blocking)
let data1 = fs.readFileSync('f1.txt'); // The execution is blocked until the file is read

console.log("This is File 1 data " + data1);  // This is printed after the file is read

console.log("end"); 
