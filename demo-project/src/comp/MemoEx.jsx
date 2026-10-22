import React, { useEffect, useMemo, useState } from 'react'

const MemoEx = () => {
    let[name,setName]=useState("virat");
    let[age,setAge]=useState(20);
   // let res=demo(name)
   useEffect(()=>{
    console.log("age demo")
   },[age])
   let res= useMemo(()=>{
        return demo(name)
    },[name])
    function nameFun(e) {
        setName(e.target.value)
        console.log("name function");
        
    }
    function ageFun(e) {
        setAge(e.target.value)
        console.log("age function");
        
    }
  return (
    <div>
        <input type="text"
         onChange={nameFun}
         value={name} /> -{name}
        <br />
         <input type="text"
         onChange={ageFun}
         value={age} /> -{age}

         <h3>{res}</h3>
    </div>
  )
}

export default MemoEx

function demo(name) {
    console.log("demo");
    
    return name;
}