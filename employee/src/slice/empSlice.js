import {createSlice} from '@reduxjs/toolkit';
let webData=JSON.parse(localStorage.getItem("emp"));
let empSlice=createSlice({
    name:"employee",
    initialState:webData,
    reducers:{
        addEmp(state,action){
            console.log(action.payload);
            
            state.push(action.payload);
            localStorage.setItem("emp",JSON.stringify([...state]))
            alert("Addes Item...")
        },
         removeEmp(state,action){
           let del= state.filter((emp)=>emp.id!==action.payload);
           localStorage.setItem("emp",JSON.stringify([...del]))
           alert("Removed Item...")
           return del;

        }
    }    
})
export default empSlice.reducer;
export let{addEmp,removeEmp}=empSlice.actions;