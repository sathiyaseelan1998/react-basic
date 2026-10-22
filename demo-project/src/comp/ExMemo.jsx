import React, { useEffect, useMemo, useState } from 'react'

const ExMemo = () => {
    let[num,setNum]=useState(0);
    let[dark,setDark]=useState(true);

  // let result=slowFun(num);
   let result= useMemo(()=>{
        return slowFun(num)
    },[num])
    // let [result,setResult]=useState(0);
    // useEffect(()=>{
    //     setResult(slowFun(num))
    // },[num])
useEffect(()=>{
    console.log("theme changed");
    
},[dark])

    // let theme={
    //     backgroundColor:dark?"black":"pink",
    //     color:dark?"pink":"black"
    // }
   let theme= useMemo(()=>{
        return{
            backgroundColor:dark?"black":"pink",
            color:dark?"pink":"black"
        }
    },[dark])
  return (
    <div>
        <input type="text"
         onChange={(e)=>{setNum(e.target.value)}}
         value={num} />
         <button onClick={()=>setDark(val=>!val)}>Theme</button>
         <div style={theme}>{result}</div>
    </div>
  )
}

export default ExMemo

function slowFun(num){
    console.log("slow function called");
    
    for(let i=0;i<1000000000;i++){
    }
    return num*10;
}