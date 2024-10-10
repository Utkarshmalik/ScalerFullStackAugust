

// The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called. 

// Essentially, bind() allows you to permanently associate a specific object with a function, ensuring that the function will always be called with that object as its context (this).



// const newFunction = functionName.bind(thisArg, arg1, arg2, ...);

// functionName: The function to be bound.
// thisArg: The value to be passed as this to the function when the bound function is called.
// arg1, arg2, ...: Arguments to be fixed to the function when the bound function is called.


// const parent = {
//     health:50,
//     addHealth: function (num1,num2){
//         this.health+= num1+num2;
//     }
// }

// const child = {
//     health:70
// }

// const addHealthFn =  parent.addHealth.bind(child,10,20);

// console.log(child.health);


// addHealthFn();

// console.log(child.health);


// const car = {
//     brand: 'Toyota',
//     model: 'Camry',
//     year: 2022,
//     getInfo: function() {
//         return `${this.brand} ${this.model} (${this.year})`;
//     }
// };


// const bike = {
//     brand : "Honda",
//     model:"Activa",
//     year:2024
// }


// const logBikeInfo = car.getInfo.bind(bike);


// console.log(logBikeInfo());









let cap = {
    name: "Steve",
    team: "Cap",
    petersTeam: function (mem1, mem2, ...otherMem) {
        console.log(`Hey ${this.name} I am your neighborhood's  spiderman and i belong to ${this.team}'s team`);
        console.log(`I am working with ${mem1} & ${mem2} with ${otherMem}`);
    }
}

let ironMan = {
    name: "Tony",
    team: "Iron Man"
}



let f1 = cap.petersTeam.bind(ironMan, "Utkarsh","Rahul","Shreya");
f1();

// let f1 = cap.petersTeam.bind(ironMan);
// f1( "Utkarsh","Rahul","Shreya");

// let f1 = cap.petersTeam.bind(ironMan,"Utkarsh");
// f1("Rahul","Shreya");

