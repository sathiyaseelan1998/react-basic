import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'

const EmpUpdate = () => {
   let{id}= useParams();
   let[emp,setEmp]=useState(null)
    useEffect(()=>{
        fetch(`http://localhost:8080/employee/${id}`,{method:"GET"})
        .then(val=>{
            return val.json();
        })
        .then(val=>{
            setEmp(val);
        })
    },[])
   let handleChange=(e)=>{
    let{name,value}=e.target;
    setEmp({
        ...emp,
        [name]:value
    })
   }
   function updateEmp(e) {
        e.preventDefault();
        fetch('http://localhost:8080/employee',{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(emp)
        })
        .then(val=>{
            return val.json()
        })
        .then(val=>{
            setEmp(val)
        })
   }
   console.log(emp);
   
   if(emp!==null){

       return (
         <div>EmpUpdate-{id}
          <form onSubmit={updateEmp}>

            <input type='hidden'
            name='id'
            value={emp.id}/>   
            <input type='text'
            name='name'
            value={emp.name}
            onChange={handleChange}
            />
            <input type='text'
            name='email'
            value={emp.email}
            onChange={handleChange}/>
            <input type='text'
            name='password'
            value={emp.password}
            onChange={handleChange}/>
            <button type="submit">Update</button>
        </form>
         
         </div>
       )
   }
   else{
    <p>Loading</p>
   }
}

export default EmpUpdate