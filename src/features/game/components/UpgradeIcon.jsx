import React, {useState} from 'react';
import {cn} from "../../../utils/tailwind.js";

export default function UpgradeIcon(props) {

    return (
        <>
            <div className='col-span-2 md:col-span-3 p-1'>
                <div className='flex justify-start items-center ml-1 mt-2 md:mt-0 md:ml-4 h-full'>
                    <img src={props.icon} alt={props.alt}
                         className={cn(
                             `h-14 md:h-18`,
                             props.hidden && "brightness-0 drop-shadow-sm drop-shadow-white/50"
                         )}/>
                </div>
            </div>
        </>
    );
};