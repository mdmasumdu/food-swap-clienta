/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firbase.config";
import useAxios from "../Components/Hooks/useAxios";

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const [user,setUser] =useState(null);
    const [loading,setLoading] =useState(true)

    const axiosSecure =useAxios();

    const googleprovider = new GoogleAuthProvider();



        // register with email and password
        const createuser =(email,password)=>{
            setLoading(true)
            return createUserWithEmailAndPassword(auth,email,password)

        }



        // update user name and photoURL
        const updateuser =(name,photoURL)=>{
            setLoading(true)
          return  updateProfile(auth.currentUser, {
                displayName: name, photoURL: photoURL
              })

        }

    //sign in with google
     const logingoogle =()=>{
        setLoading(true)
       return signInWithPopup(auth,googleprovider)
     }
   

    //  login with email and pass

    const loginempass =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)

    }
// signout

const logout =()=>{
    return  signOut(auth)
}


    //  state observer

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
         
            setUser(currentUser)
            setLoading(false)
            const   loggeduser ={email:currentUser?.email}
        if(currentUser){
            axiosSecure.post("/jwt",loggeduser,{
                withCredentials:true
            })
            .then(res=>console.log(res.data))
        }

        else{
            axiosSecure.post("/logout",loggeduser,{
                withCredentials:true
            })
            .then(res=>console.log(res.data))
        }


        })

        return ()=>{
            unsubscribe()
        }
    },[axiosSecure])
    
const authinfo ={
    logingoogle,
    createuser,
    updateuser,
    loading,
    user,
    logout,
    loginempass

}

    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;