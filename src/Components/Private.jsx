/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "./Hooks/useAuth";


const Private = ({children}) => {

 const {loading,user} =useAuth()
 const location  = useLocation()


 if(loading){
    return <div className="flex justify-center min-h-screen mt-2"><progress className="progress w-full"></progress></div>
 }

 if(user?.email){
    return children;
 }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default Private;