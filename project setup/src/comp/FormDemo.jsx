import React, { useState } from 'react'
import '../index.css'

const FormDemo = () => {
    let[user,setUser]=useState({
        name:"Virat",
        age:28,
        gender:"Male",
        isMarried:true,
        city:"Chennai",
        bio:"Write about you"
    })
    let upadateData=(e)=>{
            let name=e.target.name;
            let value=e.target.type=='checkbox'?e.target.checked:e.target.value;
            setUser({...user,[name]:value})
    }
  return (
    <div className='container'>
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>{user.name}</td>
                    </tr>
                    <tr>
                        <td>Age</td>
                        <td>{user.age}</td>
                    </tr>
                    <tr>
                        <td>Gender</td>
                        <td>{user.gender}</td>
                    </tr>
                    <tr>
                        <td>IsMarried</td>
                        <td>{user.isMarried?"Married":"Not Married"}</td>
                    </tr>
                    <tr>
                        <td>City</td>
                        <td>{user.city}</td>
                    </tr>
                    <tr>
                        <td>Bio</td>
                        <td>{user.bio}</td>
                    </tr>
                </tbody>
            </table>
        </div>

       <div className='input'>
            <input type="text" name='name'
            value={user.name}
            onChange={upadateData}/>
            <input type="text" name='age'
            value={user.age}
            onChange={upadateData} />

        </div>
            
        <div className='radio'>
            <div>
            <input type="radio" name="gender" id="m"
            value="Male" onChange={upadateData}
            checked={user.gender==="Male"} />
            <label htmlFor="m">Male</label>
            </div>
            <div>
            <input type="radio" name="gender" id="f" 
            value="Female" onChange={upadateData}
            checked={user.gender==="Female"}/>
            <label htmlFor="f">Female</label>
            </div>
       </div>
       <div className='check'>
            <input type="checkbox" name="isMarried" id="c"
            onChange={upadateData}
            checked={user.isMarried} />
            <label htmlFor="c">IsMarried</label>
       </div>
       <div className='city'>
            <select name="city" value={user.city} onChange={upadateData}>
                <option value="Trichy">Trichy</option>
                <option value="Chennai">Chennai</option>
                <option value="Madurai">Madurai</option>
            </select>
       </div>
       <div className='area'>
            <textarea name="bio" cols="30" rows="5"
            value={user.bio} onChange={upadateData}></textarea>
       </div>

    </div>
  )
}

export default FormDemo