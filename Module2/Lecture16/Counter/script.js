


const counterDiv = document.querySelector(".counter");
const countDisplay = document.getElementById("count");
let count = 0;



counterDiv.addEventListener("click",(e)=>{

    if(e.target.classList.contains("btn")){

        const id = e.target.getAttribute("id");

        if(!id){
            return;
        }

        if(id==="decrement"){
            handleDecrement(e);
            return;
        }

        if(id==="increment"){
            handleIncrement(e);
            return;
        }

        handleReset(e);

    }
})

function handleDecrement(e){

    console.log("decrement clicked");

    if(count>0){
     count--;
    }
    countDisplay.innerText = count;

}


function handleIncrement(e){

    console.log("increment clicked");
    count++;

    countDisplay.innerText = count;
}


function handleReset(e){

    console.log("reset clicked");

    count=0;

   countDisplay.innerText = count;

}

