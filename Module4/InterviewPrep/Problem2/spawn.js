const {spawn}  =  require("child_process");


//spawn a new child process to run the ls command 

const ls = spawn('ls',["-lh",'/usr']);


// Listen to data from stdout
ls.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });


  // Listen to errors
  ls.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });
  


// Listen for the process to exit
ls.on('close', (code) => {
    console.log(`Child process exited with code ${code}`);
  });

  console.log("Hello");
