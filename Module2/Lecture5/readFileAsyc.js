

// Import the 'fs' module
const fs = require("fs");

console.log("Before");


fs.readFile('f2.txt',(err,data)=>{
    if(err){
        console.log("An error occured: "+err);
        return;
    }
   console.log("This is File 1 data " + data);   
});


console.log("end"); 
