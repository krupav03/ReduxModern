import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name : 'Counter',
    initialState : {count : 0},
    reducers : {
        increment(state){
            state.count += 1
        },
        decrement(state){
            state.count -= 1
        },
        reset(state){
            state.count = 0
        },
        multiplyIntoTwo(state) {
            state.count *= 2
        }
    }
});

export const {increment,decrement,reset,multiplyIntoTwo} = counterSlice.actions;
export default counterSlice.reducer;