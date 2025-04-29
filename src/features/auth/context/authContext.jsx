import { createContext, useContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../../lib/firebase';
import useRockStore from "../../game/stores/rock-store";

export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) {
        throw new Error("Context no accesible");
    }
    return context;
};

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const setUid = useRockStore((state) => state.setUid);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);     
            if (currentUser) {
                setUid(currentUser.uid); 
            } else {
                setUid(null);
            }       
        });
        return () => unsubscribe();
    }, [setUid]);

    const signup = async (email, password, repeatPassword) => {
        return await createUserWithEmailAndPassword(auth, email, password, repeatPassword); 
    }

    const signin = async (email, password) => {
        return await signInWithEmailAndPassword(auth, email, password);
    }

    const signGoogle = async () => {
        const provider = new GoogleAuthProvider();
        const popUpResult = await signInWithPopup(auth, provider);
        return true;
    }

    const signOutApp = async () => {
        return await signOut(auth);
    }

    const checkLogged = () => {
        return new Promise((resolve) => {
            onAuthStateChanged(auth, (user) => {
                resolve(!!user);
            });
        });
    }

    return (
        <authContext.Provider value={{ user, signup, signin, signGoogle, signOutApp, checkLogged }}>
            {children}
        </authContext.Provider>
    );
}
