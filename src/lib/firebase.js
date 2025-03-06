import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

/*
const firebaseConfig = {
    apiKey: "...",
    authDomain: "...",
    projectId: "...",
    storageBucket: "...",
    messagingSenderId: "...",
    appId: "..."
};*/

const firebaseConfig = {
    apiKey: "AIzaSyDj2tyTXd5izQywW5qiSQVSv0q0W2Gw9Uk",
    authDomain: "rockclicker-linkia.firebaseapp.com",
    projectId: "rockclicker-linkia",
    storageBucket: "rockclicker-linkia.firebasestorage.app",
    messagingSenderId: "709765897570",
    appId: "1:709765897570:web:c37c1646fec5ac4251603b",
    measurementId: "G-GG6KW208Y2"
  };

// Inicializa la app de Firebase
const app = initializeApp(firebaseConfig);

// Exporta los servicios que se necesitan en la aplicación
export const auth = getAuth(app);
export const db = getFirestore(app);