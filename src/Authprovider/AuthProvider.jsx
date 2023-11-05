/* eslint-disable react/prop-types */
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createContext } from "react";
import auth from "../Firebase/firbase.config";

export const AuthContext = createContext();
const AuthProvider = ({children}) => {

    const googleprovider = new GoogleAuthProvider();





    //sign in with google
     const logingoogle =()=>{
       return signInWithPopup(auth,googleprovider)
     }
    
const authinfo ={
    logingoogle

}

    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;