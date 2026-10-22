import React, { useEffect, useState } from 'react'

const EmpPage = () => {
    let[emp,setEmp]=useState([]);
    let[page,setPage]=useState(0);
    let[totalPage,setTotalPage]=useState(0);
    let [pageSize]=useState(2);
    
    useEffect(()=>{
        fetch(`http://localhost:8080/page?page=${page}&size=${pageSize}`,{
            method:"GET"
        }).then(val=>{
            if(!val.ok){
                throw new Error("Employee not found");
                
            }
            return val.json();
        }).then(val=>{
            setEmp(val.content)
            setTotalPage(val.totalPages)
        })
        .catch((err)=>console.log(err.message));
    },[page]);
  return (
    <div>EmpPage-{totalPage}
        <ul>

        {
            emp.map(val=>(
                <li key={val.id}>{val.id} <span> </span>
                 {val.name}</li> 
            ))
        }
        </ul>
        <div>
            <button disabled={page===0}
             onClick={()=>(setPage(page-1))}>Prev</button>

        <span>page{page+1}</span>

        <button disabled={page+1===totalPage}
            onClick={()=>setPage(page+1)}>Next</button>
        </div>

    </div>
  )
}

export default EmpPage