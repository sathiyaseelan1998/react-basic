import React, { useState } from 'react'
import getApi from './custhook/getApi';
import './fake.css';
import {Link, useNavigate} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { addUser } from '../slice/userSlice';


const ExList = () => {
    let navi=useNavigate();
    let{user,error,load,setUser}=getApi();
    console.log(user);

    let list=useSelector(state=>state.user);
    
    let userDelete=(id)=>{
        fetch(`http://localhost:4000/user/${id}`,{
            method:"DELETE",
            headers:{
                'Content-Type':'appication/json'
            }
            // },
            // body:JSON.stringify(user)
        }).then((res)=>{
            if (res.ok) {
                alert("Data Deleted")
            let del=user.filter(val=>val.id!==id)
            setUser(del)
                
            } else {
                alert("Data not deleted")
            }
        })
    }
    let dispatch=useDispatch();
    let addUserFun=(u)=>{
       let s= list.some(val=>val.id===u.id)
       if(s){
            alert("user already exists")
       }
       else{

           dispatch(addUser(u));
       }
    }
  return (
    <div className='body'>
        <Link to='create'>Create</Link>
        <Link to='view' style={{backgroundColor:"orange",
            padding:"10px",color:"white",
            textDecoration:"none"}}>View <span
            style={{backgroundColor:"blue",
                width:"30px",height:"30px",
                borderRadius:"50%"
            }}
            >{list.length}</span></Link>

        <table>
            <tr>
                <th>S.No</th>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Place</th>
                <th>City</th>
                <th>View</th>
                <th>Update</th>
                <th>Delete</th>
            </tr>
            <tbody>
                {
                    user.map((val,index)=>{
                        return(
                            <tr key={val.id}>
                                <td>{index+1}</td>
                                <td>{val.id}</td>
                                <td>{val.name}</td>
                                <td>{val.email}</td>
                                <td>{val.address.place}</td>
                                <td>{val.address.city}</td>
                                <td><button onClick={()=>{addUserFun(val)}}>Add</button></td>
                                <td><button onClick={()=>{navi(`/update/${val.id}`)}}>Update</button></td>
                                <td><button onClick={()=>userDelete(val.id)}>Delete</button></td>
                            </tr>
                         
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default ExList