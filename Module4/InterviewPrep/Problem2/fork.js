// The fork method is a specialized version of spawn for spawning new Node.js processes. It creates a communication channel (ipc) to send and receive messages.

const {fork} = require("child_process");


// Fork a child process
const child = fork("./worker.js");


//Send a message to the child process 
child.send({task:"processData",data:[1,2,3,4]});


child.on("message",(result)=>{

    console.log(`Result from child process is ${result}`);
})




// Handle errors
child.on('error', (error) => {
    console.error(`Error from child process: ${error}`);
  });
  
  // Listen for child process exit
  child.on('exit', (code) => {
    console.log(`Child process exited with code ${code}`);
  });



  console.log("Hello");