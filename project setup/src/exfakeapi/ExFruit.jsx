import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addFruit } from '../slice/fruit.js';
import { Link } from 'react-router-dom';

const ExFruit = () => {
    
    let[f,setF]=useState("");
    let dispatch=useDispatch();
    let addFruitFun=(e)=>{
        e.preventDefault();
        console.log("send...",f);
        
        dispatch(addFruit(f))
          console.log("sending...");
    }
  return (
    <div>
        <Link to="viewFruit">Fruit View</Link>
        <form onSubmit={addFruitFun}>
            <input type="text"
             onChange={(e)=>{setF(e.target.value)}}
             value={f} />
             <button type="submit">Add</button>
        </form>
            <p>{f}</p>
    </div>
  )
}

export default ExFruit