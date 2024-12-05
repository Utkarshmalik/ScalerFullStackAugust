import Button from "react-bootstrap/esm/Button";
import { useMemo, useState } from "react";


const generateLargeArray =  ()=>{

    console.log("Generating Large Array");

    const largeArray=[];


    for(let i=0;i<1000000;i++){
        largeArray.push(i);
    }

    return largeArray;
}

const sumArr = (arr)=>{
      console.log('Calculating sum...');
    return arr.reduce((acc,curr)=>acc+curr,0);
}

function Counter(){

        //check if a user is looged in via local storage 
    // if logged in show the Counter page 
    // else show the message components saying : yopu are unauthenticated


    console.log("Counter compoent is called");


    const [count,setCount] = useState(0);

    // const largeArray = generateLargeArray();
    const largeArray = useMemo(()=>generateLargeArray(),[]);
    
    // const sum = sumArr(largeArray);
    const sum = useMemo(()=>sumArr(largeArray),[largeArray]);


    function onIncrement(){
        console.log("increment clicked, updating the state");
        setCount(count+1);
    }

    function onDecrement(){
        console.log("decrement clicked, updating the state");
        setCount(count-1);
    }

    console.log("Rendering UI with count value ",count);

    return     <div style={{height:"300px"}}>

    <h1> Counter App </h1>

    <h2> Sum : {sum} </h2>

     <p> Count :  {count} </p>

     <Button onClick={onIncrement}> Increment </Button>

     <Button onClick={onDecrement} > Decrement </Button>

    </div>

    

}

export default Counter;


// In React, a "state" is a built-in object that represents the current condition of a component. It's essentially a JavaScript object that holds data relevant to a component and can influence what is rendered on the user interface. State allows components to manage dynamic data and update the UI accordingly based on user interactions, network responses, or any other event.



//Statefull compoent , Stateless Compoent



// Before React version 16.8, developers could handle state and other React features only using class components. But with version 16.8, React introduced a new pattern called Hooks.

// With React Hooks, we can use state, and other React features, in a functional component. It empowers devs to do functional programming in React.

