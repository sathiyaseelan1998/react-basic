import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeEmp,addEmp } from '../slice/empSlice';
const ListEmp = () => {
  let [emps,setEmps]=useState([]);
  let [load,setLoad]=useState(true);
  let [error,setError]=useState("");
  let list=useSelector(state=>state.emp)
  let dispatch=useDispatch()
  let navi=useNavigate()
  useEffect(()=>{
      let getEmp=async()=>{
        try {
          let response=await axios.get("http://localhost:4000/employee");
          setEmps(response.data);
        } catch (error) {
          setError(error.message)
        }
        finally{
          setLoad(false)
        }

      }
      getEmp();
  },[]);
  let addWeb=(emp)=>{
    console.log(emp);
    let e=list.find(ee=>ee.id===emp.id);
    if(e){
      alert("Already Exists")
    }else{

      dispatch(addEmp(emp))
    }
  }
  let deleteEmp=async(id)=>{
    try {
      window.confirm("Are You Delete")
      let response=await axios.delete(`http://localhost:4000/employee/${id}`)
     let e= emps.filter(emp=>emp.id!==id);
      setEmps(e)
      alert("Deleted successfully")
    } catch (error) {
      setError(error.message)
    }
    finally{
      setLoad(false)
    }
  }
  if(load){
    return <p>Loading...</p>
  }
  return (
    <div id="table-emp">
      <button onClick={()=>navi('/view')}
         style={{backgroundColor:"orange",color:"white",padding:"15px 0px",lineHeight:"3px",width:"60px"}}
        >View-{list.length}</button>
      <h3>Employee List</h3>
      <table>
        <thead>
          <tr>

            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>City</th>
            <th>Pincode</th>
            <th>Add</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            emps.length>0 &&
            emps.map(emp=><tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.password}</td>
              <td>{emp.address.city}</td>
              <td>{emp.address.pincode}</td>
              <td><button onClick={()=>addWeb(emp)}
                style={{backgroundColor:"blue",cursor:"pointer",color:"white",padding:"15px 0px",lineHeight:"3px",width:"60px"}}
                >Add</button></td>
              <td><button onClick={()=>{navi(`update/${emp.id}`)}}
                 style={{backgroundColor:"green",cursor:"pointer",color:"white",padding:"15px 0px",lineHeight:"3px",width:"60px"}}
                >Update</button></td>
              <td><button onClick={()=>deleteEmp(emp.id)}
                 style={{backgroundColor:"tomato",cursor:"pointer",color:"white",padding:"15px 0px",lineHeight:"3px",width:"60px"}}
                >Delete</button></td>
            </tr>)
          }
        </tbody>


      </table>
    </div>
  )
}

export default ListEmp