import React from 'react';

export default function UpgradeLevel(props) {
    return (
        <>
            <div className='col-span-1 p-1'>
                <div className='flex items-center justify-center h-full'>
                    <div className='flex items-center justify-center h-15 w-15 md:h-15 md:w-15 rounded-full bg-yellow-500 mr-2'>
                        <span className='text-gray-800 font-sans font-bold text-2xl md:text-4xl'>{props.level}</span>
                    </div>
                </div>
            </div>
        </>
    );
};