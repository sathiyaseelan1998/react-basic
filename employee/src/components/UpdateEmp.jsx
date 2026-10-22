import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const UpdateEmp = () => {
  let navi=useNavigate();
  let {id}=useParams();
  let [emp,setEmp]=useState(null);
      useEffect(()=>{
        let fetchData=async()=>{
          let response=await axios.get(`http://localhost:4000/employee/${id}`)
          setEmp(response.data)
        }
        fetchData()
      },[])
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
      let update=async(e)=>{
          e.preventDefault();
          try {
              let response=await axios.put(`http://localhost:4000/employee/${id}`,emp)
              alert("Employee Data Updated");
              navi('/')
          } catch (error) {
              setError(error.message);
          }
          finally{
              setLoad(false);
          }
      }
      if(emp!==null){

          return (
            <div className='container'>
                <h3>Edit Page</h3>
                <form id='form-container' onSubmit={update}>
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
        
                    <button type='submit'
                        style={{backgroundColor:"green"}}
                    >Update</button>
                    
                </form>
               {
               
                error.length>0&&
                    <p>{error}</p>
               }  
            </div>
          )
      }
      else{
       return <p>Loading...</p>
      }
}

export default UpdateEmp