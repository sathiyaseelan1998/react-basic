import React, { useCallback, useEffect, useMemo, useState } from 'react'

const UseCallbackEx = () => {
    let[num,setNum]=useState(0);
    let[dup,setDup]=useState(false)

// let nn=()=> square(num);
// let n=nn();

let nn=useCallback(()=>{
    return square(num)
},[num])
console.log(nn());
let n=nn();
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

export default UseCallbackEx

 function square(n){
    console.log("square");
    
      return  n*n 
}