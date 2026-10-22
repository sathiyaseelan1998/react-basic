import { useEffect, useState } from "react";
import axios from "axios";

function useAxios(url){

    let[user,setUser]=useState([]);
    let[error,setError]=useState("");
    let[load,setLoad]=useState(true);

    useEffect(()=>{
        let axiosApi=async()=>{
            try {
                let response=await axios.get(url);
                setUser(response.data);
                
            } catch (error) {
                setError(error.message)
            }
            finally{
                setLoad(false)
            }
        }
        axiosApi();
    },[])
    return{user,error,load,setUser};
}
export default useAxios;