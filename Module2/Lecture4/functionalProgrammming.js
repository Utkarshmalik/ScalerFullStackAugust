// Procedural Programming Paradigm(eg:- C, )

// Definition: Procedural programming is a programming paradigm based on the concept of procedure calls, where the program is divided into procedures (also known as functions or subroutines). These procedures contain a series of computational steps to be carried out.



// Object Oriented Paradigms(eg:- Java, C++)

// Definition: Object-oriented programming is a paradigm centered around objects, which are instances of classes. It models real-world entities as objects with attributes (data) and behaviors (methods).




// Functional Programming Paradigm(eg:- javascript)

// Definition: Functional programming is a paradigm where programs are constructed by applying and composing functions.
// It emphasizes the use of pure functions, immutability, and avoiding side effects.






// Callback Functions

// These are the functions that can be passed to another function as an argument.



// function printName(cb){
//     console.log("Narendra");

//     cb();
// }


// function printLastName(){
//     console.log("Modi");
// }

// function printAge(){
//     console.log(30);
// }


// printName(printLastName);
// printName(printAge);





function sum(a,b){

    return a+b;
}


function average(a,b,cb){

    return cb(a,b)/2;


}

average(5,10,sum);












// function printName(cb1, cb2, cb3){
//     console.log("Narendra");

//     cb1();
//     cb2();
//     cb3();
// }

// function printLastName(){
//     console.log('Singh')
// }
// function printAge(){
//     console.log(24)
// }
// function printAddress(){
//     console.log('Delhi')
// }

// printName(printLastName, printAge, printAddress);



//pure functions


var c=0;

function sum(a,b){
    c++;
    return a+b+c;
}


console.log(sum(1,2));   //4
console.log(sum(1,2));    //5


// A pure function is a function without any side effects, it will provide the same output for the same inputs/arguments provided.



function add(a,b,c){
    return a+b+c;
}

add(1,5,56);
add(1,5,56);