import axios from "axios";
import {  useEffect } from "react";

import { signOut } from "firebase/auth";
import auth from "../../Firebase/firbase.config";
// import { useNavigate } from "react-router-dom";


const axiosSecure =axios.create({
    baseURL:"http://localhost:5000",
})

const useAxios = () => {
   
// const navigate =useNavigate()
    
    useEffect(()=>{
        axiosSecure.interceptors.response.use(res=>{
            return res;
        },err=>{
            console.log(err.response.status)
            if(err.response.status ===401 ||err.response.status ==403){
                 signOut(auth)
                .then(()=>{

                    // navigate('/login')
                })
                .catch(()=>{})
            }
        })
    },[])
    return axiosSecure;
        
};

export default useAxios;