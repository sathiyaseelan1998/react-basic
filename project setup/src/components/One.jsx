import React, { useContext } from 'react'
import Two from './Two'
import { Emp } from './Content'


const One = () => {

  let{user}=useContext(Emp)
   
  return (
    <div>
      <h2>ONE - {user.name}</h2>
       {/* <Two user={user}/> */}
       <Two />
    </div>
  )
}

export default One

