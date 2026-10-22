import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const CreateEmp = () => {
    let navi=useNavigate();

    let [emp,setEmp]=useState({
        name:"",
        email:"",
        password:"",
        address:{
            city:"",
            pincode:""
        }
    });
    let [load,setLoad]=useState(true);
    let [error,setError]=useState("");
    let handleChange=(e)=>{
        let {name,value}=e.target;
        let fieldName=name.split('.')[1];
        if(name.includes("address.")){
            setEmp({
                ...emp,
                address:{
                    ...emp.address,
                    [fieldName]:value
                }
            })
        }
        else{
            setEmp({
                ...emp,
                [name]:value
            })
        }
        
    }
    let create=async(e)=>{
        e.preventDefault();
        try {
            let response=await axios.post("http://localhost:4000/employee",emp)
            alert("Employee Data Saved");
            navi("/login");
        } catch (error) {
            setError(error.message);
        }
        finally{
            setLoad(false);
        }
    }
  return (
    <div className='container'>
        <h3>Registration</h3>
        <form id='form-container' onSubmit={create}>
            <input
                type="text" 
                name="name"
                value={emp.name}
                placeholder='Enter the Name'
                onChange={handleChange}
            />

              <input
                type="text" 
                name="email"
                value={emp.email}
                placeholder='Enter the Email'
                onChange={handleChange}
            />

              <input
                type="password" 
                name="password"
                value={emp.password}
                placeholder='Enter the Password'
                onChange={handleChange}
            />
              <input
                type="text" 
                name="address.city"
                value={emp.address.city}
                placeholder='Enter the City'
                onChange={handleChange}
            />
              <input
                type="text" 
                name="address.pincode"
                value={emp.address.pincode}
                placeholder='Enter the Pincode'
                onChange={handleChange}
            />

            <button type='submit'>Save</button>
            
        </form>
       {
       
        error.length>0&&
            <p>{error}</p>
       }  
    </div>
  )
}

export default CreateEmp