import React from 'react';
import Upgrade from './Upgrade.jsx';
import useRockStore from "../stores/rock-store.js";

export default function UpgradeSection() {
    const upgrades = useRockStore((state) => state.upgrades)
    const upgradeKeys = Object.keys(upgrades);

    //El color rojo de cuando los puntos no son suficientes para comprar una mejora es: red-500
    return (
        <>
            <div
                className="h-[45vh] lg:h-[58vh] text-white rounded-lg bg-[url(/cave-image-upgrade.png)] bg-cover bg-no-repeat bg-right-top overflow-y-auto scroll-personalizado">
                <div className="flex flex-col space-y-4 justify-center py-5">
                    {upgradeKeys.map(k => {
                        const upgrade = upgrades[k]
                        return <Upgrade
                            key={k}
                            upgradeKey={k}
                            icon={upgrade.icon}
                            hidden={upgrade.hidden}
                            name={upgrade.name}
                            price={upgrade.price}
                            cps={upgrade.cps}
                            quantity={upgrade.quantity}
                        />
                    })}
                </div>
            </div>
        </>
    );
};