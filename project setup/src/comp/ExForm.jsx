import React, { useState } from 'react'


const ExForm = () => {
    let[user,setUser]=useState({
        name:"Virat",
        age:27,
        city:"trichy",
        pincode:621002
    })
    let handleName=(e)=>{
      setUser((u)=>{
        return {...u,name:e.target.value}
      })
        
    }
    let handleAge=(e)=> {
        setUser((u)=>{
            return {...u,age:e.target.value}
        })
    }
    
    let updateFun=(e)=>{
        // setUser((u)=>{
        //     return {...u,[e.target.name]:e.target.value}
        // })
        setUser({...user,[e.target.name]:e.target.value})
    }

  return (
    <div>
        <h2>
            {user.name} {user.age}
        </h2>
        <input type="text" value={user.name}
         onChange={handleName}
         name="name" />

         <input type="text" value={user.age}
         onChange={handleAge}
         name="age" />

         <h2>
            {user.city} {user.pincode}
        </h2>

         <input type="text" value={user.city}
         onChange={updateFun}
         name="city" />
         <input type="text" value={user.pincode}
         onChange={updateFun}
         name="pincode"/>
    </div>
  )
}

export default ExForm