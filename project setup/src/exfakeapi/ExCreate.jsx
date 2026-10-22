import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ExCreate = () => {
  let navi=useNavigate();
  let[user,setUser]=useState({
    
      "name": "",
      "email": "",
      "address": {
        "place": "",
        "city": ""
      }
    })
    let handleChange=(e)=>{
     let{name,value}=e.target;
     let nested=name.split('.');
     if(name.includes('address.')){
            name=nested[nested.length-1];
            setUser({...user,
              address:{
                ...user.address,
                [name]:value
              }
            }
            )
     }else{
            setUser({...user,
              [name]:value
            }
            )
     }
    }
    let createUser=(e)=>{
      e.preventDefault();
      fetch("http://localhost:4000/user",{
        method:"POST",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(user)
      }).then((res)=>{
        if(res.ok){
          alert("Data Saved");
          navi('/');
        }
        else
          alert("Data Not Saved")
      })
    }
  return (
  <div>
    <form onSubmit={createUser}>
      <input type="text" name="name" 
      value={user.name} onChange={handleChange} />
      <input type="text" name="email" 
      value={user.email} onChange={handleChange} />
      <input type="text" name="address.place" 
      value={user.address.place} onChange={handleChange} />
      <input type="text" name="address.city" 
      value={user.address.city} onChange={handleChange} />
      <button type="submit">Save</button>
    </form>
  </div>
  )
}

export default ExCreate