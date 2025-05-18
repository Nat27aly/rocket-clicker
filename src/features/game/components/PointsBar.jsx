import React from 'react';
import useRockStore from "../stores/rock-store.js";

export default function PointsBar() {

    const points = useRockStore((state)=>state.points)

    return (
        <>
            <div
                className="border-3 border-yellow-500 tabular-nums rounded-sm bg-gray-800 w-fit h-14 text-3xl text-yellow-500 font-sans font-bold py-2 px-6 flex">
                {points.toFixed(0)}
            </div>
        </>
    );
};