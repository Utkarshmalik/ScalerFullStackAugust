


process.on("message",(message)=>{
    console.log("Message from Parent ",message);

    if(message.task === "processData"){

        const result = message.data.map((num)=>num*2);
      
        // Send the result back to the parent
        process.send(result);

    }

})