import { useEffect, useState } from "react";

function useFatch(url){
   let[user,setUser]= useState([]);
   let[error,setError]= useState("");
   let[load,setLoad]= useState(true);

   useEffect(()=>{
    let factchApi=async()=>{
        try {
            let response=await fetch(url);
            if(!response.ok){
                throw new Error("User not found");
                
            }
            let data=await response.json();
            setUser(data);
            
        } catch (error) {
            setError(error.message);
        }
        finally{
            setLoad(false);
        }
    }
    factchApi();
   },[])
   return {user,error,load}
}
export default useFatch;