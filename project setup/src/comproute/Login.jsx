import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Login = () => {
    let {em}=useParams();
  let navi=  useNavigate();
  let home=()=>{
    navi("/");
  }
   let contect=()=>{
    navi("/contect");
  }
  return (
    <div>
        Login-{em}
    
        <button onClick={home}>Home</button>
        <button onClick={contect}>Contect</button>
    </div>
  )
}

export default Login