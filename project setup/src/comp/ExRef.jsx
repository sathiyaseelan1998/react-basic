import React, { useEffect, useRef } from 'react'

const ExRef = () => {
    let count=useRef(0)
    let refVal=useRef(null) //point DOM element
   
    
    function add() {
        //count.current++;
        refVal.current.innerText=++(count.current);
        console.log(refVal.current.innerText);
        
        
    }
    useEffect(()=>{
        console.log("UseRef Render"); //when call only first render
        
    })
  return (
    <div>
        <button onClick={add}>UseRef <span ref={refVal}>0</span></button>
    </div>
  )
}

export default ExRef