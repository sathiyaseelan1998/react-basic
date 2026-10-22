import React from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const NavBar = ({role,setRole}) => {
   let navi= useNavigate();
    let logout=()=>{
        localStorage.clear();
        setRole(null);
        navi('/');
    }
  return (
    <div style={{backgroundColor:'blue',padding:'10px'}}>
        {
          role ==="admin" &&
          <div>
            <Link to='/list'>Employee List</Link> <br/>
            <Link to='/empadd'>Employee add</Link> <br/>
            <Link to='/page'>Page</Link>
          </div>
        }
        {
          role==="customer" &&
          <Link to='/empview'>View Employee</Link>
        }{
          role===null &&
        <Link to='/'>Employee Login</Link>
        }
        {
            role && <button onClick={logout}>Logout</button>
        }
    </div>
  )
}

export default NavBar