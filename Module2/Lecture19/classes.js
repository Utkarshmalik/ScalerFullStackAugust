
//class in js are syntax sugars : Es6 


class Pizza{

    constructor(toppings, size, crustType){
     this.toppings=toppings;
      this.size=size;
     this.crustType=crustType;
    }

    describe(){
        console.log(`A ${this.size} pizza with ${this.toppings.join(", ")} on a ${this.crustType} crust`);
    }

}


var customerOrder1 = new Pizza(['cheese', 'pepperoni'], 'medium', 'thin');

var customerOrder2 = new Pizza(['veggies', 'pepperoni'], 'small', 'thick');

customerOrder1.describe();

customerOrder2.describe();



























// class Person{

//     constructor(name, age){
//         this.name=name;
//         this.age=age;
//     }

//     sayHi(){
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





























// class MyClass{


//     constructor(){
//             // Initialization of properties
//     }

//     myMethod(){
//        // Method implementation


//     }

// }
// class keyword is used to declare a class.
// MyClass is the name of the class.
// The constructor is a special method for creating and initializing objects created with the class. There can only be one constructor method in a class.
