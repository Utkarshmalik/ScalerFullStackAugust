
//Every Pizza : toppings, size, crust types

function Pizza(toppings, size, crustType){

    this.toppings=toppings;
    this.size=size;
    this.crustType=crustType;

    this.describe = function(){
        console.log(`A ${this.size} pizza with ${this.toppings.join(", ")} on a ${this.crustType} crust`);
    }
}


var customerOrder1 = new Pizza(['cheese', 'pepperoni'], 'medium', 'thin');

var customerOrder2 = new Pizza(['veggies', 'pepperoni'], 'small', 'thick');

customerOrder1.describe();
customerOrder2.describe();


// procedural : C
// C++ , java : OOPS 
// JS         : functional 






//when you call a function with a new keyword that becomes a constructor function 

// how do you identify a constrcutor function ?  : whenver we call a fn with a new keyword 




//regular function : this keyword 
//constcutor function : return a new instance of that particualar bluprint : object 


// function Person(name, age){
//     this.name = name;    
//     this.age = age;
//     this.sayHi = function (){
//         console.log(`${this.name} is saying Hii`);
//     }     
// }


// const person1 = new Person("Utkarsh",31);
// console.log(person1);
// person1.sayHi();

// const person2 = new Person("Sachit",38);
// console.log(person2);
// person2.sayHi();

// const person3 = new Person("Srijan",25);
// console.log(person3);
// person3.sayHi();













// 


// const person1 = {

//     name:"Utkarsh",
//     age:31
// }

// const person2 = {
//     name:"Sanchit",
//     age:38
// }
