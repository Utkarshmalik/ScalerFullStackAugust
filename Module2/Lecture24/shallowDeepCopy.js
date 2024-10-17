

// let a = 5;

// let b = a;

// b++;

// console.log(a);
// console.log(b);



// let husband = {

//     firstName:"John",
//     lastName:"Doe",
//     address:{
//         street:"North 1st street",
//         city :"Sn Jose",
//         state:"CA",
//         country:"USA"
//     },
//     friends:["Steve","Nikola","Ray"]
// }

// let wife = {
//     firstName:"Ray",
//     lastName:"Waston"
// }

// wife.address = husband.address;


// //after 5 years : they seperated 

// wife.address.street = "North 2nd Street";
// wife.address.state = "CA";
// wife.address.country = "USA";



// console.log(wife.address.street);
// console.log(husband.address.street);


// console.log(wife.address === husband.address);







// Using a spread operator 


// let husband = {

//     firstName:"John",
//     lastName:"Doe",
//     address:{
//         street:"North 1st street",
//         city :"Sn Jose",
//         state:"CA",
//         country:"USA"
//     },
//     friends:["Steve","Nikola","Ray"]
// }

// let wife = {...husband};


// wife.address.street = "North 2nd Street";
// wife.address.state = "CA";
// wife.address.country = "USA";



// console.log(wife.address.street);
// console.log(husband.address.street);


// console.log(wife.address === husband.address);


// console.log(wife);

// console.log(husband===wife);

// console.log(husband.address  === wife.address);

// console.log(husband.friends  === wife.friends);


// a shallow copy refers to copying an object's top-level properties, but not its nested objects.

// This means that for objects or arrays, only the references to the deeper structures are copied, not the structures themselves.


let husband = {

    firstName:"John",
    lastName:"Doe",
    address:{
        street:"North 1st street",
        city :"Sn Jose",
        state:"CA",
        country:"USA"
    },
    friends:["Steve","Nikola","Ray"]
}


 const husbandStr = JSON.stringify(husband);
 const wife = JSON.parse(husbandStr);

 console.log(wife);


wife.address.street = "North 2nd Street";
wife.address.state = "CA";
wife.address.country = "USA";


console.log(husband.address === wife.address);



console.log(wife.address.street);
console.log(husband.address.street);




// A deep copy in JavaScript creates a completely independent copy of an object, including all nested objects or arrays. Unlike a shallow copy, which only copies references to nested objects, a deep copy duplicates everything, so changes to the copied object do not affect the original object at any level.

