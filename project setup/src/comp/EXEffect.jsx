import React, { useEffect, useState } from 'react'

const EXEffect = () => {
    let [count,setCount]=useState(0);
    let [c,setC]=useState(0);
    console.log(count , c);
    
    useEffect(()=>{
         setC(count)
        console.log("eff");
        
    },[count])
    let increse=()=>{
        setCount((val)=>val+1)
    }
  return (
    <div>
        <h3>Count - {count}</h3>
        <button onClick={increse}>Click</button>
        <h3>C - {c}</h3>
    </div>
  )
}

export default EXEffect