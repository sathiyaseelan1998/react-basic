import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import useFatch from './customhook/useFatch';
import useAxios from './customhook/useAxios';
import axios from 'axios';

const Read = () => {
    let navi=useNavigate()
    // let[user,setUser]=useState([]);
    // let[error,setError]=useState("");
    // let[load,setLoad]=useState(true);
    // useEffect(()=>{
    //     fetch("http://localhost:4000/user",{method:"GET"})
    //     .then((value)=>{
    //         if(!value.ok){
    //             throw new Error("User not found");
                
    //         }
    //         return value.json();
    //     }).then((val)=>{
    //     setUser(val);
    //     }).catch((error)=>{setError(error.message)})
    //     .finally(()=>{
    //         setLoad(false)
    //     })
    // },[])
    // console.log("==>",user);
   // let{user,error,load}=useFatch("http://localhost:4000/user");
    let{user,error,load,setUser}=useAxios("http://localhost:4000/user");
    if(load){
        return(
            <div>Loading...</div>
        )
    }
    let deleteUser=(id)=>{
        console.log(id);
        axios.delete(`http://localhost:4000/user/${id}`).then(
            ()=>{
                alert("Data Deteted")

                let del=user.filter(u=>u.id!==id);
                setUser(del);
            }
            
        )

    }
  return (
    <div>
        <h1>User</h1>
    {
        user.length>0&&

        <div className='box' style={{padding:"10px",border:"2px solid gray",display:"flex",flexWrap:"wrap",gap:"10px"}}>
            {
              user.map((val)=>
                (
                    <div key={val.id} className='parent' style={{border:"1px solid gray",flexGrow:"1",padding:"10px"}}>
                        <h3>{val.name}</h3>
                        <h4>{val.email}</h4>
                        <h5>{val.address.place}-{val.address.city}</h5>
                        <button onClick={()=>{navi(`/update/${val.id}`)}}>update</button>
                        <button onClick={()=>{deleteUser(val.id)}}>Delete</button>
                    </div>
                )
              )
            }
        </div>
    }
        <p>{error}</p>

    </div>
  )
}

export default Read