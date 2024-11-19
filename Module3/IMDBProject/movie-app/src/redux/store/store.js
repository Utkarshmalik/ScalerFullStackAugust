
import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "../slice/counterSlice";
import todoReducer from "../slice/todoSlice";
import moviesReducer from "../slice/moviesSlice";


export const store = configureStore({
    reducer:{
        count:counterReducer,
        todoState:todoReducer,
        moviesState:moviesReducer

    }
})

