import React, { useState } from 'react'

const HookState = () => {
    let[count,setCount]=useState(0);
    let[obj,setObj]=useState({id:1,name:"virat",age:37})
    let[str,setStr]=useState("one")

   let update=()=>{

        setObj((val)=>{
            return ({...val,id:200,name:"dhoni"})
        })

   }
   console.log(obj);
   
   let s=(ss)=>{
    console.log(ss);
    
        setStr(ss);
        
        
   }
  
   
  return (
    <div>
        <h3>USESTATE</h3>
        <p>{count}</p>
        <button onClick={()=>{setCount(val=>val+1)}}>+</button>
        <button onClick={()=>{setCount(val=>val-1)}}>-</button>
        {/* <button onClick={update}>update</button> */}
        <button onClick={()=>{
            setObj((val)=>{
                return (
                    {...val,id:123,name:"Rohit"}
                )
            })
        }}>up</button>
        
        <p>{obj.id }</p>
        <p>{obj.name}</p>
        <button onClick={()=>{s("two")}}>str</button>
        <p>{str}</p>
    </div>
  )
}

export default HookState