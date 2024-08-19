import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name: 'message',
    initialState:{text: ''},
    reducers:{
        displayText(state){
            state.text  = 'Message Displayed'
        },
        eraseText(state){
            state.text = ''
        }

    }
})

export const {displayText,eraseText} = messageSlice.actions;

export default messageSlice.reducer;