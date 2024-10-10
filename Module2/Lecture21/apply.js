// The apply() method is similar to call(), but it accepts arguments as an array.


// functionName.apply(thisArg, [argsArray]);

// functionName: The function to be called.
// thisArg: The value to be passed as this to the function.
// argsArray: An array-like object containing arguments to be passed to the function.




// const parent = {
//     health:50,
//     addHealth: function (num1,num2){
//         this.health+= num1+num2;
//     }
// }

// const child = {
//     health:70
// }
// // parent.addHealth.call(child,50,60);
// parent.addHealth.apply(child,[50,60]);

// console.log(child.health);



// let cap = {
//     name: "Steve",
//     team: "Cap",
//     petersTeam: function (mem1, mem2, ...otherMem) {
//         console.log(`Hey ${this.name} I am your neighborhood's  spiderman and i belong to ${this.team}'s team`);
//         console.log(`I am working with ${mem1} & ${mem2} with ${otherMem}`);
//     }
// }

// let ironMan = {
//     name: "Tony",
//     team: "Iron Man"
// }

// // cap.petersTeam("Kavitha","Srijan","Gajanan");

// // cap.petersTeam.call(ironMan,"Kavitha","Srijan","Gajanan");
// cap.petersTeam.apply(ironMan,["Kavitha","Srijan","Gajanan"]);


// Scenario: Calculating Maximum of Array Elements

const numbers = [5, 6, 2, 3, 7];

// const ans = Math.max(5,7,4,10,45,4);

const ans = Math.max.apply(null, numbers);


console.log(ans);
//Math.max
