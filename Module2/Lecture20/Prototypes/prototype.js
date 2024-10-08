


// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// Person.prototype.getFullName =  function () {
//         return this.firstName + " " + this.lastName;
// };


//  let person1 = new Person('Jane','Doe')
// let person2 = new Person('James','Smith')
// let person3 = new Person('Utkarsh','Malik')

// console.log(person1);

// console.log(person1.getFullName());
// console.log(person2.getFullName());
// console.log(person3.getFullName());

//__proto__  takes me one level up in the prototype chain 

// console.log(person1.__proto__); 

// console.log(person1.__proto__ === Person.prototype);

// console.log(person2.__proto__ === Person.prototype);

// console.log(person3.__proto__ === Person.prototype);


// console.log(person1.__proto__ === person2.__proto__);

// console.log([person2.__proto__ === person3.__proto__]);

// console.log(person1.__proto__ === person3.__proto__);





// const person = {

//     name : "John"
// }

// const vehicle = {

//     brand :"Mercedes"
// }


// console.log(person.name);
// console.log(vehicle.brand);

// console.log(person.toString());
// console.log(vehicle.toString());






// const arr1 = [1,2,3,4,5];
const arr1 = new Array(1,2,3,4,5);

// const arr2 = [6,7,8,4,6];
const arr2 = new Array(6,7,8,4,6);


console.log(arr1.toString());
console.log(arr2.toString());


console.log(Array.prototype);


console.log(arr1.__proto__ === Array.prototype);

console.log(arr1.__proto__ === arr2.__proto__);


