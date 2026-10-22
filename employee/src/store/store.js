import {configureStore} from '@reduxjs/toolkit';
import empSliceReducer from '../slice/empSlice';

export let store=configureStore({
    reducer:{
        emp:empSliceReducer
    }
})