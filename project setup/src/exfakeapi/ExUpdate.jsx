import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'

const ExUpdate = () => {
  let navi=useNavigate();
 let {id}= useParams();
 console.log(id);
  let[user,setUser]=useState({
     
       "name": "",
       "email": "",
       "address": {
         "place": "",
         "city": ""
       }
     })
     useEffect(()=>{
      let response=axios(`http://localhost:4000/user/${id}`)
      .then((res)=>setUser(res.data))
     },[])
     let handleChange=(e)=>{
          let {name,value}=e.target;
          let nested=name.split('.');
          if (name.includes('address.')) {
              name=nested[nested.length-1];
              setUser({...user,
                address:{
                  ...user.address,
                  [name]:value
                }
              })
          } else {

            setUser({
              ...user,
              [name]:value
            })
            
          }
     }
     let updateUser=(e)=>{
       e.preventDefault();
        fetch(`http://localhost:4000/user/${id}`,{
        method:"PUT",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(user)
      }).then((res)=>{
        if(res.ok){
          alert("Data updated");
          navi('/')
          
        }
        else
          alert("Data Not updated")
      })
     }
  return (
    <div>
      <form onSubmit={updateUser}>
        <input type="text" name="name"
         value={user.name} onChange={handleChange} />
        <input type="text" name="email"
         value={user.email} onChange={handleChange} />
        <input type="text" name="address.place"
         value={user.address.place} onChange={handleChange} />
        <input type="text" name="address.city"
         value={user.address.city} onChange={handleChange} />
         <button type="submit">Update</button>
      </form>
    </div>
  )
}

export default ExUpdate