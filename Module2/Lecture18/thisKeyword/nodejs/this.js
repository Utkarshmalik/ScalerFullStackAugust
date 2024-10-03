"use strict"

// In global context, this refers to the empty object.
// console.log(this);


// function sayHi(){
//     console.log(this);
// }

// sayHi();

// setTimeout(()=>{
//     console.log("hello");
// },1000)

// console.log(global);

// window -> browser 
// global -> nodejs


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

        var nestedFunction = function(){
            console.log(this);
        }

        nestedFunction();
    }
}


person.innerFunction();