import { createSlice } from "@reduxjs/toolkit";

const imageSlice = createSlice({
    name:'Images',
    initialState:{image:''},
    reducers:{
        displayImage(state,action){
            state.image = action.payload
        }
    }
})

export const {displayImage} = imageSlice.actions;

export default imageSlice.reducer;