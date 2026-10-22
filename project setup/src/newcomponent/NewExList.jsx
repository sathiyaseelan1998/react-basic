import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addNewUser } from '../slice/myUserSlice';

const NewExList = () => {
    let[users,setUsers]=useState([]);
    let[error,setError]=useState("");
    let[load,setLoad]=useState(true);
    let list=useSelector(state=>state.myUser);
    let dispatch=useDispatch();
    let addWeb=(u)=>{
        let s=list.some(val=>val.id===u.id);
        if(!s){

            dispatch(addNewUser(u));
        }
        else{
            alert("Already Exists")
        }
    }
    useEffect(()=>{
        axios.get("http://localhost:4000/user")
        .then(user=> setUsers(user.data))
        .catch((err)=>{
            setError(err.message);
        })
        .finally(()=>{
            setLoad(false)
        })
    },[])
    let navi=useNavigate();

    let deleteUser=(id)=>{
        axios.delete(`http://localhost:4000/user/${id}`)
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err.message))
        .finally(()=>console.log("Execute"))

       let upUser= users.filter(user=>user.id!==id);
       setUsers(upUser);
    }
   
  return (
    <div>NewExList
     <button onClick={()=>navi("/view")}>Cart List-{list.length}</button>
        <ul>
            {
                users.map(user=><li key={user.id}>
                    {user.id} <span> ---  </span>
                    {user.name}<span> ---  </span>
                    {user.email}<span> ---</span>
                    {user.address.city}<span> ---</span>
                    {user.address.place}
                    <button onClick={()=>addWeb(user)}>Add to Cart</button>
                    <button onClick={()=>navi(`/update/${user.id}`)}>Update</button>
                    <button onClick={()=>deleteUser(user.id)}>Delete</button>
                    <p>===========================================</p>
                </li>)
            }
        </ul>
    </div>
  )
}

export default NewExList