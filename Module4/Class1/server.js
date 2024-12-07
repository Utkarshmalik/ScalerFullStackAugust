// Server Logic: Server-side code manages user authentication, business logic, data processing, and database interactions. It often generates HTML, JSON, or other data to send back to the client.


// The http module in Node.js allows developers to create and handle HTTP requests and responses. It's one of the core modules in Node.js, meaning it is built-in and does not require separate installation. The http module is essential for building web servers, handling APIs, and processing web-related communication.


const http = require("http");



//Create an HTTP server 

// const server = http.createServer((req,res)=>{

//     console.log("Request recieved from Client");

//       // Set response header
//     res.setHeader('Content-Type','text/plain');

//     //Write the response content 
//     res.write("Hello! I am a server , sending some content");

//     //end the response
//     res.end();

// });

// const server = http.createServer((req,res)=>{

//     console.log("Request recieved from Client");

//       // Set response header
//     res.setHeader('Content-Type','text/html');

//     //Write the response content 
//    res.write('<html><head><title>Node.js HTTP Server</title></head><body>');
//    res.write('<h1>Hello, World!</h1>');
//      res.write('</body></html>');


//     //end the response
//     res.end();

// });


const server = http.createServer((req,res)=>{

    console.log("Request recieved from Client");

      // Set response header
    res.setHeader('Content-Type','application/json');

      const jsonData = {
      message: 'Hello, World! How are you doing ',
     date: new Date(),
     };

    //Write the response content
    res.write(JSON.stringify(jsonData)); 

    //end the response
    res.end();

});



server.listen(5000,()=>{
    console.log("Server running at port 5000");
})


// http.createServer(callback): Creates an HTTP server. The callback handles incoming requests.
// req: Represents the HTTP request (contains headers, URL, method, etc.).
// res: Represents the HTTP response (used to send data back to the client).
// server.listen(port, callback): Starts the server on a specified port.
