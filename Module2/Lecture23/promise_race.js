
// Promise.race is a method in JavaScript that takes an iterable of promises as its input and returns a new promise. This new promise settles (either resolves or rejects) as soon as one of the input promises settles, with the same settlement value or reason as the first promise to settle.


const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Task 1 completed'), 2000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Task 2 completed'), 1000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Task 3 completed'), 1500);
});


Promise.race([promise1, promise2, promise3])
.then(result=>{
    console.log(result)
})
.catch(err=>{
    console.log(err);
})

// Fastest CDN Selection:
// In a web application serving content from multiple CDNs, you can use Promise.race to determine which CDN responds fastest. This can help improve page load times by dynamically selecting the fastest CDN for each request.


// Load Balancing in Microservices Architecture:
// In a microservices architecture, requests may be sent to multiple instances of a service. You can use Promise.race to race between requests to different instances and respond with the result from the fastest instance. This can help improve response times and distribute the load evenly across instances.
