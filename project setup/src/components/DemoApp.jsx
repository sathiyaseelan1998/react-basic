import React, { useState } from 'react'
// import "./da.css";

const DemoApp = () => {
    let sNo=1;
    let [user,setUser]=useState([
        {id:1,name:"Virat",check:true},
        {id:2,name:"Rohit",check:false},
        {id:3,name:"Rahul",check:true},
        {id:4,name:"Sky",check:true},
        {id:5,name:"Ruturaj",check:false},
    ]);
    let [inp,setInp]=useState("");
    let [edit,setEdit]=useState(false);

    let updateCheck=(id)=>{
        let che=user.map(val=>{
            
            return val.id===id?{...val,check:!val.check}:val
        })
        setUser(che)
    }
    let add=()=>{
        if(edit){
            let up=user.map(val=>{
                return val.id===upVal?{...val,name:inp}:val
            })
            setUser(up)
            setEdit(false)
            setInp("")
            setUpVal(null)
        }
        else{

            setUser([...user,{id:user.length+1,name:inp,check:false}])
            setInp("")
        }
    }
    let deleteUser=(id)=>{
        let del=user.filter(val=>val.id!== id).map((val,index)=> {
            return {...val,id:index+1}
        })
        setUser(del)
    }
    let [upVal,setUpVal]=useState(null)
    let updateUser=(id)=>{
        let upd=user.find(val=>val.id===id)
        setInp(upd.name)
        setEdit(true)
        setUpVal(upd.id)
    }
  return (
    <div className='body'>
    <div className='container'>
        <div className='txt'>
            <input type="text" placeholder='Add User'
            value={inp}
            onChange={(e)=>{setInp(e.target.value)}}
             />
             <button onClick={add}>{edit?<p className='u'>Update</p>:<p className='a'>Add</p>}</button>
        </div>
        <div className='list'>
            
            <ul>
               
                {
                    user.map((val)=>{
                        return (
                            <li key={val.id}>
                    <table>
                            <tr>
                                <td>
                                    {sNo++}
                                </td>
                                <td>
                                <input type="checkbox"
                                 checked={val.check}
                                 onChange={()=>updateCheck(val.id)}/>
                                </td>

                                <td>
                                <label>{val.name}</label>
                                </td>
                                <td>

                                <button className='update' onClick={()=>{updateUser(val.id)}}>Update</button>
                                </td>
                                <td>

                                <button className='delete' onClick={()=>{deleteUser(val.id)}}>Delete</button>
                                </td>
                                </tr>
                </table>
                            </li>
                            
                        )
                        
                    })
                }
               
            </ul>
            
        </div>
        <div className='show'>
            {
                user.map(val=>{
                    return(
                    val.check && <p key={val.id}>{val.name}</p>
                    )
                   
                })
               
            }
        </div>
        </div>
    </div>
  )
}

export default DemoApp