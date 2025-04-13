import React from 'react';
import RockSection from './RockSection.jsx';
import UpgradeSection from './UpgradeSection.jsx';
import TutorialSection from './TutorialSection.jsx';

export function GameSection() {
    //El color rojo de cuando los puntos no son suficientes para comprar una mejora es: red-500
    return (
        <>
            <div className='size-noheader grid grid-cols-1 p-4 gap-5 lg:grid-cols-2 overflow-y-auto lg:overflow-hidden '>
                <RockSection />
                <UpgradeSection />
                <TutorialSection />
            </div>
        </>
    );
};