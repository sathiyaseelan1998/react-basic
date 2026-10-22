import React, { useReducer } from 'react'

let reducer=(state,action)=>{
    switch (action.type) {
        case "add":
            return state+1
        case "sub":
            return state-1
        default:
            return state
    }
}

const ExReduce = () => {
    let[count,dispatch]=useReducer(reducer,1)
  return (
    <div>
        <h1>useReducer</h1>
        <button onClick={()=>dispatch({type:"add"})}>+</button>
        <p>{count}</p>
        <button onClick={()=>dispatch({type:"sub"})}>-</button>
        <button onClick={()=>dispatch({type:"def"})}>def</button>
    </div>
  )
}

export default ExReduce