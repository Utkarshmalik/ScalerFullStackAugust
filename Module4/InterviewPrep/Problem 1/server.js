

const express = require("express");
const path = require("path");
const fs = require("fs");

const app= express();


app.get("/downloadFullFile",(req,res)=>{

    //contruct the file path 
    const filePath = path.join(__dirname,'bigFile');
    //Read the entire file 

    fs.readFile(filePath,(err,data)=>{

        if(err){
            return res.status(500).send({error:"Internal Server Error"});
        }

        res.setHeader('Content-Type','text/plain');
        res.send(data);

    });
})


app.get("/downloadFileWithStreams",(req,res)=>{

    //contruct the file path 
    const filePath = path.join(__dirname,'bigFile');

    //Create a readable Stream for the file 
    const readableStream = fs.createReadStream(filePath,{
        highWaterMark:80000
    });  
        
    //Create a writable Stream for the new file 
    const writetableStream = fs.createWriteStream("copyOfBigFile");

    readableStream.on("data",(chunk)=>{
        console.log(`Received ${chunk.length} bytes of data`);

        //write the chunk into a writeable stream
        writetableStream.write(chunk);
    })

    readableStream.on("end",()=>{
        console.log("Finished reading a file");

        //end the writeable steam here 
        writetableStream.end();

        console.log("Finished Reading and Writing the file");
    })

})



app.get("/downloadFileWithStreamsPipe",(req,res)=>{

    //contruct the file path 
    const filePath = path.join(__dirname,'bigFiles');

    //Create a readable Stream for the file 
    const readableStream = fs.createReadStream(filePath,{highWaterMark:80000});  

    //Create a writable Stream for the new file 
    const writetableStream = fs.createWriteStream("copyOfBigFileNew");

    readableStream.pipe(writetableStream);

    readableStream.on("error",(err)=>{
        console.log("Error while reading ",err.message);
    })

    writetableStream.on("error",(err)=>{
        console.log("Error while writing ",err.message);
    })

    })


app.get("/downloadFile",(req,res)=>{

    //contruct the file path 
    const filePath = path.join(__dirname,'bigFile');

    //Create a readable Stream for the file 
    const readableStream = fs.createReadStream(filePath,{highWaterMark:80000});  


    //source : readable stream 
    //destination : res

    readableStream.pipe(res);

    })







app.listen(8000,()=>{
    console.log("Server is listening on port 8000");
})






















