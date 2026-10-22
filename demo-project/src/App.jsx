import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Read from './component/Read'
import Create from './component/Create'
import Update from './component/Update'
import AddEmp from './component/AddEmp'
import ExReduce from './comp/ExReduce'
import ReducerEx from './comp/ReducerEx'
import ExMemo from './comp/ExMemo'
import MemoEx from './comp/MemoEx'
import ExCallback from './comp/ExCallback'
import UseStateEx from './hooks/UseStateEx'
import UseEffectEx from './hooks/UseEffectEx'
import UseRefEx from './hooks/UseRefEx'
import UseReducerEx from './hooks/UseReducerEx'
import UseMemoEx from './hooks/UseMemoEx'
import UseCallbackEx from './hooks/UseCallbackEx'

if(!localStorage.getItem("emp")){
    localStorage.setItem("emp",[]);
}

const App = () => {
  return (
    // <BrowserRouter>
    
    //   <Routes>
    //     <Route path='/' element={<Read/>}/>
    //     <Route path='/create' element={<Create/>}/>
    //     <Route path='/updateEmp/:id' element={<Update/>}/>
    //     <Route path='/view' element={<AddEmp/>}/>
    //   </Routes>
    // </BrowserRouter>
    <>
      {/* <ExReduce/> */}
      {/* <ReducerEx/> */}
      {/* <ExMemo/> */}
      {/* <MemoEx/> */}
      {/* <ExCallback/> */}
      {/* <UseStateEx/> */}
      {/* <UseEffectEx/> */}
      {/* <UseRefEx/> */}
      {/* <UseReducerEx/> */}
      {/* <UseMemoEx/> */}
      <UseCallbackEx/>
    </>
  )
}

export default App