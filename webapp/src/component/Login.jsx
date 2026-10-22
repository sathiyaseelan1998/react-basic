import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
   let navi= useNavigate();
    let[emp,setEmp]=useState({
        email:"admin",
        password:"admin@gmail.com"
    })
    let handleChange=(e)=>{
            let {name,value}=e.target;
            setEmp({
                ...emp,
                [name]:value
            });
    }
    let login=async(e)=>{
        e.preventDefault();
        try {
            let res=await axios.post("http://localhost:8080/auth",emp);
            let token=res.data.token || res.data.accessToken;
            if(token){

                localStorage.setItem("token",token);
                alert("Login Success")
                navi('/')
            }

        } catch (error) {
            console.log(error.message);
            
        }
       
    
    }
  return (
    <div>Login

        <form onSubmit={login}>
            <input type="text" 
            name='email'
            value={emp.email}
            onChange={handleChange} />

             <input type="text" 
            name='password'
            value={emp.password}
            onChange={handleChange} />

            <button>Login</button>
        </form>


    </div>
  )
}

export default Login