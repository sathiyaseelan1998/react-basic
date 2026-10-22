import React, { useContext } from 'react'
import Three from './Three'
import { Emp } from './Content'


const Two = () => {

    let{user}=useContext(Emp)
   
  return (
    <div>
      <h2>TWO - {user.age}</h2>
      {/* <Three n={user.name} c={user.city}/> */}
      <Three />
    </div>
  )
}

export default Two