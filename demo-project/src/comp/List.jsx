import React, { useEffect, useState } from 'react'

const List = ({send}) => {
    let[list,setList]=useState([]);
    useEffect(()=>{
        console.log("child");
        
        setList(send());
    },[send])
    
    
  return (
    <div>
        {
            list.map((val,index)=>{
                return <p key={index}>{val}</p>
            })
        }
    </div>
  )
}

export default List