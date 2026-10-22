import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to='/'>Employee List</Link> <span/> 
        <Link to='/create'>Create Employee</Link>
        {/* <Link to='/update/1'>Update Employee</Link>
        <Link to='/delete'>Delete Employee</Link> */}
    </div>
  )
}

export default Navbar