import React, { useCallback, useState } from 'react'
import List from './List';

const ExCallback = () => {
    let[num,setNum]=useState(0);
    let[dark,setDark]=useState(false);

    // let sum=()=>{
    //     return [num+1,num+2,num+3]
    // }
      let sum=useCallback(()=>{
        return [num+1,num+2,num+3]
    },[num])

    let theme={
        backgroundColor:dark?"black":"orange",
        color:dark?"orange":"black"
    }
    
  return (
    <div style={theme}>
        <input type="text"
        value={num}
        onChange={(e)=>setNum(e.target.value)} />
        <button onClick={()=>setDark(val=>!val)}>theme</button>
        <List send={sum}/>
    </div>
  )
}

export default ExCallback