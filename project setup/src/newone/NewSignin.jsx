import React, { useState } from 'react'

const NewSignin = () => {
  let [user,setUser]=useState({
    id:1,
    name:"virat",
    address:{
      city:"trichy",
      country:"india"
    }

  })
  let[list,setList]=useState([])
  let handleChange=(e)=>{
   
    let{name,value}=e.target;
    console.log(value);
    
    
     let nested=name.split(".");

     if(name.includes("address.")){
      name=nested[nested.length-1];
      console.log(name);
      console.log(value);
      
      
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
  function submit(e){
    e.preventDefault();
    if(edit){
        let val=list.map(v=>{
          return v.id===upId?{...user}:v;
        })
      
        setList(val)
        setEdit(false)
       // setUser("")
    }else{
      setList([...list,user])
    }
    
  }
 let del=(id)=>{
    let de=list.filter(val=>val.id!==id);
    setList(de)
  }
  let [upId,setUpId]=useState("")
  let [edit,setEdit]=useState(false)
  let up=(id)=>{
    let up=list.find(val=>val.id===id);
    console.log(up);
    
    setUser(up)
    setUpId(id)
    setEdit(true)
  }
  return (
    <div>NewSignin
      <form onSubmit={submit}>
      <input type='text' 
      name='id'
       value={user.id}
       onChange={handleChange}/>

       <input type='text'
       name='name'
       value={user.name}
       onChange={handleChange}/>

       <input type='text'
       name='address.city'
       value={user.address.city}
       onChange={handleChange}/>

       <input type='text'
       name='address.country'
       value={user.address.country}
       onChange={handleChange}/>
       <button type='submit'>{edit?"update":"save"}</button>
       </form>
       <div>{
          list.map((u,i)=>{
           return (<div key={i}>
            {u.id} <span> </span>
           {u.name}<span> </span>
          {u.address.city}<span> </span>
          {u.address.country}<span> </span>
          <button onClick={()=>up(u.id)}>update</button><span> </span>
          <button onClick={()=>del(u.id)}>delete</button>
          </div> )}
          )
        }
        
       </div>
    </div>
  )
}

export default NewSignin