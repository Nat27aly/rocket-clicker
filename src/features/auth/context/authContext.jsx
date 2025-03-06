// src/features/auth/context/authContext.js
import { createContext, useContext} from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../../lib/firebase';




export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) {
        throw new Error("Context no accesible");
    }
    return context;
};

export function AuthProvider ({children}) {
    // Registro: Se guardan los datos del usuario en firebase. Ver en (firebase/authentication/users)
    const signup = async (email, password, repeatPassword)=>{
        try {
            return await createUserWithEmailAndPassword(auth, email, password, repeatPassword); 
        } catch (error){
            console.log("Error en signup:", error);
            throw error;
        }
    }

    const signin = async (email, password) => {
        try {
            const userCredentials = await signInWithEmailAndPassword(auth, email, password);
            console.log(userCredentials);
           return await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.log("Error al logear usuario: ", error);
            throw error;
        }
    }
    return <authContext.Provider value={{signup, signin}}>{children}</authContext.Provider>
}