// The fs module in Node.js stands for File System and is used to interact with the file system of the operating system. It allows you to read, write, update, delete, and watch files and directories. It's one of the core modules in Node.js, so you don't need to install it separately.





const fs = require("fs");

// const myData = fs.readFileSync("react.txt",'utf8');

// console.log(myData);


// fs.readFile("reat.txt",'utf-8',(err,data)=>{

//     if(err){
//         console.log(err);
//         return;
//     }

//     console.log(data);
// })


// const content = "Hello! We are learning NodeJS today";


// fs.writeFile('sampleFile.txt',content,'utf8',(err)=>{

//     if(err){
//         console.log(err);
//         return;
//     }

//     console.log("File has been written successfully");
// })





//rename

// fs.rename("react.txt","reactV2.txt",(err)=>{

//     if(err){
//         console.log("Unable to rename a file",err);
//         return;
//     }

//     console.log("File has been renamed successfully");
// });


//delete 

// fs.unlink('reactV2.txt',(err)=>{
    
//         if(err){
//         console.log("Unable to delete a file",err);
//         return;
//     }

//     console.log("File has been deleted successfully");
// });


//File statistics 

// fs.stat("package.json",(err,stats)=>{

//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log(`File Size ` + stats.size);

//     console.log("Is Directory "+ stats.isDirectory());

// });


//fs.mkdir();
//fs.rmdir();
//fs.readdir();


const directoryPath = '/path';

if(fs.existsSync(directoryPath)){

    console.log(`The directory path ${directoryPath} exists`);
} else{
    console.log(`The directory path ${directoryPath} doesnot exists`);
}
