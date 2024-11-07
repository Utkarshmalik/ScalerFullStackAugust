import { useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';

function SpinnerComp() {

    console.log("Rendering Spinner Compnent");

    useEffect(()=>{
        console.log("Inside useEffect, rendered");

        return ()=>{
            console.log("I will be called just before unmounting");
        }
    })


  return <Spinner animation="grow" />;
}

export default SpinnerComp;