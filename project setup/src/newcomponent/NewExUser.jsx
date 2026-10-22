import axios from 'axios';
import React, { useEffect, useState } from 'react'

const NewExUser = () => {
    let [user,setUser] = useState([]);
    let[error,setError]=useState("");
    let[load,setLoad]=useState(true);
    let[u,setU]=useState({
    
      "name": "YY",
      "email": "yy@gmail.com",
      "address": {
        "place": "yy road",
        "city": "salem"
      }
    });
    useEffect(()=>{
        // fetch("http://localhost:4000/user",{method:"GET"})
        // .then(val=>val.json())
        // .then(val=>setUser(val));
        let demo=async()=>{
            let res=await axios.get("http://localhost:4000/user");
                setUser(res.data)
        }
        demo();
     
       
    },[])
    let add=async()=>{
        // fetch("http://localhost:4000/user",
        //     {
        //         method:"POST",
        //         headers:{
        //             "Content-Type":"application/json"
        //         },
        //         body:JSON.stringify(u)
        //     }
        // ).then(val=>{
        //     if (val.ok) {
        //         alert("Done")
        //     }
        // })
       // let res=await axios.post("http://localhost:4000/user",u);
       // "45a0"
       let id="eed0";
       //let res= await axios.put(`http://localhost:4000/user/${id}`,u);
       try{

           let res= await axios.delete(`http://localhost:4000/user/${id}`);
            console.log(res);
       }
       catch(err){
        console.log(err.message);
        
       }
       finally{
        console.log("Execute");
        
       }
        
    }
    let update=()=>{
        let id="45a000"
        axios.put(`http://localhost:4000/user/${id}`,u)
        .then(res=>{
            console.log(res);
        })
        .catch(err=>{
            console.log("Error",err.message);
            
        })
        .finally(()=>{
            console.log("Execute");
            
        })
    }
  return (
    <div>NewExUser-{user.length}
    <button onClick={add}>Add</button>
    <button onClick={update}>Update</button>
    </div>
  )
}

export default NewExUser