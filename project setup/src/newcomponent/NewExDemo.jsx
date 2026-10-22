import React, { useState } from 'react'

const NewExDemo = () => {
    let[data,setData]=useState("");
    let[isEdit,setIsEdit]=useState(false);
    let[currentId,setCurrentId]=useState(null);
    let[list,setList]=useState([
        {id:1,label:"Html",checked:true},
        {id:2,label:"CSS",checked:true},
        {id:3,label:"Js",checked:false}
    ]);
    let saveOrUpdate=()=>{
        if(isEdit){
         let up= list.map(val=>val.id===currentId?
            {...val,label:data}:val
          )
          setList(up);
          setIsEdit(false);
          setData("");
        }
        else{

            let addData=[...list,
                {
                    id:list.length+1,
                    label:data
                    ,checked:false
                }]
        
            setList(addData);
        }
    }
    let checkChange=(id)=>{
       let checkbox= list.map(val=>val.id ===id ?
             {...val,checked:!val.checked}:val);
        setList(checkbox);
    }
    let updateData=(id)=>{
        setIsEdit(true);
       let upData= list.find(val=>val.id===id);
       setData(upData.label);
       setCurrentId(id);
    }
    let deleteData=(id)=>{
        let del=list.filter(val=>val.id!==id)
        setList(del)
    }
  return (
    <div>NewExDemo<br/>
        <input type="text"  
        value={data}
        onChange={(e)=>setData(e.target.value)}/>
        <button type="submit" 
            onClick={saveOrUpdate}>
                {isEdit?"Update":"Save"}
                </button>
        <ul>
            {
                list.map((val)=>{
                    return <li key={val.id}>
                        <input type='checkbox' 
                        checked={val.checked}
                        onChange={()=>checkChange(val.id)}
                        />
                        {val.label}
                        <button onClick={()=>updateData(val.id)}>Update</button>
                        <button onClick={()=>deleteData(val.id)}>Delete</button>
                        </li>
                })
            }

        </ul>
    </div>

  )
}

export default NewExDemo