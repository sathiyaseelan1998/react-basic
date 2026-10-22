import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Update = () => {
  let {id}=useParams();
  let[emp,setEmp]=useState(null);
  useEffect(()=>{
      fetch(`http://localhost:4000/employee/${id}`,{
        method:"GET",
      }).then(res=>{
        return res.json();
      }).then(res=>{
        console.log("==",res);
        
        setEmp(res)
        console.log(emp);
        
      })
  },[])
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
  let updateEmp=(e)=>{
    e.preventDefault();
    fetch(`http://localhost:4000/employee/${id}`,{method:"PUT",
      headers:{
        "Content_Type":"application/json"
      },
      body:JSON.stringify(emp)
    }).then((res)=>{
      if (res.ok) {
        alert("Data Updated")
      } else {
        alert("Data Not Updated")
      }
    })
  }
console.log(emp);

  if(emp!==null){

    return (
      <div>
         <form onSubmit={updateEmp}>
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
  
              <button type="submit">Update</button>
        </form>
      </div>
    )
  }else{
    return <div>Loading...</div>
  }
  
}

export default Update