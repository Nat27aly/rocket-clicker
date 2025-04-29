import { db } from "./firebase";
import { doc, setDoc, getDoc, serverTimestamp, Timestamp } from "firebase/firestore";

/**
 * Guarda el progreso del usuario en Firestore.
 * 
 * @param {String} uid 
 * @param {String} email 
 * @param {Number} points 
 * @param {Object} upgrades 
 */

export const saveProgressToFirestore = async (uid, email, points, upgrades) => {
  try {
   // console.log("Guardando en Firestore:", { uid, email, points, upgrades });

    const userRef = doc(db, "users", uid);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      await setDoc(userRef, {
        email,
        points,
        upgrades,
        lastSynced: serverTimestamp()
      }, { merge: true });
    } else {
      await setDoc(userRef, {
        email,
        points,
        upgrades,
        created: serverTimestamp(),
        lastSynced: serverTimestamp()
      });
    }
  } catch (error) {
    console.log("Error al almacenar datos en Firestore.", error);
    throw error;
  }
};

/**
 * Carga el progreso del usuario desde Firestore.
 * 
 * @param {String} uid 
 * @returns {{ points: Number, upgrades: Object } | null}
 */
export const loadProgressFromFirestore = async (uid) => {
  try {
    const userRef = doc(db, "users", uid);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      const data = userSnap.data();
      //console.log("Datos cargados de Firestore:", data);
      return {
        points: data.points || 0,
        upgrades: data.upgrades || {}
      };
    } else {
      //console.log("No hay datos previos para este usuario.");
      return null;
    }
  } catch (error) {
    console.error("Error al cargar datos de Firestore:", error);
    return null;
  }
};
