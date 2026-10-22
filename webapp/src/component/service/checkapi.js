import axios from "axios";
import APIREQ from "./apiReq";

APIREQ.interceptors.request.use((config)=>{
    let endpoint=['auth/login','employee/register','/public'];
    let checkEndpoint=endpoint.some(end=>config.url.includes(end));
    if(!checkEndpoint){
       let token= localStorage.getItem("token");
       if(token){
        config.headers.Authorization=`Bearer ${token}`
       }
    }
    //Custom Request Header
    // if(config.requiresAuth!==false){
    //      let token= localStorage.getItem("token");
    //    if(token){
    //     config.headers.Authorization=`Bearer ${token}`
    //    }
    // }
    return config;
},
    (error)=>Promise.reject(error)
);
//public
APIREQ.post('/register',
    {name:"virat",email:"v@g"},
    {requiresAuth:false})
//public
APIREQ.post('/login',
    {"obj":""},
    {requiresAuth:false})
//private
APIREQ.get('/get')
