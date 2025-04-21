import React from 'react';

export default function UpgradeQuantity(props) {


    return (
        <>
            <div className='col-span-1 p-1'>
                <div className='flex items-center justify-center h-full'>
                    <div className='flex items-center justify-center h-15 w-15 rounded-full bg-yellow-500 m-2'>
                        <span className='text-gray-800 font-sans font-bold text-xl md:text-xl'>{props.quantity}</span>
                    </div>
                </div>
            </div>
        </>
    );
};