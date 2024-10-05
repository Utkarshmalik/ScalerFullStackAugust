class Pizza {

        static totalPizaasMade = 0; // Static property to keep count

  constructor(toppings, size, crustType) {
     Pizza.totalPizaasMade+=1;
    this.toppings = toppings;
    this.size = size;
    this.crustType = crustType;
  }

  describe() {
    console.log(`A ${this.size} pizza with ${this.toppings.join(", ")} on a ${this.crustType} crust.`);
  }

  static calculateTotalPizzasMade(){
    console.log(`Total pizzas made: ${Pizza.totalPizaasMade}`);
  }
}

console.log(Pizza.totalPizaasMade);

var customerOrder1 = new Pizza(['cheese', 'pepperoni'], 'medium', 'thin');
var customerOrder2 = new Pizza(['veggies', 'pepperoni'], 'small', 'thick');

// customerOrder1.describe(); // Output: A medium pizza with cheese, pepperoni on a thin crust.
// customerOrder2.describe(); // Output should be: A small pizza with veggies, pepperoni on a thick crust.


//StuffedPizza is a Pizza 

Pizza.calculateTotalPizzasMade();


//how many pizzas are madde till now 

class StuffedCrustPizza extends Pizza{


    constructor(toppings, size, crustType, stuffingType){
    super(toppings, size, crustType); // Call the parent class constructor with super
    this.stuffingType = stuffingType;
    }

    describeStuffing(){
            console.log(`This pizza has ${this.stuffingType} stuffing in the crust.`);

    }
    
    describe(){

          // //call the desribe method of a parent class
        super.describe();

        // //call the describeStuffing method of the same class 

         this.describeStuffing();
        
    }

}

var specialOrder = new StuffedCrustPizza(['cheese', 'mushrooms'], 'large', 'thick', 'cheese and garlic');

// console.log(specialOrder.toppings);

// console.log(StuffedCrustPizza.totalPizaasMade);


Pizza.calculateTotalPizzasMade();


// specialOrder.describeStuffing();
// specialOrder.describe();


//static method  and variables 


class Person {

     constructor(name, age) {  // 'this' refers to the current instance
        this.age = age;
    }

    constructor(name){
        this.name=name;
    }

}

const person = new Person();






// class Engine {
//     constructor(horsepower) {
//         this.horsepower = horsepower;
//     }

//     start() {
//         console.log(`Engine with ${this.horsepower} HP started.`);
//     }
// }



// class Car {
//     constructor(model, horsepower) {
//         this.model = model;
//         this.engine = new Engine(horsepower); 
//     }

//     startCar() {
//         console.log(`Starting car: ${this.model}`);
//         this.engine.start(); 
//     }
// }


// const myCar = new Car("Tesla Model 3", 450);

// myCar.startCar();
