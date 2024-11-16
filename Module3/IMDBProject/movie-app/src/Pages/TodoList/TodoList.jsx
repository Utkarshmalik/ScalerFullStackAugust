import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../redux/slice/todoSlice";

function TodoList(){

    const [value,setValue]=useState("");
    
    const todoListTasks = useSelector((state)=>state.todoState.todoList);
    const dispatch = useDispatch();

    console.log(todoListTasks);

    const onFormSubmit=(e)=>{
        e.preventDefault();

        dispatch(addTask(value));
        setValue("");
        
    }

    return <div>
        <form onSubmit={onFormSubmit} >
            <input onChange={(e)=>{
                setValue(e.target.value);
            }} value={value} type="text" placeholder="Enter Task" />

            <input type="submit"/>
        </form>

        <div>
            {
                todoListTasks.map((todo)=>{
                    return <h4> {todo} </h4>
                })
            }
        </div>

    </div>

}

export default TodoList;