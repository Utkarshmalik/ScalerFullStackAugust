// Promise.all is used in JavaScript to handle multiple asynchronous operations (promises) concurrently. It waits for all promises to resolve (or for any one of them to reject) and returns a single promise that resolves with an array of the resolved values.


// Input: It takes an array (or any iterable) of promises as its input. These promises represent the asynchronous tasks that you want to execute concurrently.

// Execution: Promise.all starts executing all the promises in parallel. Each promise begins its asynchronous operation.

// Waiting for Completion: The main thread waits until all promises in the array have resolved or one of them has been rejected.

    // If all the promises in the array resolve successfully, the returned promise resolves with an array containing the resolved values of each promise, in the same order as the input array.
    // If any of the promises are rejected, the returned promise is immediately rejected with the reason of the first promise that was rejected.



const promise1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        // resolve("First");
        reject("First promise rejected");
    },1000);
});

const promise2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Second");
    },500);
});

const promise3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
         resolve("Third");
    },2500);
});


Promise.all([promise1, promise2, promise3])
.then((values)=>{
    console.log(values);
})
.catch((err)=>{
    console.log(err);
})


//dashboard : weather , stock , news 

const weatherPromise = fetchWeatherData();
const stockPromise = fetchStockPrices();
const newsPromise = fetchNewsHeadlines();

Promise.all([weatherPromise, stockPromise, newsPromise])
  .then(([weatherData, stockData, newsData]) => {
    // Render all the data on the dashboard at once
    displayDashboard(weatherData, stockData, newsData);
  })
  .catch((error) => {
    console.error("One or more promises failed:", error);
  });