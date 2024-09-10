// Question
// On clicking the button append hello to the page.


// let btn = document.getElementById("btn-2");

// console.log(btn);

console.log(document);


//Select a element from a DOM 
const btn = document.querySelector("#btn-1")
console.log(btn);


//Attach an event listener to that element 
btn.addEventListener('click',function(e){
    console.log(e);
    console.log("Button is clikced");

    //create a new element 
    let divElememnt = document.createElement('div');
    let para = document.createElement("p");
    para.innerText = "Hello";
    divElememnt.appendChild(para);

    
    //append it on the DOM
    const body = document.querySelector("body");
    
    
    body.appendChild(divElememnt);

})
























// const btn2 = document.querySelector(".btn-2");
// console.log(btn2);


// const allBtns = document.querySelectorAll(".btn-2");
// console.log(allBtns);


// const btn3 = document.querySelector("button");
// console.log(btn3);

// const allButtons = document.querySelectorAll("button");
// console.group(allButtons);
