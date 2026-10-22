import {configureStore} from '@reduxjs/toolkit';
import userSliceReducer from '../slice/userSlice.js';
import fruitSliceReducer from '../slice/fruit.js';


export const store=configureStore({
    reducer:{
        user:userSliceReducer,
        fruitInfo:fruitSliceReducer
    }
})