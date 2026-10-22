import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeEmp } from '../slice/empSlice';

const ViewEmp = () => {
    let list=useSelector(state=>state.emp);
    let dispatch=useDispatch();
    let remove=(id)=>{
        dispatch(removeEmp(id));
    }
  return (
    <div> ViewEmp
        <hr /><hr />
        {
            list.map(emp=><div key={emp.id}>
                    <b style={{padding:"10px"}}>{emp.name}</b>
                    <i style={{padding:"10px"}}>{emp.address.city}</i>
                    <button style={{backgroundColor:"tomato",cursor:"pointer",color:"white",padding:"15px 0px",lineHeight:"3px",width:"60px"}}
                     onClick={()=>remove(emp.id)}>Remove</button>
                    <hr />
                </div>)
        }
    </div>
  )
}

export default ViewEmp