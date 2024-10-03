"use strict";

// Global Context: a. Describe that in the global context (outside of any function), this refers to the global object (e.g., window in browsers, global in Node.js).



// Scenario 1 : console.log(this)
// console.log(this);


// var a= 5;

// function add(a,b){

//     console.log(a+b);
// }

// console.log(a);
// console.log(window.a);

// add(5,10);
// window.add(10,15);


// console.log(this.a);
// console.log(this.add(5,10));


// console.log(this===window);



// function exampleFunction(){

//     console.log(this);
// }

// exampleFunction();


//the value of this keyword inside a function or a method points to a object who is used to invoke that particuar function 



// Scenario 3: this inside an object method


// var person = {

//     name:"Utkarsh",
//     age:31,
//     sayFullName:function(){
//         console.log(`My name is ${this.name} and my age is ${this.age}`);
//     }

// }


// person.sayFullName();



// Scenario 4: this inside nested functions



var person = {

    name:"Utkarsh",
    age:31,
    innerFunction:function(){
        console.log(this);

        var nestedFunction = function(){
            console.log(this);
        }

        nestedFunction();
    }
}


person.innerFunction();




// var person = {

//     name:"Utkarsh",
//     age:31,
//     innerFunction:function(){

//         var nestedFunction = function(){
//             console.log(this);
//         }
       
//         return nestedFunction;
//     }
// }


// person.innerFunction()();















// "use strict";


// // No Implicit Globals: In non-strict mode, if you assign a value to a variable that hasn't been declared, JavaScript will implicitly create a global variable. In strict mode, this would throw an error.


// // x=10;

// // console.log(x);



// // Preventing Duplicate Parameter Names: In non-strict mode, a function can have multiple parameters with the same name, which can cause confusion. Strict mode disallows this.

// function myFunction(a, a) { 
//   console.log(a);
// }

// myFunction(5,10);


// Strict mode enforces stricter parsing and error handling to help developers avoid common mistakes and write more secure, maintainable code.

// Non-strict mode allows older, more permissive JavaScript behavior, but it is more error-prone and less safe for modern development practices.








