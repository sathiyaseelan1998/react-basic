import React, { useReducer, useRef, useState } from 'react'

function reducer(state,action){

  switch(action.type){
    case "in":
        return state+1
    case "de":
      return state-1
    case "name":
      state=action.val
      return state;
  }

}

const UseReducerEx = () => {
  let[count,dispatch]=useReducer(reducer,0);
  let[item,dis]=useReducer(reducer,"rohit")
  let name=useRef("virat")
  let add=()=>{dispatch({type:"in"})}
let sub=()=>{dispatch({type:"de"})}
  return (
    <div>
        <button onClick={add}>+</button>
        {count}
        <button onClick={sub}>-</button>
        <br />
        <input type="text" 
        ref={name} />
        <button onClick={()=>{dis({type:"name",val:name.current.value})}}>name</button>
        <h1>{item}</h1>
    </div>
  )
}

export default UseReducerEx