import React, { useState } from 'react'

const ExSubmit = () => {
    let [user,setUser]=useState("");
     let data=(e)=>{
        e.preventDefault();
        console.log('submit');
        
    }
    function update(e){
      setUser(e.target.value);
    }
  return (
    <div>
      <h3>{user}</h3>
        <form onSubmit={data}>
            <input type="text" onChange={update} value={user} />
            <button>click</button>
        </form>
    </div>
  )
}

export default ExSubmit