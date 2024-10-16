
//  It's designed to work similarly to Promise.race, but with one key difference: while Promise.race settles as soon as any of the input promises settles, regardless of whether it resolves or rejects, Promise.any settles as soon as any of the input promises resolves.


// Input: Like other promise methods (Promise.all, Promise.race, etc.), Promise.any takes an iterable of promises as its input. These promises represent the asynchronous tasks that you want to race against each other.

// Execution: Promise.any starts executing all the promises in parallel, just like Promise.all and Promise.race. Each promise begins its asynchronous operation.

// Settlement: The first promise to resolve determines the settlement of the new promise returned by Promise.any.

// If any of the input promises resolve, the new promise returned by Promise.any resolves with the value of the first resolving promise.

// If all input promises are rejected, the new promise returned by Promise.any rejects with an AggregateError, which is a special error type that aggregates multiple errors into one.



const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => reject('Promise 1 rejected'), 2000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject('Promise 2 rejected'), 1000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => reject('Promise 3 rejected'), 1500);
});

Promise.any([promise1, promise2, promise3])
.then(result=>{
    console.log(result)
})
.catch(err=>{
    console.log(err);
    console.log(err.message);
    console.log(err.errors);
})
