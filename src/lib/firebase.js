import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {ENV} from "../config/env.js";


const firebaseConfig = {
    apiKey: ENV.FIREBASE.API_KEY,
    authDomain: ENV.FIREBASE.AUTH_DOMAIN,
    projectId: ENV.FIREBASE.PROJECT_ID,
    storageBucket: ENV.FIREBASE.STORAGE_BUCKET,
    messagingSenderId: ENV.FIREBASE.MESSAGING_SENDER_ID,
    appId: ENV.FIREBASE.APP_ID
};



// Inicializa la app de Firebase
const app = initializeApp(firebaseConfig);

// Exporta los servicios que se necesitan en la aplicación
export const auth = getAuth(app);
export const db = getFirestore(app);