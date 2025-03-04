import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

//TODO: Para controlar en la próxima entrego las bases de datos: import { getFirestore } from "firebase/firestore";

// Objeto de configuración de Firebase (no sé si está bien que aparezca esta info aquí, pues es la info de la cuenta y del proyecto de Firebase. 
// TODO: A lo mejor podemos importarlo a partir de otro archivo, como un .ini o algo así)


const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  };

// Inicializar la aplicación de Firebase con la configuración
const app = initializeApp(firebaseConfig);

//Todas las funciones son asíncronas y se exportan, para poder ser importadas y utilizadas en el App.jsx. En todas se controla si Firebase nos da la info que se quiere (ver si se ha registrado bien, ...) o el error correspondiente
export async function register(myEmail, myPassword) {
    const auth = getAuth(app);
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, myEmail, myPassword);
        const user = userCredential.user; 
        return true; //Se registra el usuario y se obtirne toda la info del usuario en user.

    } catch (error) {
        console.log(`Error: ${error.code} - ${error.message}`);
        return false; 
        //Un error común es que ya exista el usuario en el registro.
        //TODO: Controlar los errores comunes para que no salgan en la consola y aparezca un mensaje en la pantalla
    }
}


export async function login(myEmail2, myPassword2) {
    const auth = getAuth();
    try {
        const userCredential = await signInWithEmailAndPassword(auth, myEmail2, myPassword2);
        const user = userCredential.user;
        return true; // ✅ Devuelve true si el login es exitoso
    } catch (error) {
        console.log(`Error: ${error.code} - ${error.message}`);
        return false; // Devuelve false si hay un error en el correo o en la contraseña, por lo que no existe un error específico para un correo mal introducido, sino que es el mismo para el correo y la contraseña
    }
}

export function checkLogged() {
    const auth = getAuth();
    return new Promise((resolve) => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(`El ID del usuario es: ${user.uid}`);
                resolve(true);  // True si el usuario ya tiene la sesión iniciada
            } else {
                console.log("La sesión ya está cerrada");
                resolve(false); 
            }
        });
    });
}

export async function logOut() {
    const auth = getAuth();
    try {
        await signOut(auth);
        console.log("Se ha cerrado sesión");
        return true; // ✅ Retornamos true si se cerró sesión correctamente
    } catch (error) {
        console.log("Error al cerrar sesión:", error);
        return false;
    }
}