import React, { createContext, useState } from 'react'
import One from './One'
import Four from './Four'

export let Emp=createContext()
const Content = () => {
    let[user,setUser]=useState({
        name:"Virat",
        age:37,
        city:"Trichy"
    })
  return (
    <Emp.Provider value={{user}}>

        <div>
            {/* <One user={user}/> */}
            <One />
            <Four name="Ram" age={20}/>
        </div>
    </Emp.Provider>
  )
}

export default Content