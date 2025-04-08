import React from 'react';
import ClickBar from './ClicksBar.jsx';
import PointsBar from './PointsBar.jsx';
import Rock from './Rock.jsx';
import Upgrade from './Upgrade.jsx';

export function RockSection() {
    //El color rojo de cuando los puntos no son suficientes para comprar una mejora es: red-500
    return (
        <>
            <div className='size-noheader grid grid-cols-1 p-4 gap-5 lg:grid-cols-2 border-4 border-yellow-500'>
                <div className="h-[45vh] lg:h-2/3 bg-[url(/cave-image-rock.png)] bg-cover bg-no-repeat bg-center text-white rounded-lg">
                    <PointsBar />
                    <ClickBar />
                    <Rock />
                </div>
                <div className="h-full lg:h-2/3 text-white rounded-lg bg-[url(/cave-image-upgrade.png)] bg-cover bg-no-repeat bg-right-top overflow-y-auto scroll-personalizado">
                    <div className="flex flex-col space-y-4 justify-center py-5">
                        <Upgrade image='/pickaxe-click.svg' name='pico' price='50' clicks='0.1' level='15' />
                        <Upgrade image='/miner.svg' name='minero' price='250' clicks='1' level='1' />
                        <Upgrade image='/excavator-dark.svg' name='excavadora' price='1000' clicks='20' level='1' />
                        <Upgrade image='/excavator.svg' name='excavadora' price='1000' clicks='20' level='1' />
                        <Upgrade image='/easter-dark.svg' name='??????' price='15000' clicks='???' level='?' />

                    </div>
                </div>

                
            </div>
        </>
    );
};