import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { removeUser } from '../slice/userSlice';

const ExView = () => {
  let userList=useSelector(state=> state.user)
  console.log(userList);
  let dispatch=useDispatch();
  let deleteUser=(id)=>{
      dispatch(removeUser(id))
  }

  
  return (
    <div>
      {
        userList.map(val=>{

          return(
            <div key={val.id}>
                <h3>{val.name}</h3>
                <p>{val.address.city}</p>
                <button onClick={()=>deleteUser(val.id)}>Remove</button>
                <hr />
            </div>
          )
        })
      }
    </div>
  )
}

export default ExView