import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeEmployee } from '../slice/EmpSlice';

const AddEmp = () => {
    let list=useSelector(state=>state.emp);
    let dispatch=useDispatch();
    console.log(list);

    let deleteEmp=(id)=>{
        dispatch(removeEmployee(id));
    }
    
  return (
    <div>
         {
          list.map(emp=>(
            <div key={emp.id}>
              <h4>{emp.name}</h4>
              <p>{emp.contect.mobile}</p>
              <p>{emp.contect.city}</p>
              <button onClick={()=>{deleteEmp(emp.id)}}>Delete</button>
              <hr />
            </div>
          ))
        }
    </div>
  )
}

export default AddEmp