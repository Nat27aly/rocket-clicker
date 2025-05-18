import React from 'react';

export default function UpgradeNamePrice(props) {
    const displayName = props.hidden ? '????' : props.name;

    return (
        <>
            <div className='col-span-2 sm:p-0 md:p-2'>
                <p className='flex items-center justify-center text-xl sm:text-xl md:text-md text-white uppercase font-sans font-bold h-1/2 sm:mt-0'>
                    {displayName}
                </p>
                <p className='flex items-center justify-center text-xl sm:text-xl md:text-2xl text-yellow-500 font-sans font-bold h-1/2 sm:mt-0 md:mt-1 mt-1'>
                    {props.price}
                </p>
            </div>
        </>
    );
};