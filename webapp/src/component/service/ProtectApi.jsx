import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import APIREQ from './apiReq';

const ProtectApi = () => {

    let token=localStorage.getItem('token');
    return  token?<Outlet/> : <Navigate to='/login' replace />
}

export default ProtectApi