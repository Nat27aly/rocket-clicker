import {create} from "zustand";
//import {loadFromLocalStorage, //saveToLocalStorage} from "../../../utils/local-storage.js";
import {saveProgressToFirestore} from "../../../lib/firestore.js";
import { loadProgressFromFirestore } from "../../../lib/firestore.js";

//const LOCAL_STORAGE_KEY = 'rock-clicker-save-1';

// ==== Upgrades ====
const initialUpgrades = {
    pickaxe: {
        name: 'pickaxe',
        icon: '/pickaxe-click.svg',
        price: 15,
        cps: 0.1,
        quantity: 0,
        hidden: true,
        constMultiplier: 0.2
    },
    miner: {
        name: 'miner',
        icon: 'miner.svg',
        price: 150,
        cps: 1,
        quantity: 0,
        hidden: true,
        constMultiplier: .5
    },
    excavator: {
        name: 'excavator',
        icon: 'excavator.svg',
        price: 430,
        cps: 20,
        quantity: 0,
        hidden: true,
        constMultiplier: .75
    }    
}

const initialPoints = 0;
const loadedUpgrades = initialUpgrades;

//const localData = loadFromLocalStorage(LOCAL_STORAGE_KEY);
//const initialPoints = localData?.points ?? 0
//const loadedUpgrades = localData?.upgrades ?? initialUpgrades



const useRockStore = create((set, get) => ({
    points: initialPoints,
    upgrades: loadedUpgrades,
    incrementPoints: () => set((state) => {
        const newPoints = state.points + 1;
        const newState = {
            ...state,
            points: newPoints
        }

        //saveToLocalStorage(LOCAL_STORAGE_KEY, newState)
        return {points: newPoints}
    }),
    addPoints: (amount) => set((state) => ({points: state.points + amount})),
    getTotalCPS: () => {
        const state = get();
        const upgrades = Object.values(state.upgrades);

        const totalCPS = upgrades.reduce((acc, item) => {
            return acc += item.cps * item.quantity;
        }, 0)

        return totalCPS;
    },
    buyUpgrade: (upgradeKey) => {
        const state = get();
        const upgrade = state.upgrades[upgradeKey]
        const price = upgrade.price
        const currentPoints = state.points
        const currentQuantity = upgrade.quantity

        if (currentPoints >= price) {
            const updatedPoints = currentPoints - price
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

                }
            }

            const newState = {
                ...state,
                points: updatedPoints,
                upgrades: newUpgrades,
            }
            //saveToLocalStorage(LOCAL_STORAGE_KEY, newState)
            set(newState)
        }


    },
    unlockUpgrade: (upgradeKey) => {
        const state = get();
        const upgrade = state.upgrades[upgradeKey]
        const price = upgrade.price
        const currentPoints = state.points


        if (currentPoints >= price) {

            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
            // Spread operator - copia el objeto y lo pega, permitiendo sobreescribir las propiedades
            const newUpgrades = {
                ...state.upgrades,
                [upgradeKey]: {
                    ...upgrade,
                    hidden: false

                }
            }

            const newState = {
                ...state,
                upgrades: newUpgrades,
            }
            //saveToLocalStorage(LOCAL_STORAGE_KEY, newState)
            set(newState)
        }
        
    },

    // Sincronizar datos con Firestore
    syncToServer: async (uid, email) => {
        const { points, upgrades } = get();
        
        try {
          await saveProgressToFirestore(uid, email, points, upgrades);
          console.log("Sincronizando datos en Firestore");
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
            }
        });
        console.log("Datos cargados en Zustand desde Firestore.");
        } else {
        console.log("No hay datos previos en Firestore. Se mantiene el estado por defecto.");
        }
    } catch (error) {
        console.error("Error al cargar datos del servidor:", error);
    }
    }
      
}))

export default useRockStore;