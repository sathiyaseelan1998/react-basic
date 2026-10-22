import axios from "axios";

const APIREQ=axios.create({
    baseURL:"http://localhost:8080",
    headers:{
        "Content-Type":"Application/json"
    }
});

//Request 
APIREQ.interceptors.request.use((config)=>{
    let token=localStorage.getItem('token');
    if(token){
        config.headers.Authorization=`Bearer ${token}`
    }
    return config;
    },
    (error)=>{
        return Promise.reject(error) //throw error to catch block
    }
)

//Response 
APIREQ.interceptors.response.use((response)=>{
        return response;
    },
    (error)=>{
        if(error.response && error.response.status===401){
            alert("Session expired");
            localStorage.removeItem('token');
            window.location.href='/login'
        }
        return Promise.reject(error)
    }
)

export default APIREQ;