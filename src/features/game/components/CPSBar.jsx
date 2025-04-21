import React from 'react';
import useRockStore from "../stores/rock-store.js";

export default function CPSBar() {
    const points = useRockStore(state => state.points);
    const getTotalCPS = useRockStore(state => state.getTotalCPS);

    // el "?." se llama optional chaining https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
    const cps = getTotalCPS()?.toFixed(1).toString();

    return (
        <>
            <div
                className=" tabular-nums border-3 border-white rounded-sm bg-gray-800 w-fit h-14 text-3xl text-white font-sans font-semibold py-2 px-3">
                {cps}
                <span
                    className="text-2xl pl-2 hidden md:inline">
                    clicks / segundo
                </span>
                <span className="text-2xl pl-2 md:hidden">
                    c/s
                </span>
            </div>
        </>
    );
};