import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const NewExCreate = () => {
    let[user,setUser]=useState(
    {
      "name": "YY",
      "email": "yy@gmail.com",
      "address": {
        "place": "yy road",
        "city": "salem"
      },
      
    }
    );
    let handleChange=(e)=>{
        let{name,value}=e.target;
       let filedName= name.split(".")[1];
        console.log(filedName);
        if(name.includes("address.")){
            setUser({...user,address:{
                ...user.address,[filedName]:value
            }})
        }
        else{

            setUser({...user,[name]:value});
        }
        
    }
    let navi=useNavigate()
    let create=async(e)=>{
        e.preventDefault();
        try { 
            let res=await axios.post("http://localhost:4000/user",user);
            console.log(res);
            navi('/');
        } catch (error) {
            console.log(error.message);
        }
        finally{
            console.log("Execute");
            
        }
        
    }
  return (
    <div>NewExCreate

        <form onSubmit={create}>
            <input type="text" name="name" value={user.name} onChange={handleChange} />
            <input type="text" name="email" value={user.email} onChange={handleChange} />
            <input type="text" name="address.place" value={user.address.place} onChange={handleChange} />
            <input type="text" name="address.city" value={user.address.city} onChange={handleChange} />
            <button>Save</button>
        </form>        
    </div>
  )
}

export default NewExCreate