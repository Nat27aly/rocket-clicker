import { db } from "./firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

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
    console.log("Guardando en Firestore:", {uid, email, points, upgrades});

    await setDoc(doc(db, "users", uid), {
      email,
      points,
      upgrades,
      lastSynced: serverTimestamp()
    }, { merge: true }); 
  } catch (error) {
    console.log("Error al almacenar datos en Firestore.", error);
    throw error;
  }
};
