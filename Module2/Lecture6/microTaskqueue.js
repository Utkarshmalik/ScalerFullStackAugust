

const promise = new Promise((function(resolve,reject){

    setTimeout(()=>{
        resolve("Hello");
    },1000)

}))


console.log("Start");


setTimeout(()=>{
    console.log("Hii");
},1000);

promise
.then((data)=>{
    console.log(data);
})
.catch(err=>{
    console.log(err);
})


console.log("End");



// Task Queue (or Macro-task Queue): Holds asynchronous tasks such as setTimeout, setInterval, or I/O events, which are executed after the current stack is empty.
// Microtask Queue: Handles tasks that should be executed after the current execution stack is empty but before the event loop processes the next task from the macro-task queue.


// What is the Microtask Queue?

// The microtask queue is a queue that holds microtasks, such as:

// Resolved Promises (via .then(), .catch(), .finally())
// MutationObserver callbacks (which are used to observe changes in the DOM)

// Microtasks are given higher priority than tasks in the macro-task queue. This means that after a piece of JavaScript finishes executing and the call stack is empty, the event loop checks the microtask queue. All pending microtasks are executed before any new task from the macro-task queue is processed.

