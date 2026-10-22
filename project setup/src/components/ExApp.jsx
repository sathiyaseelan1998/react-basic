import React, { useState } from 'react'

const ExApp = () => {
    let [course,setCourse]=useState([
        {id:1,name:"java",check:true},
        {id:2,name:"python",check:true},
        {id:3,name:"js",check:false}
    ])
    let [inp,setInp]=useState("");
    let [edit,setEdit]=useState(false)
    let handleCheck=(id)=>{
        let newVal=course.map(val=>{
            return val.id===id?{...val,check:!val.check}:val;
        })
        setCourse(newVal)
    }
    let handleDelete=(id)=>{
        let del=course.filter(val=> val.id!==id).map(
            (val,index)=>{
                return{...val,id:index+1}
            }
        )
        setCourse(del)       
    }
    let add=()=>{
        if(edit){
            let up=course.map(val=>{
                return val.id===update?{...val,name:inp}:val;
            })
            setCourse(up)
            setEdit(false)
            setUpdate(null)
            setInp("")
        }
        else{

            setCourse([...course,{id:course.length+1,name:inp,check:false}])
            setInp("")
        }
    }
    let [update,setUpdate]=useState(null)
    let handleUpdate=(id)=>{
        setEdit(true);
        setUpdate(id);
        let upd=course.find(val=>{
            return val.id===id
        })
        console.log(upd.name);
        setInp(upd.name)

    }
    console.log(course);
  return (
    <div>
       
        <ul>
            <div>
                <input type="text" value={inp}
                onChange={(e)=>{
                    setInp(e.target.value)
                }} />
                <button onClick={add}>{edit?"Edit":"Add"}</button>
            </div>
            {
                course.map(val=>{ return(
                    <li key={val.id}>
                    <input type="checkbox" 
                    checked={val.check}
                    onChange={()=>{handleCheck(val.id)}}/>
                     <label>{val.name}</label>
                     <button onClick={()=>{
                        handleUpdate(val.id)
                     }}>Edit</button>
                     <button onClick={()=>{handleDelete(val.id)}}>Delete</button>
                    </li>)
                })
            }
        </ul>
    </div>
  )
}

export default ExApp