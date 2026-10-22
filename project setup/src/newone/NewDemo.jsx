import React, { useEffect, useState } from 'react'

const NewDemo = () => {
    let[count,setCount]=useState(0)
    let[name,setName]=useState("arun")
    let [list,setList]=useState(["One","Two","Three"]);
    let handle=(e)=>{
        setName(e.target.value)
    }
    function adding(){
           setList([...list,name])
    }
    let no=0;
    console.log(list);


     let[user,setUser]=useState([]);
    let[error,setError]=useState("");
    let[load,setLoad]=useState(true);
    useEffect(()=>{
        fetch("http://localhost:8080/customer",{method:"GET"})
        .then((value)=>{
            if(!value.ok){
                throw new Error("User not found");
                
            }
            return value.json();
        }).then((val)=>{
        setUser(val);
        }).catch((error)=>{setError(error.message)})
        .finally(()=>{
            setLoad(false)
        })
    },[])
    console.log("==>",user);
    
  return (
    <div>
        {
            user.map(user=>{
                return(
                    <div key={user.id}>{user.name } <i>***</i>
                     {user.email}<i>***</i>
                       {user.city}<i>***</i>
                       {
                        user.product.map(pro=>{
                            return(
                                <div key={pro.id}>{pro.name}</div>
                            )
                        })
                       }
                     
                     </div>
                )
            })
        }
    {/* <input value={name} onChange={handle}/>
    <button onClick={adding}>Add</button><br/>
    <br/><br/>
    <button onClick={()=>setCount(count+1)}>Increase</button>
    <h3>{count}</h3>
    <button onClick={()=>setCount(count-1)}>Decrease</button>
   <ul>

   
   {
    list.map(val=>{return(<li key={no++}>{val}</li>)} )
   }

   </ul> */}
    </div>
  )
}

export default NewDemo