import axios from "axios";
import { useEffect, useState } from "react";

function getApi(url){
    let[user,setUser]=useState([]);
    let[error,setError]=useState("");
    let[load,setLoad]=useState(true);

    useEffect(()=>{
        let callApi=async()=>{
        try {
            let response=await axios.get("http://localhost:4000/user");
            setUser(response.data);
        } catch (error) {
            setError(error.message);
        }
        finally{
            setLoad(false);
        }     
        }
        callApi();
    },[])
    return {user,error,load,setUser}
}
export default getApi;