import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        tasks: []
    },
    reducers: {
        add: (state, action) => {
            state.tasks.push(action.payload)
        },
        remove: (state, action) => {
            state.tasks.splice(action.payload, 1)
        },
        edit: (state, action) => {
            state.tasks.splice(action.payload['index'], 1, action.payload['task'])
        }
    }
})

export const { add, remove,edit } = todoSlice.actions;
export default todoSlice.reducer;