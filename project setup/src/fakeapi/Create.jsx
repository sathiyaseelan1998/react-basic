import React, { useState } from 'react'

const Create = () => {
    let[user,setUser]=useState({
       
        "name":"",
        "email":"DEFAULT@gmail.com",
        "address":{
            "place":"",
            "city":"DEFAULT"
        }})
        let handleChange=(e)=>{
                let{name,value}=e.target;
               
                let nested=name.split('.');
                if(name.includes("address.")){
                    name=nested[nested.length-1];
                    setUser({
                        ...user,
                        address:{
                            ...user.address,
                            [name]:value
                        }
                    })
                }
                else{

                    setUser({
                        ...user,
                        [name]:value
                    })
                }
                
        }
         console.log(user);
         let createUser=(e)=>{
            e.preventDefault();
            fetch("http://localhost:4000/user",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(user)
            }).then((val)=>{
                if(val.ok){
                    alert("Data Saved")
                }
                else{
                    alert("Data Not Saved");
                }
            })
         }
  return (
    <div>
        <form onSubmit={createUser}>
            <input type="text" name="name" 
            onChange={handleChange}
            value={user.name}/>
            <input type="text" name="address.place"
            onChange={handleChange} 
            value={user.address.place}/>
            <button type="submit">Add</button>
        </form>
    </div>
  )
}

export default Create