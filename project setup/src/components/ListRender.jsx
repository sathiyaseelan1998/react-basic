import React, { useState } from 'react'

const ListRender = () => {
    let[ar,setAr]=useState(["one","two","three"])
    let c=1;
  return (
    <div>ListRender
        <ul>
            {
                ar.map((val)=> <li key={c++}>{val} {c}</li>)
            }
        </ul>
    </div>
  )
}

export default ListRender