import React, { useEffect, useRef, useState } from 'react'

const UseRefEx = () => {
    let count=useRef(0);
    let inp=useRef(null);
    let add=()=>{
        
        inp.current.value=count.current++;
        console.log(count.current);
        
    }
    let[name,setName]=useState("");
function sub(){
    setName(inp.current.value);
    
}
let f=()=>{
    inp.current.focus();
}
  return (
    <div>
        <input type="text" ref={inp} />
        <button onClick={sub}>sub</button>
        <h1>{name}</h1>
        <button onClick={f}>focus</button>
        {count.current}
        <button onClick={add}>add</button>
    </div>
  )
}

export default UseRefEx