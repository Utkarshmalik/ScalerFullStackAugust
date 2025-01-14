const express = require('express');
const http = require("http");
const socketIO = require("socket.io");

// Create an Express app
const app = express();

// Create an HTTP server using the Express app
const server = http.createServer(app);

// Set up Socket.IO on the server
const io = socketIO(server);



app.get("/",(req,res)=>{
    res.sendFile(__dirname + '/index.html');
})


// Handle incoming WebSocket connections
io.on("connection",(socket)=>{
    console.log("A user has connected");

    // Listen for a 'chat message' event from the client
    socket.on('chat message',(msg)=>{
        console.log("Message Recieved: ",msg);


    //Emit the messages to all connected clients
       io.emit("chat message",msg);
    })

})




server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });