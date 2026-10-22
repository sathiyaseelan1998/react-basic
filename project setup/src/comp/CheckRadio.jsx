import React, { useState } from 'react'

const CheckRadio = () => {
    let [data,setData]=useState({
        gen:"Others",
        check:true,
        course:true
    })

let updateDataRadio=(e)=>{
    console.log("update");
    setData({...data,gen:e.target.value})
    
}
let updateDataCheck=(e)=>{
    console.log("Checkbox...");
   // console.log(e.target.checked);
    let val=e.target.checked?true:false;
    setData({...data,check:val})
    
}
let update=(e)=>{
    console.log(e.target.value);
    setData({...data,course:e.target.value})
}
  return (
    <div>
        <h2>{data.gen} - {data.check?"Married":"Not Married"}-
            {data.course?data.course:"not found"}
        </h2>
        <input type="radio" name="gen" id="m" 
        checked={data.gen==="Male"}
        value="Male"
        onChange={updateDataRadio}
        />
        <label htmlFor="m">Male</label>
        <input type="radio" name="gen" id="f"
        checked={data.gen==="Female"}
        value="Female"
        onChange={updateDataRadio}
        />
        <label htmlFor="f">Female</label>
        <input type="radio" name="gen" id="o" 
        checked={data.gen==="Others"}
        value="Others"
        onChange={updateDataRadio}
        />
        <label htmlFor="o">Others</label>
        <div>
            <input type="checkbox" name="check" id="c"
            checked={data.check}
            onChange={updateDataCheck}
            />
            <label htmlFor="c">IsMarried</label>
        </div>
        
        
    </div>
  )
}

export default CheckRadio