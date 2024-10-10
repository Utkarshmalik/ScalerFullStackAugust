//  In JavaScript, call, apply, and bind are methods used to manipulate the this keyword and execute functions in specific contexts. 


// functionName.call(thisArg, arg1, arg2, ...);
// functionName: The function to be called.
// thisArg: The value to be passed as this to the function.
// arg1, arg2, ...: Arguments to be passed to the function.



// const parent = {
//     health:50,
//      addHealth: function (num1,num2){
//         console.log(this);
//         this.health+= num1+num2;
//     }
// }

// const child = {
//     health:70
// }
// console.log(child.health);


// parent.addHealth.call(child,50,60);

// console.log(child.health);


//Method Borrowing




// console.log(parent.health);

// parent.addHealth(10,20);

// console.log(parent.health);


// const person = {

//     firstName:"Utkarsh",
//     lastName:"Malik",
//     fullName:function(){
//         return this.firstName + " " + this.lastName;
//     }
// }


// const person1 = {
//     firstName: "John",
//     lastName: "Doe"
// };

// const person2 = {
//     firstName: "Mary",
//     lastName: "Smith"
// };

// const ans1=person.fullName.call(person1);
// console.log(ans1);




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

// cap.petersTeam("Kavitha","Srijan","Gajanan");

cap.petersTeam.call(ironMan,"Kavitha","Srijan","Gajanan");
