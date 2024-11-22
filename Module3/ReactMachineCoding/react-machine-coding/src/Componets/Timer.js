import { useEffect, useState } from "react";





function Timer(){

    const [seconds , setSeconds] = useState(0);

    useEffect(()=>{
         const interval = setInterval(()=>{
            console.log(seconds);
            setSeconds((prevSecond)=>prevSecond+1);
        },1000);

        return ()=>clearInterval(interval);

    },[])


    return <div>

        <p> Seconds : {seconds} </p>

        <button> Stop Timer  </button>

    </div>


}

export default Timer;