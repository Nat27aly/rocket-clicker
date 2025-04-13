import React, { useState, useEffect } from 'react';
import './particles.css';

export default function Rock() {
    const [shaking, setShaking] = useState(true);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({ x: event.clientX - 900, y: event.clientY - 763 });
        };

        window.addEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        if (shaking) {
            setShaking(false);
        }
    }, [shaking]);

    function handleClick() {
        setShaking(!shaking);

    }

    return (
        <>
            <div className="flex items-center justify-center rock-position">
                <button onClick={handleClick} className={`${shaking ? '' : 'shake'} transition transform duration-200 ease-in-out hover:scale-105 particleButton`}>
                    <img className="w-35 sm:w-42 md:w-65 lg:w-75 xl:w-75 2xl:w-65" src="/rock.svg" alt="rock click" />
                    <div className={`w-35 sm:w-42 md:w-65 lg:w-75 xl:w-75 2xl:w-65 particleButton particles hidden md:block ${shaking ? '' : 'animated'}`}
                        style={{
                            left: `${mousePosition.x}px`,
                            top: `${mousePosition.y}px`,
                        }}></div>
                </button>
            </div>
        </>
    );
};