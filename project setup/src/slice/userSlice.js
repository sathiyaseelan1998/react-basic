import {createSlice} from '@reduxjs/toolkit';

let webData=JSON.parse(localStorage.getItem("user"))

const userSlice=createSlice({
    name:"users",
    initialState:webData,
    reducers:{
        addUser(state,action){
            state.push(action.payload);
            localStorage.setItem("user",JSON.stringify([...state]))
            
        },
        removeUser(state,action){
            let del=state.filter(val=> val.id!==action.payload)
            localStorage.setItem("user",JSON.stringify([...del]))
            return del;
        }
    }
})
export default userSlice.reducer;
export let{addUser,removeUser}=userSlice.actions;