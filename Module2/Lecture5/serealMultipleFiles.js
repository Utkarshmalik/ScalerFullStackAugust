

// Import the 'fs' module
const fs = require("fs");
console.log("Before");


fs.readFile('f1.txt',(err,data1)=>{
    if(err){
        console.log("An error occured: "+err);
        return;
    }

    console.log("This is File 1 data " + data1);   


        fs.readFile('f2.txt',(err,data2)=>{
        if(err){
            console.log("An error occured: "+err);
            return;
        }

            console.log("This is File 2 data " + data2);   

            fs.readFile('f3.txt',(err,data3)=>{
                if(err){
                    console.log("An error occured: "+err);
                    return;
                }
                    console.log("This is File 3 data " + data3);   
            });
});

});

console.log("end"); 
