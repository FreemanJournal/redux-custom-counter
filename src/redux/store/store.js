import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../state/counter/counter.slice";

export default configureStore({
    reducer:{
       counter:counterReducer 
    }
})