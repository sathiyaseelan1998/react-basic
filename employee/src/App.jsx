import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route, Link} from 'react-router-dom'

import CreateEmp from './components/CreateEmp'
import ListEmp from './components/ListEmp'
import UpdateEmp from './components/UpdateEmp'
import Navbar from './components/Navbar'
import ViewEmp from './components/ViewEmp'
import Login from './components/Login'
    //localStorage.setItem("emp",JSON.stringify([]));
function App() {

  return (
    <>
    <div className="app-container">

      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ListEmp/>} />
          <Route path='/create' element={<CreateEmp/>}/>
          <Route path='/update/:id' element={<UpdateEmp/>}/>
          <Route path='/view' element={<ViewEmp/>} />
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
         
    </>
  )
}

export default App
