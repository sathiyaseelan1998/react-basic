import { createSlice } from "@reduxjs/toolkit";

let webData=JSON.parse(localStorage.getItem("myuser"))

let myUserSlice=createSlice({
    name:"myuserdemo",
    initialState:webData,
    reducers:{
         addNewUser(state,action){
            state.push(action.payload);
            localStorage.setItem("myuser",JSON.stringify([...state]));
        },
        removeNewUser(state,action){
            let del=state.filter(user=>user.id!==action.payload);
            localStorage.setItem("myuser",JSON.stringify([...del]))
            return del;
        }
    }
})
export default myUserSlice.reducer;
export let{addNewUser,removeNewUser}=myUserSlice.actions