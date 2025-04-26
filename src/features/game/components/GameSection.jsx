import React, { useEffect } from 'react';
import RockSection from './RockSection.jsx';
import UpgradeSection from './UpgradeSection.jsx';
import TutorialSection from './TutorialSection.jsx';
import useRockStore from '../stores/rock-store.js';
import { useAuth } from '../../auth/context/authContext.jsx';

export function GameSection() {
    const addPoints = useRockStore(state => state.addPoints);
    const getTotalCPS = useRockStore(state => state.getTotalCPS);
   
    const syncToServer = useRockStore(state => state.syncToServer); 
    const { user } = useAuth(); 

    // Sincronizar intervalos Firestore
    useEffect(() => {
        if (!user) return;
        console.log("User desde GameSection:", user); 

        const interval = setInterval(() => {
            console.log("Sincronizando con Firestore:", {
                uid: user.uid,
                email: user.email
            });
            syncToServer(user.uid, user.email);
        }, 3000);

        return () => clearInterval(interval);
    }, [user, syncToServer]);

    // Sincronizar intervalos Puntos/seg
    useEffect(() => {
        const intervalId = setInterval(() => {
            addPoints(getTotalCPS())
        }, 3000)
        return () => clearInterval(intervalId);
    }), [];


    const loadFromServer = useRockStore(state => state.loadFromServer);
    useEffect(() => {
        if(user){
            console.log("Cargando Progreso desde Firestore.");
            loadFromServer(user.uid);            
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    //El color rojo de cuando los puntos no son suficientes para comprar una mejora es: red-500
    return (
        <>
            <div className='size-noheader grid grid-cols-1 p-4 gap-5 lg:grid-cols-2 overflow-y-auto lg:overflow-hidden'>
                <RockSection />
                <UpgradeSection />
                <TutorialSection />
            </div>
        </>
    );
};