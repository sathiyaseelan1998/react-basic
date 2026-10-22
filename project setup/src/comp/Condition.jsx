import React, { useState } from 'react'

const Condition = () => {
  let check=false;
  let age=15;
  let res="";
  let val="cricket"
  let [s,setS]=useState("");
  if(age>=18){
      res="Your eligible for vote";
  }
  else{
    res="Not eligible";
  }
  
  let fun=check?<Add />:<Sub />;
  function update(e){
    console.log(e.target.value);
    
      console.log(e.target.clicked);
      console.log("clicked...");
    switch(e.target.value){
    case "Success":
      s="cricket";
      setS(s)
      break;
    case "Failure":
      s="football";
      setS(s)
      break;
    default:
      s="you won't play"
  }
      
  }
  return (
    <div>
      {
        check && <h2>It's true</h2>
      }
      <i>{res}</i>
      <br />
      <u>{s}</u>
      {fun}
      <input type="radio" id="r" name="rr" checked={s=="cricket"}
      onChange={update}
      value="Success"/>
      <label htmlFor="r">Check1</label>
       <input type="radio" id="i" name="rr" checked={s=="football"}
      onChange={update}
      value="Failure"/>
      <label htmlFor="i">Check2</label>
      
    </div>
  )
}

function Add(){
  return(
    <h1>{10+25}</h1>
  )
}
let Sub=()=> {
  return(
    <h1>{25-15}</h1>
  )
}
export default Condition