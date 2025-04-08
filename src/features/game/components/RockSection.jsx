import React from 'react';
import ClickBar from './ClicksBar.jsx';
import PointsBar from './PointsBar.jsx';
import Rock from './Rock.jsx';

export default function RockSection() {
    //El color rojo de cuando los puntos no son suficientes para comprar una mejora es: red-500
    return (
        <>
            <div className="h-[45vh] lg:h-[58vh] bg-[url(/cave-image-rock.png)] bg-cover bg-no-repeat bg-center text-white rounded-lg m-0">
                <PointsBar />
                <ClickBar />
                <Rock />
            </div>
        </>
    );
};