import { configureStore } from "@reduxjs/toolkit";
import myUserSlice from '../slice/myUserSlice';

export let mystore=configureStore({
    reducer:{
        myUser:myUserSlice
    }
})