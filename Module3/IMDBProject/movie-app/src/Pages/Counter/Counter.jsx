import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../redux/slice/counterSlice";

function Counter(){

    const countValue = useSelector((state)=>state.count.value);
    const dispatch = useDispatch();

    console.log(increment);


    const onIncrement=()=>{
        dispatch(increment());
    }

    const onDecrement = ()=>{
        dispatch(decrement());
    }

    return <div>

        <h1> Counter : {countValue} </h1>

        <button className="m-5" onClick={onIncrement} > Increment </button>

        <button onClick={onDecrement} > Decrement  </button>

        </div>

}

export default Counter;