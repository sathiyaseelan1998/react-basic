import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const NewExUpdate = () => {
  let[user,setUser]=useState(null);
  let{id}=useParams();
  let[error,setError]=useState("");
  let[load,setLoad]=useState(true)
  useEffect(()=>{
    let getUser=async()=>{
      try {
        let user=await axios.get(`http://localhost:4000/user/${id}`)
        console.log(user.data);
        
        setUser(user.data)
        
      } catch (error) {
        console.log(error.message);
        setError(error.message);
      }
      finally{
        setLoad(false)//824262
      }

    }
    getUser();
  },[])
  let handleChange=(e)=>{
     let {name,value}=e.target;
     let fieldName=name.split("address.")[1]
     if(name.includes("address.")){
        setUser({...user,
          address:{
            ...user.address,[fieldName]:value
          }
        });
     }else{
        setUser({...user,[name]:value});
     }
  }
  let update=async(e)=>{
     e.preventDefault();
    try {
      let upUser=await axios.put(`http://localhost:4000/user/${id}`,user)
      console.log(upUser.data);
      navi('/')
    } catch (error) {
      console.log(error.message);
      
    }
    finally{
      setLoad(false);
    }
  }
  let navi=useNavigate();
  if(user!==null){
    
    return (
      <div>NewExUpdate
          <form onSubmit={update}>
            <input type="text" name='name' value={user.name} onChange={handleChange}/>
            <input type="text" name='email' value={user.email} onChange={handleChange}/>
            <input type="text" name='address.place' value={user.address.place} onChange={handleChange}/>
            <input type="text" name='address.city' value={user.address.city} onChange={handleChange}/>
            <button>Update</button>
          </form>
  
      </div>
    )
  }
  else{
    return(
      <div>Loading...</div>
    )
  }
}

export default NewExUpdate