import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "...",
    authDomain: "...",
    projectId: "...",
    storageBucket: "...",
    messagingSenderId: "...",
    appId: "..."
};

// Inicializa la app de Firebase
const app = initializeApp(firebaseConfig);

// Exporta los servicios que se necesitan en la aplicación
export const auth = getAuth(app);
export const db = getFirestore(app);