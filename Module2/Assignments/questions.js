// Problem Description You need to make a formatted sentence using the relevant information, which will be contained in an input object called book.

// The format of the sentence should be: BOOK_NAME by AUTHOR_NAME was published in PUBLISH_YEAR.

// Log this sentence to the console.

// Sample Input0 let book = {

// title: "The Great Gatsby", author: "F. Scott Fitzgerald", publishedYear: "1925",

// };


// function main(book){
//     console.log(`${book.title} by ${book.author} was published in ${book.publishedYear}.`);
// }


// let book = {
// title: "The Great Gatsby", 
// author: "F. Scott Fitzgerald",
//  publishedYear: "1925"
// };

// main(book);


// Problem Description

// Create a function called reverseString that takes a string as input and returns the reversed version.

// The function is called with the argument of a string that needs to be reversed. Use array methods to reverse the string.

// Input Format String

// Sample Input 0 hello

// Sample Output 0 olleh



// function reverseString(str){

//     //str to array 

//     const strArr = str.split('');

//     strArr.reverse();

//     const finalStr = strArr.join('');

//     return finalStr;
    

// }

// const output = reverseString("scaler");
// console.log(output);


// Problem Description Write a function that takes in a string and returns the count of vowels in that string. Consider the vowels to be a, e, i, o, u (both uppercase and lowercase).

// Example:

// Input: "Hello World" Output: 3 (Because there are 2 'o's and 1 'e')

// Hints Make use of the includes method to check if a character is a vowel or not.


// function countVowels(str){

//     let counter=0;

//     let vowels = "aeiouAEIOU";

//     for(let i=0;i<str.length;i++){

//         if(vowels.includes(str[i])){
//             counter++;
//         }

//     }

//     return counter;

// }

// const output = countVowels("utkarsh");
// console.log(output);



// Problem Description Write a function that takes in a string and returns the longest word in that string. If there are multiple words with the same length, return the first one you encounter.

// Example:

// Input:

// "JavaScript is a fun programming language"

// Output:

// "programming"

// function findLongestWord(s){

//     let allWords = s.split(" ");


//     let longestWord = allWords[0];

//     for(let i=1;i<allWords.length;i++){

//         let currWord = allWords[i];

//         if(currWord.length > longestWord.length){
//             longestWord =currWord;
//         }
//     }

//     return longestWord;
// }

// const output = findLongestWord("JavaScript is a fun programming language");
// console.log(output);





// Problem Description Write a function that takes in an array of numbers and returns the maximum value in that array.

// Example:

// Input: [1, 4, 2, 7, 5]

// Output: 7


// function findMax(arr){

//     let maxVal = arr[0];

//     for(let i=1;i<arr.length;i++){
//         if(arr[i]>maxVal){
//             maxVal = arr[i];
//         }
//     }

//     return maxVal;
// }

// const output = findMax([1,4,2,6,7,8]);

// console.log(output);



// oblem Description Write a function that checks if a given string is a palindrome. A palindrome is a word, phrase, number, or other sequences of characters which reads the same backward as forward (ignoring spaces, punctuation, and capitalization).

// Example:

// Input: "Madam"

// Output: true


// function  isPalindrome(str){

//     str = str.toLowerCase().replace(/[^a-z0-9]/g,"");

//     return str === str.split('').reverse().join('');

// }

// const output = isPalindrome("m a d # @ a m");
// console.log(output);


// Problem Description Write a JavaScript function named allPositive that checks whether all numbers in a given array are positive using the every() method.

// Inputs: An array of numbers.

// function allPositive(arr){
//     return arr.every((num)=>{
//         return num > 0;
//     })
// }



// Problem Description Write a JavaScript function named doubleValues that takes an array of numbers and returns a new array where each number is doubled using the map() method.


// function doubleValues(arr){
//     return arr.map((num)=>{
//         return num*2;
//     })
// // }
// Problem Description Write a JavaScript function named filterOutOdd that uses the filter() method to filter out odd numbers from an array.

// Example:

// Inputs: An array of numbers.


// function filterOutOdd(arr){

//     return arr.filter((num)=>{
//         return num%2===0;
//     })
// }

// Problem Description Write a JavaScript function named findFirstNegative that finds and returns the first negative number in an array using the find() method. return undefined if there are no negative numbers in the array.


// function firstNegative(arr){
//     return arr.find((num) =>  num < 0);
// }


// const ans = firstNegative([1,5,6,7,8,-5]);

// console.log(ans);


// Problem Description Write a JavaScript function named sumArray that takes an array of numbers and returns the sum of all the numbers in the array using the reduce() method.


// function sumArr(arr){
//     return arr.reduce((acc,curr)=> acc+curr ,0);
// }




// Raw Problem
// Write a program in JS to do the below mentioned task:

// When the button is clicked, append a div element, containing inner text 'Hello', as Child for the body element.


// let btn = document.querySelector("button");

// btn.addEventListener("click", function () {

//       let divElem = document.createElement("div");
//         divElem.innerText = "Hello";
//       let bodyElem = document.querySelector("body");
//         bodyElem.appendChild(divElem);
// })


// Raw Problem
// Write a program in JavaScript to perform the below-mentioned task:

// Use a single event handler (only one element should have an event handler attached to it) and do the following:
// By clicking the color name, change the background color of the div.container to the same.

// let container = document.querySelector(".container");

// container.addEventListener("click",(e)=>{



//     Raw Problem
// Write a program in JavaScript to do the below-mentioned task:
// Fix the mathematical problem. '2 + 2 = 22' to '2 + 2 = 4'

// })




// Problem Description Write a function delayedSum that takes two integers, a and b, and a callback function callback. The function should use setTimeout to delay calling the callback for 1000 milliseconds and then pass the sum of a and b as an argument to the callback. You need to implement the delayedSum function, which will introduce a delay of 1000 milliseconds using setTimeout. After the delay, it should call the provided callback function with the sum of a and b.

// function delayedSum(a, b, callback)
// Example


// function delayedSum(a,b,cb){
//     setTimeout(()=>{
//         const sum = a+b;
//         cb(sum);
//     },1000)
// }

// delayedSum(3, 5, (result) => {
//   console.log(result); // Expected output after 1000ms: 8
// });

// Problem 2: Periodic Printer
// Problem Statement:
// Write a function periodicPrinter that takes a string message and an interval timeInterval in milliseconds. The function should use setInterval to print the message every timeInterval milliseconds until explicitly stopped.

// Problem Description:
// You need to implement the periodicPrinter function, which will use setInterval to repeatedly print the provided message at the specified time interval until stopped.

// Solution Approach:

// Use setInterval to repeatedly execute a function.
// The function should print the provided message.

// function periodicPrinter(message,timeInterval){


//     let timerId = setInterval(()=>{
//         console.log(message);
//     },timeInterval)

//     return timerId;

// }

// const timerId  = periodicPrinter("Scaler",1000);


// setTimeout(()=>{
//     clearInterval(timerId);
// },5000)





// Problem Description Write a function promiseSum that takes two integers, a and b, and returns a Promise. The Promise should resolve with the sum of a and b if both are positive; otherwise, it should reject with an error message. You need to implement the promiseSum function, which returns a Promise. The Promise should resolve with the sum of a and b if both are positive, and reject with an error message if any of them is non-positive.

// function promiseSum(a,b){

//     return new Promise((resolve,reject)=>{

//         if(a>0 && b>0){
//             resolve(a+b);
//         }else{
//             reject("Both numbers must be positive");
//         }

//     })

// }

// // Test Cases
// promiseSum(3, 5)
//   .then((result) => console.log(result)) // Expected output: 8
//   .catch((error) => console.error(error));

// promiseSum(-2, 5)
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error)); // Expected output: "Both numbers must be positive"

// Problem Description Write a function convertCurrency that takes an amount, source currency, and target currency, and returns a Promise. The Promise should resolve with the converted amount if the conversion is successful; otherwise, it should reject with an error message.

// You need to implement the convertCurrency function, which returns a Promise. The Promise should resolve with the converted amount if the conversion is successful, and reject with an error message if there is any issue.


// function convertCurrency(amount, sourceCurrency, targetCurrency){

//      const exchangeRates = {
//     USD: { EUR: 0.85, JPY: 110.0 },
//     EUR: { USD: 1.18, JPY: 129.41 },
//     JPY: { USD: 0.0091, EUR: 0.0077 },
//   };

//   return new Promise((resolve,reject)=>{

//     if(exchangeRates[sourceCurrency] && exchangeRates[sourceCurrency][targetCurrency]){
//         const covertedAmount = amount * exchangeRates[sourceCurrency][targetCurrency];
//         resolve(covertedAmount)
//     }else{
//         reject("Error converting currency: Invalid currency")
//     }
//   })

// }



// // Test Cases
// convertCurrency(100, "USD", "EUR")
//   .then((result) => console.log(`Converted amount: ${result} EUR`))
//   .catch((error) => console.error(error));

// convertCurrency(50, "USD", "INR")
//   .then((result) => console.log(`Converted amount: ${result} JPY`))
//   .catch((error) => console.error(error)); // Expected output: "Error converting currency: Invalid currency"



// Problem Description Write a function timeoutPromise that takes a delay time in milliseconds and returns a Promise. The Promise should resolve after the specified delay. You need to implement the timeoutPromise function, which returns a Promise. The Promise should resolve after the specified delay time.


// function timeoutPromise(delay){

//     return new Promise((resolve, reject)=>{

//         setTimeout(()=>{
//             resolve(`Promise resolved after ${delay} milliseconds`);

//         },delay)
//     })

// }


// // Test Cases
// timeoutPromise(2000)
//   .then((result) => console.log(result)) // Expected output after 2000ms: "Promise resolved after 2000 milliseconds"
//   .catch((error) => console.error(error));









// Create a JavaScript function that uses closures to implement caching (memoization). The function should cache the results of complex calculations and return the cached result when the same inputs occur again.



// function cachingFunction(complexCalculation) {
// // Modify this cache object and store data in the arg
// // also perform the complexCalculation on the arg
//  cache = {};
// // Implement the closure-based caching mechanism here
// return function (arg) {

//     if(cache[arg]){
//         return cache[arg];
//     }

//     const ans = complexCalculation(arg);
//     cache[arg]= ans;
//     return ans;

//    };
// }


