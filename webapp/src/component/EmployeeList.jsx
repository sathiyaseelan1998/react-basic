import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const EmployeeList = () => {
    let navi=useNavigate();
    let[employees,setEmployes]=useState([]);
    let[error,setError]=useState(null);
    let[load,setLoad]=useState(true);
    useEffect(()=>{
    
        let getEmp=async()=>{
        try {
            let response= await axios.get("http://localhost:8080/employee")
             setEmployes(response.data);
        } catch (error) {
            console.log(error.message);
            setError(error.message);
        }
        finally{
            console.log("Execute");
            setLoad(false)
        }
         
        }
        getEmp();
    },[])
    if(load){
        return <p>Loading....</p>
    }
    let token=localStorage.getItem('token');
    let deleteEmp=async(id)=>{
        let res=await axios.delete(`http://localhost:8080/employee/${id}`,
            {
                headers:{
                    Authorization:`Bearer ${token}`
                }
            }
        )
       let e= employees.filter(emp=>emp.id!=id);
       setEmployes(e);
       console.log(res);
       
    }
  return (
    <div>EmployeeList
        <table>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Update</th>
                <th>Delete</th>
            </tr>
            <tbody>
                {
                    employees.map(emp=><tr key={emp.id}>
                        <td>{emp.id}</td>
                        <td>{emp.name}</td>
                        <td>{emp.email}</td>
                        <td>{emp.password}</td>
                        <td><button onClick={()=>navi(`update/${emp.id}`)}>update</button></td>
                        <td><button onClick={()=>deleteEmp(emp.id)}>Delete</button></td>
                    </tr>)
                }
              
            </tbody>
        </table>
    </div>
  )
}

export default EmployeeList