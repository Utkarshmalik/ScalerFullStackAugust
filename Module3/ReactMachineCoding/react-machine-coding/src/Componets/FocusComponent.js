import {useRef, useState} from "react";



function FocusComponent(){

    //Create a ref 
    const inputRef = useRef(null);

    const onButtonClick = ()=>{
        //refName.current 
        console.log(inputRef.current);

        inputRef.current.focus();
    }


    return <div>

        <input ref={inputRef}   type="text"/>

        <button onClick={onButtonClick} > Focus Input </button>

    </div>

}

export default FocusComponent;