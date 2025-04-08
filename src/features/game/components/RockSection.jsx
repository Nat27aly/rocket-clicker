import React from 'react';
import ClickBar from './ClicksBar.jsx';
import PointsBar from './PointsBar.jsx';
import Rock from './Rock.jsx';
import Upgrade from './Upgrade.jsx';

export function RockSection() {
    //El color rojo de cuando los puntos no son suficientes para comprar una mejora es: red-500
    return (
        <>
            <div className='size-noheader grid grid-cols-1 p-4 gap-5 lg:grid-cols-2 border-4 border-yellow-500 overflow-y-auto lg:overflow-hidden '>
                <div className="h-[45vh] lg:h-[58vh] bg-[url(/cave-image-rock.png)] bg-cover bg-no-repeat bg-center text-white rounded-lg border-4 border-orange-500 m-0">
                    <PointsBar />
                    <ClickBar />
                    <Rock />
                </div>
                <div className="h-[45vh] lg:h-[58vh] text-white rounded-lg bg-[url(/cave-image-upgrade.png)] bg-cover bg-no-repeat bg-right-top overflow-y-auto scroll-personalizado border-4 border-red-500">
                    <div className="flex flex-col space-y-4 justify-center py-5">
                        <Upgrade image='/pickaxe-click.svg' name='pico' price='50' clicks='0.1' level='15' />
                        <Upgrade image='/miner.svg' name='minero' price='250' clicks='1' level='1' />
                        <Upgrade image='/excavator-dark.svg' name='excavadora' price='1000' clicks='20' level='1' />
                        <Upgrade image='/excavator.svg' name='excavadora' price='1000' clicks='20' level='1' />
                        <Upgrade image='/easter-dark.svg' name='??????' price='15000' clicks='???' level='?' />

                    </div>
                </div>
                <div className="h-[55vh] sm:h-[45vh] lg:h-[25vh] border-4 border-pink-500 bg-blue-600 rounded-lg w-full col-span-full lg:col-span-2 bg-[url(/cave-image-tutorial.png)] bg-cover bg-no-repeat">
                    <div className='text-white flex flex-col justify-center items-center h-full font-sans font-semibold text-lg sm:text-xl md:text-2xl p-5 sm:p-10'>
                        <h3 className='text-2xl md:text-3xl mb-2'>¿Cómo jugar?</h3>
                        <ol>
                            <li className='p-2 lg:p-1'>1.  Haz click en la <span className='text-yellow-500'>gran roca</span> de la izquierda para conseguir <span className='text-yellow-500'>puntos</span>.</li>
                            <li className='p-2 lg:p-1'>2.  En la parte derecha, compra <span className='text-yellow-500'>mejoras</span> con tus puntos para conseguir después más puntos!</li>
                            <li className='p-2 lg:p-1'>3.  Repite el proceso hasta el <span className='text-yellow-500'>infinito</span> para conseguir la <span className='text-yellow-500'>puntuación más alta</span>  que puedas!</li>
                        </ol>
                    </div>
                </div>

            </div>
        </>
    );
};