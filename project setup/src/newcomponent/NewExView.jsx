import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeNewUser } from '../slice/myUserSlice';

const NewExView = () => {
   let list= useSelector(state=>state.myUser)
   let dispatch=useDispatch();
   let remvomeUser=(id)=>{
    dispatch(removeNewUser(id))
   }
  return (
    <div>NewExView
        <div>
            {
                list.map(user=><div key={user.id}>
                    <h4>{user.name}</h4>
                    <p>{user.address.city}</p>
                    <button onClick={()=>remvomeUser(user.id)}>Remove</button>
                </div>)
            }
        </div>

    </div>
  )
}

export default NewExView