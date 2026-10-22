import {configureStore} from '@reduxjs/toolkit'
import empSlice from '../slice/EmpSlice'
export const store=configureStore({
    reducer:{
        emp:empSlice
    }
})