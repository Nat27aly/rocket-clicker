import React, { useEffect, useRef, useState } from 'react';
import DeleteAccountButton from '../../auth/components/DeleteAccountButton.jsx';
import CogIcon from "../../../components/icons/CogIcon.jsx";

function ConfigPageButton({ insideApp }) {
    const [isOpen, setIsOpen] = useState(false);
    const panelRef = useRef(null);

    // Cierra el panel si se hace clic fuera
    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside2);
        }
    }, [isOpen]);

    const handleClickOutside2 = (event) => {
        if (panelRef.current && !panelRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    const handleClickConfig = (e) => {
        e.stopPropagation();
        if(e.button === 0) {
            setIsOpen(!isOpen);
        }
    }

    return (
        <div className="relative z-50">
            <button
                onMouseDown={handleClickConfig}
                className={`px-4 py-2 cursor-pointer text-white transition-transform  duration-200 hover:scale-120 ${insideApp ? '' : 'hidden'}`}
            >
                <CogIcon className="h-9 w-9"/>
            </button>

            <div
                ref={panelRef}
                className={`fixed right-0 h-fit top-16 rounded-xl w-64 bg-gray-200 shadow-lg p-4 transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <h2 className="text-lg font-bold mb-4 underline text-gray-800 ">Configuración de cuenta</h2>
                <p className=" mb-4 text-red-800 "><span className='underline font-bold'>Atención:</span> El siguiente botón eliminará tu cuenta permanentemente. Asegúrate de estar completamente seguro antes de continuar.</p>
                <p className="text-md mb-10 text-red-800 ">Para completar el proceso de forma segura, deberás confirmar los datos de tu cuenta.</p>

                <DeleteAccountButton />
            </div>
        </div>
    );
}

export default ConfigPageButton;