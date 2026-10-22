import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const EmployeeUpdate = () => {
  let {id}=useParams();
  useEffect(()=>{
    let getEmp=async()=>{
        let res=await axios.get(`http://localhost:8080/employee/${id}`);
        setEmployee(res.data);
        console.log(res.data);
        
    }
    getEmp();
  },[])

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
    let update=async(e)=>{
        e.preventDefault();
        let response=await axios.put(`http://localhost:8080/employee/${id}`,employee);
      let{name}=response.data;
      console.log(name);
      
      alert("Updated "+name)
        
    }
  return (
    <div>EmployeeUpdate

        <form onSubmit={update}>
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

export default EmployeeUpdate