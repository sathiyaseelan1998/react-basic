import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
    let navi=useNavigate();
    let[user,setUser]=useState(null);
    let {id}=useParams();
    console.log(id);
    useEffect(()=>{
        let response=axios.get(`http://localhost:4000/user/${id}`)
        .then(res=>setUser(res.data))
    },[])
    let handleChange=(e)=>{
        let{name,value}=e.target;
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
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(user)
            }).then((val)=>{
                if(val.ok){
                    alert("Data Update")
                    navi("/")
                }
                else{
                    alert("Data Not Update");
                }
            })
    }
    
    if(user!==null){
        return (
        <div>
             <form onSubmit={updateUser}>
                <input type="text" name="name" 
                onChange={handleChange}
                value={user.name}/>
                <input type="text" name="address.place"
                onChange={handleChange} 
                value={user.address.place}/>
                <button type="submit">Update</button>
            </form>
        </div>

    )
    }
    else{
        <div>Loadding....</div>
    }
    
}

export default Update