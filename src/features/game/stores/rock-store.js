import {create} from "zustand";
import {saveToLocalStorage} from "../../../utils/local-storage.js";
import {saveProgressToFirestore, loadProgressFromFirestore} from "../../../lib/firestore.js";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../lib/firebase.js";

// ==== Upgrades ====
const initialUpgrades = {
  pickaxe: {
    name: "pickaxe",
    icon: "/pickaxe-click.svg",
    price: 15,
    cps: 0.1,
    quantity: 0,
    hidden: true,
    constMultiplier: 0.1,
  },
  miner: {
    name: "miner",
    icon: "miner.svg",
    price: 100,
    cps: 1,
    quantity: 0,
    hidden: true,
    constMultiplier: 0.2,
  },
  excavator: {
    name: "excavator",
    icon: "excavator.svg",
    price: 1100,
    cps: 8,
    quantity: 0,
    hidden: true,
    constMultiplier: 0.3,
  },
  truck: {
    name: "truck",
    icon: "truck.svg",
    price: 12000,
    cps: 47,
    quantity: 0,
    hidden: true,
    constMultiplier: 0.4,
  },
  hydraulicHammer: {
    name: "hydraulic hammer",
    icon: "hydraulic-hammer.svg",
    price: 130000,
    cps: 260,
    quantity: 0,
    hidden: true,
    constMultiplier: 0.5,
  },
  factory: {
    name: "factory",
    icon: "factory.svg",
    price: 1400000,
    cps: 1400,
    quantity: 0,
    hidden: true,
    constMultiplier: 0.6,
  },
  dynamite: {
    name: "dynamite",
    icon: "dynamite.svg",
    price: 20000000,
    cps: 7800,
    quantity: 0,
    hidden: true,
    constMultiplier: 0.75,
  },
  shovelExcavator: {
    name: "shovel excavator",
    icon: "shovel-excavator.svg",
    price: 330000000,
    cps: 44000,
    quantity: 0,
    hidden: true,
    constMultiplier: 0.9,
  },
};

const initialPoints = 0;
const loadedUpgrades = initialUpgrades;

const useRockStore = create((set, get) => ({
  uid: null,
  setUid: (uid) => set({ uid }),
  points: initialPoints,
  upgrades: loadedUpgrades,
  incrementPoints: () =>
    set((state) => {
      const { uid, points } = state;
      const newPoints = points + 1;
      const newState = {
        ...state,
        points: newPoints,
      };
      saveToLocalStorage(uid, newState);
      return { points: newPoints };
    }),

  addPoints: (amount) => set((state) => {
  const newPoints = parseFloat((state.points + amount).toFixed(1)); // Redondea a 1 decimal
  
  // Guardar en localStorage y Firestore
  saveToLocalStorage(state.uid, { points: newPoints, upgrades: state.upgrades });
  return { points: newPoints };
}),



  getTotalCPS: () => {
    const state = get();
    const upgrades = Object.values(state.upgrades);

    const totalCPS = upgrades.reduce((acc, item) => {
      return (acc += item.cps * item.quantity);
    }, 0);

    return totalCPS;
  },
  buyUpgrade: (upgradeKey) => {
    const uid = get().uid;
    const state = get();
    const upgrade = state.upgrades[upgradeKey];
    const price = upgrade.price;
    const currentPoints = state.points;
    const currentQuantity = upgrade.quantity;

    if (currentPoints >= price) {
      const updatedPoints = currentPoints - price;
      const updatedQuantity = currentQuantity + 1;
      const diff = Math.ceil(price * upgrade.constMultiplier);
      const updatedPrice = price + diff;

      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
      // Spread operator - copia el objeto y lo pega, permitiendo sobreescribir las propiedades
      const newUpgrades = {
        ...state.upgrades,
        [upgradeKey]: {
          ...upgrade,
          price: updatedPrice,
          quantity: updatedQuantity,
        },
      };

      const newState = {
        ...state,
        points: updatedPoints,
        upgrades: newUpgrades,
      };
      saveToLocalStorage(uid, newState);
      set(newState);
    }
  },
  unlockUpgrade: (upgradeKey) => {
    const uid = get().uid;
    const state = get();
    const upgrade = state.upgrades[upgradeKey];
    const price = upgrade.price;
    const currentPoints = state.points;

    if (currentPoints >= price) {
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
      // Spread operator - copia el objeto y lo pega, permitiendo sobreescribir las propiedades
      const newUpgrades = {
        ...state.upgrades,
        [upgradeKey]: {
          ...upgrade,
          hidden: false,
        },
      };

      const newState = {
        ...state,
        upgrades: newUpgrades,
      };
      saveToLocalStorage(uid, newState);
      set(newState);
    }
  },

  // Sincronizar datos con Firestore
  syncToServer: async (uid, email) => {
    const { points, upgrades } = get();

    try {
      // Verificar si el documento del usuario existe en Firestore
    const userDocRef = doc(db, "users", uid);
    const userDocSnap = await getDoc(userDocRef);

    // Si el documento no existe, no procedemos con la sincronización
    if (!userDocSnap.exists()) {
      return;
    }

      await saveProgressToFirestore(uid, email, points, upgrades);
      saveToLocalStorage(uid, { points, upgrades });
      
    } catch (error) {
      console.error("No se pudo sincronizar datos en Firestore", error);
    }
  },

  // Carga el progreso del usuario desde Firestore.
  loadFromServer: async (uid) => {
    try {
      const data = await loadProgressFromFirestore(uid);
      if (data) {
        set({
          points: data.points,
          upgrades: {
            ...initialUpgrades,
            ...data.upgrades,
          },
        });

        saveToLocalStorage(uid, {
          points: data.points,
          upgrades: data.upgrades,
        });
        
      } else {
        console.log(
          "No hay datos previos en Firestore. Se mantiene el estado por defecto."
        );
      }
    } catch (error) {
      console.error("Error al cargar datos del servidor:", error);
    }
  },



}));

export default useRockStore;
