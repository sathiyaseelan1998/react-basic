import { useState } from "react";

 const Sample=({u})=>{

// console.log(props.u.name);
//let {u}=props

let [change,setChange]=useState("PP")

function show(){
    console.log(u.name,u.age,u.place);
    console.log(change);
    change=u.name;
    console.log(change);
    setChange(change)
    
}


    return(
        <div>
            Sample -{change}
            <br/>
            <button onClick={show}>Click</button>
        </div>
    )
}

export default Sample