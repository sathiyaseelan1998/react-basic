import React, { useState } from 'react'

const Create = () => {
  let[emp,setEmp]=useState({
                "name":"",
                "contect":{
                    "mobile":"",
                    "city":""
                }
            });
  let handleChange=(e)=>{
    let {name,value}=e.target;
    console.log(name,value);
    let nested=name.split('.');
    if(name.includes('contect.')){
      name=nested[nested.length-1];
      setEmp({...emp,
        contect:{
          ...emp.contect, [name]:value
        }
      })
    }
    else{
      setEmp({
        ...emp,[name]:value
      })
    }
  }          

  let createEmp=(e)=>{
    e.preventDefault();
      fetch("http://localhost:4000/employee",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(emp)
      }).then((res)=>{
        if(res.ok){
          alert("Data Saved")
        }else{
          alert("Data Not Saved")
        }
      })
      
  }
  return (
    <div>
      <form onSubmit={createEmp}>
            <input type="text" 
            name="name" 
            onChange={handleChange}
            value={emp.name}  />

            <input type="text" 
            name="contect.mobile" 
            onChange={handleChange}
            value={emp.contect.mobile}  />

            <input type="text" 
            name="contect.city" 
            onChange={handleChange}
            value={emp.contect.city}  />

            <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default Create