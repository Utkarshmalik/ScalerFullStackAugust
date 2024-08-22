

// Primitive Datatypes  
// Referenced Data Types


//Numbers 

// let a = 20;
// let b= 100000;
// let c = 12.55;
// let d= -10.4454;
// let e = 2/0 
// let s = 'hello'/0;

// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);
// console.log(typeof e);
// console.log(typeof s);




//Strings

// let str = 'Javascript frw';
// let str2 = "Hello fwf";
// let str3 = `Hey How are you
// I am good
// You are good too
// `

// let myAge = 30;
// let myName = "Utkarsh";
// let sayHi = `Hey my name is ${myName} and my age is ${myAge}`;

// console.log(typeof str);
// console.log(typeof str2);
// console.log(typeof str3);
// console.log(typeof sayHi);


//Boolean 

// let isMarried = false;
// let isHungry = true;
// let x = 5 > 3;

// console.log(typeof isMarried);
// console.log(typeof isHungry);
// console.log(typeof x);



//undefined  : absense of defination 

// var x;
// console.log(typeof x);


//null


// let x = null;  // it is defined , but it is purposefull given a empty value 
// console.log(typeof x);








// C/C++/java : maps / hashmmaps 
// python : dictionary 
// JS : objects 



// Objects are basically in which data is stored in the form of key-value pairs.


// let person = {
//     name:"Utkarsh",
//     age:30,
//     isMarried:true,
//     hasKids:false,
//     'is good' : true,
//     address:{
//         houseNumber : 190,
//         city: "Dublin"
//     }
// }


// console.log(person);
// console.log(person.name);
// console.log(person.address.city);
// console.log(person.age);
// console.log(person.isMarried);
// console.log(person.hasKids);
// console.log(person.isBeautiful);
// console.log(person['is good']);
// console.log(person['name']);
// console.log(person['age']);












// let y=5;
// let x=y;

// x=x+1;

// console.log(x);
// console.log(y);


// let person1 =  {
//     name:"Utkarsh",
//     age:31
// }

// let person2 = person1;

// person1.age =  person1.age+1;

// console.log(person1.age);
// console.log(person2.age);

// console.log(typeof person1);
// console.log(typeof person2);




// Arrays
// The array is a data structure to store multiple values of multiple data types. The elements are stored in an indexed manner.



// let fruits = ["avacado","pineapple","watermelon"];

// // let fruits = {
// //     0:"avacado",
// //     1:"pineapple",
// //     2:"watermelon"
// // }

// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);



// let arr = [1, "Sclaer", true, undefined, null, [1,2,3],{name:"Utkarsh"}];

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);
// console.log(arr[6]);

// console.log(typeof arr);



let arr1 = [1,2,3];

let arr2=arr1;

arr2[0] = 10;

console.log(arr1[0]);
console.log(arr2[0]);


console.log(arr1.length);
console.log(arr2.length);

arr2.push(100);

console.log(arr2);

arr2.pop();

console.log(arr2);

arr2.unshift(500);

console.log(arr2);

arr2.shift();

console.log(arr2);