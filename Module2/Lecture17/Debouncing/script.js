
const input = document.querySelector("#input");

function debounce(fnToMakeANetworkCall,delay=1000){

    let timerId = null;

    return function(e){
        console.log("A person has typed ", e.target.value);

        //check if some existing timer is running or not 
        //if it is already running -> clear the previous timer and start a new timer 
        // if no timer is runnning -> start a new timer 
        //after a timer has finished : make a network call 

        if(timerId!=null){
            console.log("clearing the previous ongoing timer");
            clearTimeout(timerId);
        }

        timerId = setTimeout(()=>{
        fnToMakeANetworkCall(e);
            timerId = null;
        },delay);

    }

}


const debouncedInputChange = debounce(makeANetworkcall);



input.addEventListener("input",debouncedInputChange);

function makeANetworkcall(e){
    console.log("making a network with input ", e.target.value);

}





//how using the concept of timerId , we have maintained  a timer in our system 

let timerId = setTimeout(()=>{
    console.log("Hello");
},3000)

setTimeout(()=>{
    clearTimeout(timerId);
    timerId=null;
},1000)

setTimeout(()=>{
    console.log(timerId);
},2000)

console.log(timerId);


//timerId is NULL : timer is not null 
//timerId is not NULL : timer is running
