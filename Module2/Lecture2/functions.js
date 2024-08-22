

// function ServeBeverage(drink , quantity){

//     // console.log(`I want ${quantity} ${drink}`);

//     return `I want ${quantity} ${drink}`;

// }

// let result = ServeBeverage("coffee",4);

// console.log(typeof ServeBeverage());

// console.log(result);


//Functions are first class citizens in javascript 


// function sayHi(){
// }
// calling function
// sayHi();


//function expressions
let sayHi = function (){
        console.log('mrinal says hi')
}

console.log(sayHi());

sayHi();


// let y=5;
// let x = y;

// console.log(x);

// let f = sayHi;

// console.log(sayHi);
// console.log(f);
// f();


//Passuing functinos as arguements 

function sum(a,b){
    return a+b;
}

// const result = sum(5,10);
// console.log(result);


function average(f,a,b){

    return f(a,b)/2;

}


const result = average(sum,10,20);


console.log(result);






function grandparent(){

    let x=5;

    function parent(){
        let y=5;
        return x+y;
    }

    return parent;
}


// const r1 = grandparent();

// let r2 = r1();

// console.log(r2);


// const result = grandparent()();
// console.log(result);