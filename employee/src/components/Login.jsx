import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    let navi=useNavigate();
    let [emps,setEmps]=useState([]);
    let [load,setLoad]=useState(true);
    let [error,setError]=useState("");
   let [user,setUser]= useState({
        email:"",
        password:""
    })
     useEffect(()=>{
          let getEmp=async()=>{
            try {
              let response=await axios.get("http://localhost:4000/employee");
              setEmps(response.data);
              console.log(response.data);
              
            } catch (error) {
              setError(error.message)
            }
            finally{
              setLoad(false)
            }
    
          }
          getEmp();
      },[]);
      console.log(emps);
      
   let handleChange=(e)=>{
    let {name,value}=e.target;
    setUser({
        ...user,
        [name]:value
    })
   } 
   async function login(e){
    e.preventDefault();
       let emp= emps.find(emp=>emp.email===user.email && emp.password===user.password)
       if(emp!==undefined){
        navi('/');
       }
       else{
        alert("Login Failed")
       }
        
    }
  return (
    <div>
        <form onSubmit={login}>
            <input type="text"
             onChange={handleChange}
             name='email'
             value={user.email}/>

             <input type="password"
             onChange={handleChange}
             name='password'
             value={user.password}/>
            <button>Login</button>
        </form>
    </div>
  )
}

export default Login