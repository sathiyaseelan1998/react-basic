import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'
import '../index.css'
const EmpList = () => {
    let navi=useNavigate();
    let[emp,setEmp]=useState([]);
    let[load,setLoad]=useState(true);
    let[error,setError]=useState("");
    useEffect(()=>{
        fetch("http://localhost:8080/employee",{method:"GET"})
        .then(val=>{
          if(!val.ok){
            throw new Error("Employee Not Found...");
          }
          return val.json()})
        .then(val=>{
          setEmp(val);
        })
        .catch(error=>{
          setError(error.message);
        })
        .finally(()=>{
          setLoad(false);
        })
    },[])
    let dateteEmp=(id)=>{
      fetch(`http://localhost:8080/employee/${id}`,{
        method:"DELETE",
        headers:{
          "Content-Type":"application/json"
        }
      }).then(val=>{
        return val.text();
      }).then(val=>{
        alert(val)
        let del=emp.filter(e=>e.id!==id);
        setEmp(del)
      })
    }

    let[search,setSearch]=useState("");

    let sear=emp.filter(e=>e.name.includes(search))
   
    
    console.log(emp);
    if(load){
        return(
            <div>Loading...</div>
        )
    }
    
    
  return (
    <div>EmpList
      <button onClick={()=>navi("/empadd")}>add</button><br/>
      <input type='text'
      value={search} 
      onChange={(e)=>{setSearch(e.target.value)}}/>
      { 
      
       emp.length>0&&
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Role</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              sear.map(e=>{
               return (<tr key={e.id}>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.email}</td>
                    <td>{e.password}</td>
                    <td>{e.role}</td>
                     <td><button onClick={()=>{navi(`/update/${e.id}`)}}>Edit</button></td>
                     <td><button onClick={()=>{dateteEmp(e.id)}}>Delete</button></td>
                </tr>)
              })
            }
          </tbody>
        </table>
        }
        <p>{error}</p>
    </div>
  )
}

export default EmpList