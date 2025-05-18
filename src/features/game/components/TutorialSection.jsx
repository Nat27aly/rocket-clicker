import React from 'react';

export default function TutorialSection() {
    //El color rojo de cuando los puntos no son suficientes para comprar una mejora es: red-500
    return (
        <>
            <div className="h-[55vh] sm:h-[45vh] lg:h-[25vh] rounded-lg w-full col-span-full lg:col-span-2 bg-[url(/cave-image-tutorial.png)] bg-cover bg-no-repeat">
                <div className='text-white flex flex-col justify-center items-center h-full font-sans font-semibold text-base sm:text-lg md:text-lg lg:text-lg p-5 sm:p-10 lg:p-3' >
                    <h3 className='text-xl mb-2'>¿Cómo jugar?</h3>
                    <ul>
                        <li className="p-1 md:p-0 lg:p-1">
                        ⛏ ¡<span className="text-yellow-500">Bienvenido, minero</span>! Golpea la <span className="text-yellow-500"> roca ancestral</span> con todas tus fuerzas para comenzar a <span className="text-yellow-500">ganar puntos.</span>
                        </li>
                        <li className="p-1 md:p-0 lg:p-0">
                            Invierte tus <span className="text-yellow-500">puntos sabiamente</span> en mejores herramientas: desde picos hasta 
                             grandes máquinas que <span className="text-yellow-500">trabajan por ti.</span>
                        </li>
                        <li className="p-1 md:p-0 lg:p-1">
                            Deja que la <span className="text-yellow-500">automatización</span> haga el trabajo sucio, mientras tú te preparas para romper el 
                            <span className="text-yellow-500"> próximo récord mundial</span>.
                        </li>
                        <li className="p-1 md:p-0 lg:p-1">
                            Sigue <span className="text-yellow-500">cavando</span>, sigue <span className="text-yellow-500">mejorando</span>, sigue 
                            <span className="text-yellow-500"> reinando</span>. ¡La montaña no se va a romper sola! ⛏
                        </li>
                    </ul>

                </div>
            </div>
        </>
    );
};