// async/await is a modern JavaScript syntax feature that simplifies writing asynchronous code, making it more readable and easier to debug. Introduced in ES2017, it builds upon promises, providing a cleaner, more elegant syntax for working with asynchronous operations.

// Why Async/Await?
// Asynchronous operations are fundamental in JavaScript for non-blocking operations, such as fetching data from a server or reading files. While promises significantly improved asynchronous code readability, async/await further simplifies the syntax, allowing developers to write code that looks synchronous while executing asynchronously.



// An async function returns a promise, automatically wrapping non-promise values in a promise.

// const p = new Promise((resolve,reject)=>{
//   resolve("Promise Resolved");
// })


// async function fetchData(){
//   return "data";
// }


// const dataPromise  =  fetchData();

// console.log(dataPromise);

// dataPromise
// .then((value)=>{
//   console.log("Promise is resolved with value "+ value);
// })
// .catch((err)=>{
//   console.log("Promise is Rejected with err ",err);
// })





console.log("Start");

const p = new Promise((resolve , reject)=>{

  setTimeout(()=>{
      // resolve('Promise Resolved');
      reject("Server is down");
  },2000)

})

//  function handlePromise(){
//     console.log("Start of Handle Promise Function");

//     p.then((val)=>{
//        console.log(val);
//        console.log("End of Handle Promise Function");
//     })
// }






async function handlePromise(){
      try{
      console.log("Start of Handle Promise Function");
      const val = await p;
      console.log(val);
      console.log("End of Handle Promise Function");
    }
    catch(e){
        console.log("Something went wrong ", e);
    }
}

handlePromise();


console.log("End");










// function fetchData(){
//     console.log("Start of Handle Promise Function");

//   p.then((res)=>{
//     console.log(res);
//       console.log("End of Handle Promise Function");
//   })
// }


// fetchData();



