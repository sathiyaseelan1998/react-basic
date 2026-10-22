
import { createContext, useState } from 'react';
import './App.css'
import Demo from './components/Demo';
import HookState from './components/HookState';
import One from './components/One';
import ListRender from './components/ListRender';
import ExState from './comp/ExState';
import ExRef from './comp/ExRef';
import FocusRef from './comp/FocusRef';
import EXEffect from './comp/EXEffect';
import ExForm from './comp/ExForm';
import FormDemo from './comp/FormDemo';
import CheckRadio from './comp/CheckRadio';
import SelectArea from './comp/SelectArea';
import ExSubmit from './comp/ExSubmit';
import Condition from './comp/Condition';
import Content from './components/Content';
import ExApp from './components/ExApp';
import DemoApp from './components/DemoApp';
import {BrowserRouter,Routes,Route, Link} from 'react-router-dom'
import Home from './comproute/Home';
import Login from './comproute/Login';
import Contect from './comproute/Contect';
import ContectList from './comproute/ContectList';
import ContectDetails from './comproute/ContectDetails';
import NextObj from './components/NextObj';
import Nested from './components/Nested';
import Read from './fakeapi/Read';
import Create from './fakeapi/Create';
import Update from './fakeapi/Update';
import ExList from './exfakeapi/ExList';
import ExCreate from './exfakeapi/ExCreate';
import ExUpdate from './exfakeapi/ExUpdate';
import ExView from './exfakeapi/ExView';
import ExFruit from './exfakeapi/ExFruit';
import ViewFruit from './exfakeapi/ViewFruit';
import NewDemo from './newone/NewDemo';
import NewHome from './newone/NewHome';
import NewLogin from './newone/NewLogin';
import NewContect from './newone/NewContect';
import NewLogout from './newone/NewLogout';
import NewSignin from './newone/NewSignin';
import EmpList from './employee/EmpList';
import EmpAdd from './employee/EmpAdd';
import EmpUpdate from './employee/EmpUpdate';
import EmpLogin from './employee/EmpLogin';
import EmpView from './employee/EmpView';
import NavBar from './employee/NavBar';
import EmpPage from './employee/EmpPage';
import NewExDemo from './newcomponent/NewExDemo';
import NewExUser from './newcomponent/NewExUser';
import NewExList from './newcomponent/NewExList';
import NewExCreate from './newcomponent/NewExCreate';
import NewExUpdate from './newcomponent/NewExUpdate';
import NewExView from './newcomponent/NewExView';

// localStorage.setItem("user",JSON.stringify([]))

//   export  let ConUser=createContext();
 function App() {

//   let name="virat"
//   let id="ABC123"
//   let pp={
//     backgroundColor:"pink",
//     width:"100px",
//     padding:"10px"
//   }

//   function display(e){
//     console.log("clicked...");
//     console.log(e.target.innerText);
    
    
//   }
//     function disPass(val){
//     console.log(val);
    
//   }
// let[user,setUser]=useState({id:101,name:"Virat",age:27})
// let emp="Arun";
// let role=localStorage.getItem("role");
//console.log(role);
//let[role,setRole]=useState(localStorage.getItem("role"))
 
{/*   
      <ExState />
      <hr />
      <ExRef />
      <hr />
      <FocusRef />
      <hr />
      <EXEffect /> 
      <ExForm />
      <CheckRadio />
      <SelectArea />
      <ExSubmit />
      <FormDemo />
      <Condition />
      <Content />
      <ExApp />
      <DemoApp/>
*/}
      {/* <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to={`/login/${emp}`}>Login</Link>
        <Link to="/contect">Contect</Link>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login/:em' element={<Login/>}/>
          <Route path='/contect' element={<Contect/>}>
            <Route index element={<ContectList/>}/>
            <Route path='list' element={<ContectList/>}/>
            <Route path='details' element={<ContectDetails/>}/>
          </Route>
        </Routes>
      
      </BrowserRouter> */}

      {/* <NextObj/>
      
      <Nested />
       <Read/>
      <Create/>
       */}
      {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<Read/>} />
        <Route path='/create' element={<Create/>} />
        <Route path='/update/:id' element={<Update/>}/>
      </Routes>
      </BrowserRouter> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<ExList/>}/>
          <Route path='/create' element={<ExCreate/>}/>
          <Route path='/update/:id' element={<ExUpdate/>}/>
          <Route path='/view' element={<ExView/>}/>
          <Route path='/fruit' element={<ExFruit/>}/>
          <Route path='/viewFruit' element={<ViewFruit/>}/>
        </Routes>
      </BrowserRouter> */}
      {/* <NewDemo /> */}
      {/* <BrowserRouter>
      <NavBar role={role} setRole={setRole}/> */}
        {/* {
          role ==="admin" &&
          <div>
            <Link to='/list'>Employee List</Link> <br/>
            <Link to='/empadd'>Employee add</Link>
          </div>
        }
        {
          role==="customer" &&
          <Link to='/empview'>View Employee</Link>
        }{
          role===null &&
        <Link to='/'>Employee Login</Link>
        } */}
        {/* <Routes>
          <Route path='/list' element={<EmpList/>} />
          <Route path='/empadd' element={<EmpAdd/>}/>
          <Route path='/update/:id' element={<EmpUpdate/>}/>
          <Route path='/' element={<EmpLogin setRole={setRole}/>}/>
          <Route path='/empview' element={<EmpView/>}/>
          <Route path='/page' element={<EmpPage/>}/>
        </Routes>
      </BrowserRouter> */}

        {/* <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to={`/contect/${emp}`}>Contect</Link> */}


       {/* <Route path='/' element={<NewHome/>}/>
          <Route path='/login' element={<NewLogin/>}>
            <Route index element={<NewLogout/>}/>
            <Route path='logout' element={<NewLogout/>}/>
            <Route path='signin' element={<NewSignin/>}/>
          </Route>
          <Route path='/contect/:val' element={<NewContect/>} /> */}
       return (
    <>
          {/* <NewExDemo/>
          
        <NewExUser /> <br/><br/>
        <NewExCreate /> <br/><br/>
        <NewExList /> */}
        <BrowserRouter>
          {/* <Link to='/'>List</Link> <br/> */}
          <Link to='/create'>Create</Link><br/>
          <br/><br/>
          <Routes>
            <Route path='/' element={<NewExList/>} />
            <Route path='/create' element={<NewExCreate/>}/>
            <Route path='/update/:id' element={<NewExUpdate/>} />
            <Route path='/view' element={<NewExView/>} />
          </Routes>
        </BrowserRouter>
      </>

  )
 }

export default App
