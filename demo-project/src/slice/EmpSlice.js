import { createSlice } from "@reduxjs/toolkit";

let webData=JSON.parse(localStorage.getItem("emp"))

const emp=createSlice({
    name:"employee",
    initialState:webData,
    reducers:{
        addEmployee(state,action){
            state.push(action.payload);
           localStorage.setItem("emp",JSON.stringify([...state]))
        },
        removeEmployee(state,action){

          let del=state.filter(val=>val.id!==action.payload)
          localStorage.setItem("emp",JSON.stringify([...del]))
            return del;
        }
    }
})

export default emp.reducer;
export let {addEmployee,removeEmployee}=emp.actions;