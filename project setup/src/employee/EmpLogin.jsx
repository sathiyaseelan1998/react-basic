import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './emp.css'

const EmpLogin = ({setRole}) => {
   let navi= useNavigate()
    let[emp,setEmp]=useState({
     name:"",
      email:"",
      password:"",
      role:""
    });
     let handleChange=(e)=>{
    let{name,value}=e.target;
    console.log(name+" "+value);
    
    setEmp({
        ...emp,
        [name]:value
    })
   }
   let login=(e)=>{
        e.preventDefault();
        fetch("http://localhost:8080/emplogin",{
        method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(emp)
        })
        .then(val=>{
            if(!val.ok){
                throw new Error("Invalid Login");
                
            }
           // console.log(val.json());
            
            return val.json();
        }).then(val=>{
            console.log(val);
            if(val.id>0){
                    localStorage.setItem("role",val.role)
                    localStorage.setItem("id",val.id)
                    setRole(val.role);
                if(val.role==='admin'){
                    
                    setEmp(val)
                    navi('/list')
                }
                else{
                    navi('/empview')
                    
                }
            }
            else{
                alert("Invalid Login...")
            }
        }).catch(error=>{
            alert(error.message)
        })
   }
  return (
    <div>EmpLogin

        <form onSubmit={login}>
            <input type='text'
            name='email'
            value={emp.email}
            onChange={handleChange}/>
            <input type='text'
            name='password'
            value={emp.password}
            onChange={handleChange}/>
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default EmpLogin