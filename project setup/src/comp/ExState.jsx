import React, { useEffect, useState } from 'react'

const ExState = () => {
    let[count,setCount]=useState(0)
    useEffect(()=>{
        console.log("UseSate Render ", count);
        
    })
    function handlteState(){
       // setCount((count)=>count+1)
        setCount((val)=>val+1)
    }
    let sty={
        backgroundColor:"red",
        color:"white",
        padding:"10px",
        outline:"none",
        border:"none"
    }
  return (
    <div>
        <button style={sty}
            onClick={handlteState}>UseState  
            <span>{count}</span>
        </button>
    </div>
  )
}

export default ExState