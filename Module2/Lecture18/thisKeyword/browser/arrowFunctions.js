

// function add(a,b){

//     console.log(this);
// }


// add(5,10);


// const add = (a,b)=>{

//     console.log(this);
// }

// add(5,10);



// var person = {
//     name:"Utkarsh",
//     age:31,
//     sayFullName:function(){
//         console.log(this);
//     }

// }

// person.sayFullName();




//arrow functions are lexically scoped 


// var person = {
//     name:"Utkarsh",
//     age:31,
//     sayFullName:()=>{
//         console.log(this);
//     }

// }

// person.sayFullName();





// var person = {

//     name:"Utkarsh",
//     age:31,
//     sayHi:function(){
//         console.log(this);

//         var child = ()=> {
//         console.log(this);
//         }

//         child();
//     }
// }

// person.sayHi();



// //question 3

// let cap = {
//     firstName : "Steve",
//     sayHi : function(){
//         console.log("77", this.firstName);
//         var iAmInner = function(){
//             console.log("79",this.firstName);
//         }
//         iAmInner();
//     }
// }
// cap.sayHi();


//question 4

// let cap = {
//     firstName : "Steve",
//     sayHi : ()=>{
//         console.log("77", this.firstName);
//         var iAmInner = function(){
//             console.log("79",this.firstName);
//         }
//         iAmInner();
//     }
// }
// cap.sayHi();



//question 5


// let cap = {
//     firstName : "Steve",
//     sayHi : ()=>{
//         console.log("77", this.firstName);
//         var iAmInner = ()=>{
//             console.log("79",this.firstName);
//         }
//         iAmInner();
//     }
// }
// cap.sayHi();





// var b = {
//   name: 'jay',
//   say:function() { 
    
//     console.log(this) 
// }
// }

// b.say();




// var c = {
//   name: 'jay',
//    say:function() { 
//     return function (){
//          console.log(this) 
//     }
//     }
// }


// c.say()()



var d = {
  name: 'jay',
  say() { 
    
    return () => console.log(this) 
}
}


d.say()()  