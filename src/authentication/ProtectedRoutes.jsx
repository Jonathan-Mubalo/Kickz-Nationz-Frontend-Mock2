import React from 'react';
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
    
const access = JSON.parse(sessionStorage.getItem("login"))

if(access != null && access.isLoggedIn){
    return children;

}
else{
    return < Navigate to="/Login" />
}

}
 
export default ProtectedRoutes;