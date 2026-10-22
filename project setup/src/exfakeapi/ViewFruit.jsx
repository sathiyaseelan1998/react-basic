import React from 'react'
import { useSelector } from 'react-redux'

const ViewFruit = () => {
    let f=useSelector((state)=>state.fruitInfo.fruit);
    console.log(f);
    
  return (
    <div>ViewFruit</div>
  )
}

export default ViewFruit