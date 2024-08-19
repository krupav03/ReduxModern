import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Slices/counterSlice";
import messageSlice from "./Slices/messageSlice";
import imageSlice from "./Slices/imageSlice";

const store  = configureStore({
    reducer:{
        counter : counterSlice,
        messageDisplay: messageSlice,
        images: imageSlice,
    }
})

export default store;