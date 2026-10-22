import React, { useRef } from 'react'

const FocusRef = () => {
    let inp=useRef(null);
    console.log(inp);

    let focusEx=()=>{
        inp.current.focus();
        inp.current.style.backgroundColor="blue";
    }
    
  return (
    <div>
        <input type="text" ref={inp} />
        <button onClick={focusEx}>Focus</button>
    </div>
  )
}

export default FocusRef