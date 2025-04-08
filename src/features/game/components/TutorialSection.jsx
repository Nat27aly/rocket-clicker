import React from 'react';

export default function TutorialSection() {
    //El color rojo de cuando los puntos no son suficientes para comprar una mejora es: red-500
    return (
        <>
            <div className="h-[55vh] sm:h-[45vh] lg:h-[25vh] rounded-lg w-full col-span-full lg:col-span-2 bg-[url(/cave-image-tutorial.png)] bg-cover bg-no-repeat">
                <div className='text-white flex flex-col justify-center items-center h-full font-sans font-semibold text-lg sm:text-xl md:text-2xl p-5 sm:p-10'>
                    <h3 className='text-2xl md:text-3xl mb-2'>¿Cómo jugar?</h3>
                    <ol>
                        <li className='p-2 lg:p-1'>1.  Haz click en la <span className='text-yellow-500'>gran roca</span> de la izquierda para conseguir <span className='text-yellow-500'>puntos</span>.</li>
                        <li className='p-2 lg:p-1'>2.  En la parte derecha, compra <span className='text-yellow-500'>mejoras</span> con tus puntos para conseguir después más puntos!</li>
                        <li className='p-2 lg:p-1'>3.  Repite el proceso hasta el <span className='text-yellow-500'>infinito</span> para conseguir la <span className='text-yellow-500'>puntuación más alta</span>  que puedas!</li>
                    </ol>
                </div>
            </div>
        </>
    );
};