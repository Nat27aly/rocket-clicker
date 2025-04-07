import React from 'react';

export default function UpgradeImage(props) {
    return (
        <>
            <div className='col-span-2 md:col-span-3 p-1'>
                <div className='flex justify-start items-center ml-1 mt-2 md:mt-0 md:ml-4 h-full'>
                    <img src={props.image} alt="pickaxe" className="h-14 md:h-18" />
                </div>
            </div>
        </>
    );
};