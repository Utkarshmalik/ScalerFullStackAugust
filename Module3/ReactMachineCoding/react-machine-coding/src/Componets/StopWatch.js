import { useRef, useState } from "react"


function StopWatch(){

    const [time,setTime] = useState(0);

    var timerRef = useRef(null);


    const startTimer = ()=>{
         timerRef.current = setInterval(()=>{
            setTime((prevTime)=>prevTime+1);
        },1000)

    }
   
    const stopTimer = ()=>{
        clearInterval(timerRef.current);
    }

    const resetTimer = ()=>{
        setTime(0);
        clearInterval(timerRef.current);
    }

    const formatTime = (seconds)=>{

        const getSeconds  = `0${seconds%60}`.slice(-2);

        const minutes = Math.floor(time/60);

        const getMinutes = `0${minutes%60}`.slice(-2);

        const hours = Math.floor(minutes/60);

        const getHours = `0${hours}`.slice(-2);

        return `${getHours}:${getMinutes}:${getSeconds}`

    }

    return <div>

        <h1> {formatTime(time)}  </h1>

        <button onClick={startTimer} > Start </button>
        <button onClick={stopTimer}> Stop </button>
        <button onClick={resetTimer} > Reset </button>


    </div>

}

export default StopWatch;

