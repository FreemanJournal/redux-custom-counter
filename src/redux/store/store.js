import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../state/counter/counter.slice";
import todoReducer from '../state/todo/todo.slice'

export default configureStore({
    reducer:{
       counter:counterReducer,
       todo:todoReducer
    }
})