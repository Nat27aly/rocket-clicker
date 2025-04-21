import {create} from "zustand";
import {loadFromLocalStorage, saveToLocalStorage} from "../../../utils/local-storage.js";

const LOCAL_STORAGE_KEY = 'rock-clicker-save-1';

// ==== Upgrades ====
const initialUpgrades = {
    pickaxe: {
        name: 'Pico',
        icon: '/pickaxe-click.svg',
        price: 15,
        cps: 0.1,
        quantity: 0,
        hidden: true,
        constMultiplier: 0.2
    },
    miner: {
        name: 'Minero',
        icon: 'miner.svg',
        price: 150,
        cps: 1,
        quantity: 0,
        hidden: true,
        constMultiplier: .5
    },
    excavator: {
        name: 'excavadora',
        icon: 'excavator.svg',
        price: 430,
        cps: 20,
        quantity: 0,
        hidden: true,
        constMultiplier: .75
    }
}

const localData = loadFromLocalStorage(LOCAL_STORAGE_KEY);
const initialPoints = localData?.points ?? 0
const loadedUpgrades = localData?.upgrades ?? initialUpgrades


const useRockStore = create((set, get) => ({
    points: initialPoints,
    upgrades: loadedUpgrades,
    incrementPoints: () => set((state) => {
        const newPoints = state.points + 1;
        const newState = {
            ...state,
            points: newPoints
        }

        saveToLocalStorage(LOCAL_STORAGE_KEY, newState)
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
            saveToLocalStorage(LOCAL_STORAGE_KEY, newState)
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
            saveToLocalStorage(LOCAL_STORAGE_KEY, newState)
            set(newState)
        }


    },
    // Simular sincronización con el servidor
    syncToServer: async () => {
        const state = get();

        // Llamada de firebase aqui para guardar el estado que se saca del state
        console.log('[Simulación]: Guardando progreso con el server...');
    }
}))

export default useRockStore;