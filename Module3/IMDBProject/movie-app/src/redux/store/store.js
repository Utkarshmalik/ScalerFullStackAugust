
import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "../slice/counterSlice";
import todoReducer from "../slice/todoSlice";


export const store = configureStore({
    reducer:{
        count:counterReducer,
        todoState:todoReducer

    }
})

