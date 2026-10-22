import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmployeeList from './component/EmployeeList'
import EmployeeCreate from './component/EmployeeCreate'
import Navbar from './component/Navbar'
import EmployeeUpdate from './component/EmployeeUpdate'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<EmployeeList/>} />
            <Route path='/create' element={<EmployeeCreate/>}/>
            <Route path='/update/:id' element={<EmployeeUpdate/>}/>
            <Route path='/delete'/>
        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
