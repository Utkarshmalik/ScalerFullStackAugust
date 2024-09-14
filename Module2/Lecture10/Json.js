// JSON

// JSON, which stands for JavaScript Object Notation, is a lightweight format for storing and transporting data.

// It is easy for humans to read and write, and easy for machines to parse and generate.

// 2. Structure of JSON


// Objects: These are collections of key/value pairs. In JSON, an object begins with { (left brace) and ends with } (right brace). Each key is followed by a colon (:) and then the value assigned to that key. Key-value pairs are separated by commas. For example:

// {
//   "name": "John Doe",
//   "age": 30,
//   "isEmployed": true
// }

// Arrays: These are ordered lists of values. In JSON, an array begins with [ (left bracket) and ends with ] (right bracket). Values are separated by commas. For example:


// ["apple","bananaa","cherry"]

// Values in JSON can be strings (text wrapped in double quotes " "), numbers, objects, arrays, true, false, or null.


var toys = {
  toy1: {name: "Teddy Bear", color: "Brown"},
  toy2: {name: "Race Car", color: "Red"},
  toy3: {name: "Doll", color: "Pink"}
};


// Now Here this is in  Javascript object Format and in this format data cannot be sent over the internet as this is not universally understood by the data transfer protocols



// Pack our toys into a box (convert our toys object into a JSON string)

var toysToJSONString = JSON.stringify(toys);
console.log("Data sent to server ", toysToJSONString);


// Here We have converted the javascript object into JSON string now this is understood by the protocolos

// Now, let's say this JSON string is sent over the internet.

// On the other side, we receive this packed box of toys as a JSON string.

// Now as we are recieving a JSON string , so while writing  javascriptcode we will not be able to apply object properties in a JSON string , so now to convert the string again to object we will parse it



const dataRecieved = JSON.parse(toysToJSONString);

console.log("Data Recieved from client ", dataRecieved);



console.log("Let's play with the:", dataRecieved.toy1.name); // Accessing the Teddy Bear


// 4. Why Use JSON?
// JSON is popular for several reasons:

// It is text, and can be read and written by humans.
// It is easy for machines to parse and generate.
// It is fully compatible with JavaScript and many other languages, making it a good choice for data interchange on the web.


// In summary, JSON is a universally accepted format for structuring data, making it an essential part of modern web development. Its simplicity, ease of use, and compatibility with many programming languages have made it a preferred choice for data interchange on the internet.

