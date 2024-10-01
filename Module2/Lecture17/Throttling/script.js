
const btn = document.querySelector("button");


function throatle(fnToMakeANetworkcall,interval=500){

    //maintain whether some interval is running or not 

    let intervalInProgress = false;

    return function(){

        console.log("Button is clicked");

        //check if interval is in progress: do nothing , return;

        if(intervalInProgress){
            return;
        }

        //if not in progress: make an api call and start a new interval for next 500 ms 

        fnToMakeANetworkcall();
        intervalInProgress=true;

        setTimeout(()=>{
            intervalInProgress = false;
        },interval)

    }
}



const throaltedButtonClick = throatle(makeANetworkcall);

btn.addEventListener("click", throaltedButtonClick);





function makeANetworkcall(e){
    console.log("button is pressed,making a network call");

}
