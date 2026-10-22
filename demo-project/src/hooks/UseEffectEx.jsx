import React, { useEffect, useState } from 'react'

const UseEffectEx = () => {
   let [count,setCount]=useState(0)
 //  useEffect(()=>{console.log("call every render");})
//    useEffect(()=>{console.log("call first time only");
//    },[])
    useEffect(()=>{console.log("call when value updated");
    },[count])
    return (
      <div>
          <button onClick={()=>setCount(count+1)}>+</button>
          {count}
          <button onClick={()=>setCount(count=>count-1)}>-</button>
      </div>)
}

export default UseEffectEx




