import React, { useEffect, useMemo, useState } from 'react'

const UseMemoEx = () => {
    let[num,setNum]=useState(0);
    let[dup,setDup]=useState(false)

//let n=square(num);
let n=useMemo(()=>{
    return square(num)
},[num])

useEffect(()=>{
    console.log("effect");
    
},[dup])
   
  return (
    <div>
        <input type="number"
        value={num}
        onChange={(e)=>{setNum(e.target.value)}}
         />
         <h1>{n}</h1>
         <button onClick={()=>setDup(val=>!val)}>{dup?"success":"failure"}</button>
    </div>
  )
}

export default UseMemoEx

 function square(n){
    console.log("square");
    
      return  n*n 
}