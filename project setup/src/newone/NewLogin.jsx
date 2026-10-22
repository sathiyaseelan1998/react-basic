import React from 'react'
import { Outlet,Link } from 'react-router-dom'

const NewLogin = () => {
  return (
    <div>NewLogin

        <Link to="logout">Logout</Link>
        <Link to="signin">SignIn</Link>
        <Outlet/>
    </div>
  )
}

export default NewLogin