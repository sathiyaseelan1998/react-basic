import axios from 'axios';
import React, { useState } from 'react'

const EmployeeCreate = () => {
    let[employee,setEmployee]=useState({
        name:"",
        email:"",
        password:""
    })
    let handleChange=(e)=>{
        let{name,value}=e.target;
        console.log(name,value);
        
        setEmployee({
            ...employee,
            [name]:value
        })
    }
    let create=async(e)=>{
        e.preventDefault();
        let response=await axios.post("http://localhost:8080/employee",employee);
      let{name}=response.data;
      console.log(name);
      
      alert("welcome "+name)
        
    }
  return (
    <div>EmployeeCreate

        <form onSubmit={create}>
            <input type="text" 
            name='name'
            onChange={handleChange}
            value={employee.name} />
            <input type="text" 
            name='email'
            onChange={handleChange}
            value={employee.email} />
            <input type="password"
            name='password' 
            onChange={handleChange}
            value={employee.password} />
            <button type="submit">Save</button>
        </form>
    </div>
  )
}

export default EmployeeCreate