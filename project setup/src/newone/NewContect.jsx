import React from 'react'
import { useParams } from 'react-router-dom'

const NewContect = () => {
    let {val}=useParams();
 //  let j= JSON.parse(val)
  //  console.log(v.val);
    
  return (
    <div>NewContect -{val}</div>
  )
}

export default NewContect