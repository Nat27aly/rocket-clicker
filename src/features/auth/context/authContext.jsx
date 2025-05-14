import { createContext, useContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, deleteUser, EmailAuthProvider, reauthenticateWithCredential, reauthenticateWithPopup} from 'firebase/auth';
import { auth, db } from '../../../lib/firebase';
import useRockStore from "../../game/stores/rock-store";
import { doc, deleteDoc, getDoc } from "firebase/firestore";
import { clearProgressFromLocal } from "../../../utils/local-storage";
import { loadProgressFromFirestore, saveProgressToFirestore } from "../../../lib/firestore";

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
    const syncToServer = useRockStore.getState().syncToServer;

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
            

        try {

            const popUpResult = await signInWithPopup(auth, provider);

            const user = popUpResult.user;

            

            const loadProgressGoogle = await loadProgressFromFirestore(user.uid);

            

            if(!loadProgressGoogle){

                await saveProgressToFirestore(user.uid, user.email, 0, []);

            }

            return true;

            

        } catch (error) {

            console.error("Error durante conexión con Google:", error);

            return false;

        }
    }

        
    
   const signOutApp = async () => {
    if (user) {
        const { uid, email } = user;

        try{
            await syncToServer(uid, email);
            await signOut(auth);
            console.log("Cerrando sesión, guardando progreso en LocalStorage y Firestore.");

            setUser(null);
            setUid(null);
        } catch(error) {
            console.log("Error al cerra la sesión.", error);   
        }
    } else {
        console.log("Usuario no autenticado. No hay datos que guardar.");
    }
};

    const checkLogged = () => {
        return new Promise((resolve) => {
            onAuthStateChanged(auth, (user) => {
                resolve(!!user);
            });
        });
    }

    // Eliminar cuenta de Firebase/Firestore y localstorage
    const deleteAccount = async (email, password) => {
        if (!user) {
            throw new Error("No hay usuario autenticado.");
        }
    
        try {
            const providerId = user.providerData[0]?.providerId;
    
            if (providerId === "google.com") {
                const provider = new GoogleAuthProvider();
                await reauthenticateWithPopup(user, provider);
            } else if (providerId) {
                const credential = EmailAuthProvider.credential(email, password);
                await reauthenticateWithCredential(user, credential);
            } else {
                throw new Error("Proveedor desconocido.");
            }
    
            await deleteDoc(doc(db, "users", user.uid));
            console.log("Eliminando documento de Firestore para usuario:", user.uid);
    
            await deleteUser(user);
            console.log("Usuario de Firebase Auth eliminado:", user.uid);
    
            clearProgressFromLocal(user.uid);
            console.log("Datos eliminados de LocalStorage:", localStorage.getItem(user.uid));

            await signOut(auth);
            console.log("Sesión cerrada.");

            setUser(null);
            setUid(null);
    
            window.location.reload();
        } catch (error) {
            console.error("No se pudo eliminar la cuenta:", error);
            throw error;
        }
    };
    

    return (
        <authContext.Provider value={{ user, signup, signin, signGoogle, signOutApp, checkLogged, deleteAccount }}>
            {children}
        </authContext.Provider>
    );
}
