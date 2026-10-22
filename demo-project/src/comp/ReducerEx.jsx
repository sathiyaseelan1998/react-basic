import React, { useMemo, useReducer, useRef, useState } from 'react'

function reducer(state,action){
  switch(action.type){
    case "addItem":
      if(action.names=="" || action.names==null || action.names==' '){
        alert("Name should not be empty...")
      }else{

        return [...state,{id:state.length+1,name:action.names,city:action.c}]
      }
    case "deleteItem":
        let del=state.filter(val=>val.id!==action.id)
        return del;
    case "updateItem":
      return state.map(val=> val.id===action.id?{...val,name:action.name,city:action.cc}:val)
  }
}

const ReducerEx = () => {
 
  let[item,dispatch]=useReducer(reducer,[{id:1,name:"arun",city:"chennai"}])
  let[inp,setInp]=useState("");
  let[u,setU]=useState(false);
  let[uId,setUid]=useState(0);
  console.log(item);
  
  let deleting=(id)=>{
    dispatch({type:"deleteItem",id})
  }
   function adding(){
    if(u){
        dispatch({type:"updateItem",id:uId,name:inp,cc:"###"})
        setU(false)
        setInp("")
        setUid(0)
    }
    else{
        dispatch({type:"addItem",names:inp,c:"trichy"})
    }
      
  }
  let updating=(val)=>{
    setInp(val.name)
    setUid(val.id)
    setU(true)
  }
  let rr=useRef(100)
  let pp=useRef("")
 // console.log(rr.current,pp.current.value);
  
   //pp.current.value=inp
  
   let[qq,seQq]=useState(true)
 
 function ww(){
  if(qq){
       pp.current.focus();
  pp.current.style.backgroundColor="navy"
  // pp.current.style.color="white"
  // pp.current.style.outline="10px double red"
  // pp.current.style.margin="15px"
  // pp.current.style.border="none"
  // pp.current.style.borderRadius="15px"
  seQq(false)
  }
  else{
   
  pp.current.style.backgroundColor=""
  pp.current.style.color=""
  pp.current.style.outline=""
  pp.current.style.margin=""
  pp.current.style.border=""
  pp.current.style.borderRadius=""
      seQq(true)
  }
 }
  
  return (
    <div>
       
       <h3>List - {item.length}</h3>
          <input type="text" onChange={(e)=>{setInp(e.target.value)}}
          value={inp}/>
          <button onClick={adding}>{u?"Edit":"Add"}</button>
        {
          item.map(val=>
          <p key={val.id}>
            <span>{val.name}-{val.city}</span>
            <button onClick={()=>updating(val)}>update</button>
            <button onClick={()=>deleting(val.id)}>delete</button>
          </p>)
        }
        <input type="text" ref={pp} />
        <button onClick={ww}>{qq?"focus":<del style={{color:"red"}}>unfocus</del>}</button>
    </div>
  )
}

export default ReducerEx