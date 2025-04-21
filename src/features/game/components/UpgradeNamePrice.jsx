import React from 'react';

export default function UpgradeNamePrice(props) {
    const displayName = props.hidden ? '????' : props.name;

    return (
        <>
            <div className='col-span-2 p-2'>
                <p className='flex items-center justify-center text-xl sm:text-2xl md:text-md text-white uppercase font-sans font-bold h-1/2 mt-[-0.5rem] md:mt-0'>
                    {displayName}
                </p>
                <p className='flex items-center justify-center text-xl md:text-2xl text-yellow-500 font-sans font-bold h-1/2 mt-1'>
                    {props.price}
                </p>
            </div>
        </>
    );
};