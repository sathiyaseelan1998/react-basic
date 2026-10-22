import React, { useEffect, useState } from 'react'
import { use } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addEmployee } from '../slice/EmpSlice';

const Read = () => {
   let navi=useNavigate();
   let dispatch=useDispatch();
   let list=useSelector(state=>state.emp);
    let[emp,setEmp]=useState([]);
    let[error,setError]=useState("");
    let[load,setLoad]=useState(true);
    useEffect(()=>{
        fetch("http://localhost:4000/employee",{method:"GET"})
        .then((res)=>{
          if(!res.ok){
            throw new Error("Not Fount"); 
          }
           return res.json(); 
        }).then((res)=>
            setEmp(res)
        ).catch((error)=>setEmp(error.message))
        .finally(()=> setLoad(false))
    },[])
let deleteEmp=(id)=>{
  fetch(`http://localhost:4000/employee/${id}`,
    {
      method:"DELETE",
      headers:{
        "Content-Type":"application/json"
      }
    }
  ).then(res=>{

    if (res.ok) {
      alert("Data Deleted")
       let del=emp.filter(emp=>emp.id!==id);
       setEmp(del);
    } else {
      alert("Data Not Deleted")
    }
  }
  )
 
}

let addEmp=(e)=>{
    let check=list.some(val=>val.id==e.id);
    if(check){
        alert("Already Exists");
    }
    else{
      dispatch(addEmployee(e));
    }
}
   
    if (load) {
      return (<div>Loading...</div>)
    }
    
  return (
    <div>
      <button onClick={()=>navi("/view")}>View-{list.length}</button>

        {
          emp.map(emp=>(
            <div key={emp.id}>
              <h4>{emp.name}</h4>
              <p>{emp.contect.mobile}</p>
              <p>{emp.contect.city}</p>
              <button onClick={()=>navi(`/updateEmp/${emp.id}`)}>Update</button>
              <button onClick={()=>{deleteEmp(emp.id)}}>Delete</button>
              <button onClick={()=>{addEmp(emp)}}>Add</button>
              <hr />
            </div>
          ))
        }
    </div>
  )
}

export default Read