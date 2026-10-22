import React, { useState } from 'react'

const EmpAdd = () => {
    let[emp,setEmp]=useState({
      name:"",
      email:"",
      password:""
    });
    let[msg,setMsg]=useState("");

    let handleChange=(e)=>{
      let {name,value}=e.target;
      setEmp({...emp,
              [name]:value})
    }

    let createEmp=(e)=>{
      e.preventDefault();
      fetch("http://localhost:8080/employee",
        {
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(emp)

        }
      ).then(val=>{
        if(val.ok){
          alert("Data Saved")
          return val.json();
          
        }
        else{
          alert("Data Not Saved")
        }
      }
      ).then(val=> {
       // setEmp(emp)
        setMsg(`Hi ${val.id} welcome to our website`)
      });
      
    }
  return (
    <div>
        <form onSubmit={createEmp}>
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
            <button type="submit">Save</button>
        </form>
        <p>{msg}</p>
    </div>
  )
}

export default EmpAdd