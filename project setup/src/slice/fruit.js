import {createSlice} from '@reduxjs/toolkit'

let initialState={
    fruit:[],
}

const fruitSlice=createSlice({
    name:"fruits",
    initialState,
    reducers:{
        addFruit:(state,action)=>{
            console.log(action);
            
            
        }
    }

})
export default fruitSlice.reducer;
export let{addFruit}=fruitSlice.actions;