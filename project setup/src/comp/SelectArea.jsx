import React, { useState } from 'react'

const SelectArea = () => {
    let [state,setState]=useState("Chennai")
    let [bio,setBio]=useState("Write your bio")
    let update=(e)=>{
        setState(e.target.value);
        
    }
    function updateBio(e){
        setBio(e.target.value)
    }
  return (
    <div>
        <h2>{state} -{bio}</h2>
        <select name="state" value={state} onChange={update}>
            <option value="Trichy">Trichy</option>
            <option value="Chennai">Chennai</option>
            <option value="Madurai">Madurai</option>
        </select>
        <br />
        <textarea rows={7} cols={30} name="bio" value={bio} onChange={updateBio}>

        </textarea>
    </div>
  )
}

export default SelectArea