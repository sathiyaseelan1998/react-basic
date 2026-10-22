import React from 'react'
import { Outlet,Link } from 'react-router-dom'

const Contect = () => {
  return (
    <div>
        Contect
        <Link to="list">List</Link>
        <Link to="details">Details</Link>
        <Outlet/>
    </div>
  )
}

export default Contect