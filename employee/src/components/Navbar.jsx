import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
   
  return (
    <div id='navbar'>
        <Link to='/'>Employee List</Link>
        <Link to='/create'>Create</Link>
        <Link to='/update/1'>Update</Link>
        <Link to='/delete'>Delete</Link>
    </div>
  )
}

export default Navbar