



//utilities for directries and files 

const path = require("path");

const filePath = '/Users/utmalik/Scaler/ScalerFullStackAugust/Module4/InterviewPrep/Problem 1/bigFile';

console.log("Directory Name ", path.dirname(filePath));

console.log("Base Name ", path.basename(filePath));


const newPath = path.join('/user','local','bin','newFile.txt');
console.log(newPath);


//resolve to an absoute path 
const absolutePath = path.resolve('Problem 1','bigFile');
console.log(absolutePath);