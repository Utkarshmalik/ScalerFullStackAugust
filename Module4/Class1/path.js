// The path module in Node.js provides utilities for working with file and directory paths. It's part of Node.js' core modules, so you don't need to install it separately. It makes handling file paths easier across different operating systems (Windows, Linux, macOS) by abstracting their differences.


//Mac

// Platform Independence:

// Windows uses backslashes (\) for paths.
// Unix-based systems (Linux, macOS) use forward slashes (/).
// The path module abstracts these differences.




//path.join 

const path = require("path");
const joinedPath = path.join("users","john","docs","file.txt");
console.log(joinedPath);


const resolvedPath = path.resolve('users','john','docs');
console.log(resolvedPath);