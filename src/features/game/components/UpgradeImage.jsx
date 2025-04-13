import React, {useState} from 'react';

export default function UpgradeImage(props) {
const [shadow, setShadow] = useState(false);
//TODO: añadir la sombra solo a los iconos bloqueados qe estarán en negro. Utilizar para eso la clase shadow y el estado shadow
    return (
        <>
            <div className='col-span-2 md:col-span-3 p-1'>
                <div className='flex justify-start items-center ml-1 mt-2 md:mt-0 md:ml-4 h-full'>
                    <img src={props.image} alt="pickaxe" className={`h-14 md:h-18 ${shadow ? 'shadow' : ''}`} />
                </div>
            </div>
        </>
    );
};