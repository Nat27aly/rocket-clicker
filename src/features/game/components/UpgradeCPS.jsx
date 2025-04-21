import React from 'react';

export default function UpgradeCPS(props) {
    const displayCPS = props.hidden ? '?' : props.cps

    return (
        <>
            <div className='col-span-3 md:col-span-2 p-1'>
                <p className='h-full mr-2 flex items-center justify-center mt-2 md:mt-0 md:justify-end text-xl md:text-2xl lg:text-3xl text-white font-sans font-bold'>
                    {displayCPS}
                    <span className='ml-2 text-xl md:text-2xl'> c/s </span></p>
            </div>
        </>
    );
};