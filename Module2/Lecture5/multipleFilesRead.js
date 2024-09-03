

// Import the 'fs' module
const fs = require("fs");
console.log("Before");


fs.readFile('f1.txt',(err,data)=>{
    if(err){
        console.log("An error occured: "+err);
        return;
    }
   console.log("This is File 1 data " + data);   
});

fs.readFile('f2.txt',(err,data)=>{
    if(err){
        console.log("An error occured: "+err);
        return;
    }
   console.log("This is File 2 data " + data);   
});

fs.readFile('f3.txt',(err,data)=>{
    if(err){
        console.log("An error occured: "+err);
        return;
    }
   console.log("This is File 3 data " + data);   
});


console.log("end"); 
