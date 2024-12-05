import {useState} from "react";
import React from "react";


//Define a class 
class Counter extends React.Component{

    constructor(props){
        console.log("Within the constructor");
        console.log("Initilaising the state");
        super(props);
        this.state = {
            count:0
        }
    }
    
    componentDidMount(){
        console.log("I am lifecycle method that will be called after first initial render");
    }

    componentDidUpdate(){
      console.log("I am lifecycle method that will be called after every re-render");
    }

    componentWillUnmount(){
      console.log("I am lifecycle method that will be called just before a component is about to be unmounted");
      
    }

    onIncrement = ()=>{
        this.setState({
            count:this.state.count+1
        })
    }

    onDecrement  =()=>{
        this.setState({
            count:this.state.count-1
        })
    }

    //for any UI to have to return : create a render method

    render(){
        console.log("Inside the render method");
        return <div>

            <h1> I am a Counter Component        </h1>

            <h2> Count : {this.state.count} </h2>

            <button onClick={this.onIncrement}> Increment </button>

            <button onClick={this.onDecrement} > Decrement </button>

        </div>
    }




}



// function Counter(){
     
//     const [count,setCount] = useState(0);


//     function onIncrement(){
//         console.log("increment clicked, updating the state");
//         setCount(count+1);
//     }

//     function onDecrement(){
//         console.log("decrement clicked, updating the state");
//         setCount(count-1);
//     }

//     return     <div style={{height:"300px"}}>

//     <h1> Counter App </h1>


//      <p> Count :  {count} </p>

//      <button onClick={onIncrement}> Increment </button>

//      <button onClick={onDecrement} > Decrement </button>

//     </div>    

// }

export default Counter;