import React, {useEffect} from 'react';
import UpgradeIcon from './UpgradeIcon.jsx';
import UpgradeNamePrice from './UpgradeNamePrice.jsx';
import UpgradeCPS from './UpgradeCPS.jsx';
import UpgradeQuantity from './UpgradeQuantity.jsx';
import {cn} from "../../../utils/tailwind.js";
import useRockStore from "../stores/rock-store.js";

export default function Upgrade(props) {
    const points = useRockStore(state => state.points)
    const buyUpgrade = useRockStore(state => state.buyUpgrade)
    const unlockUpgrade = useRockStore(state => state.unlockUpgrade)

    const canBuy = points >= props.price;

    useEffect(() => {
        if ((points >= props.price) && props.hidden) {
            unlockUpgrade(props.upgradeKey);
        }
    }, [points, props.price, props.upgradeKey]);

    function handleBuyUpgrade() {
        if (props.hidden) return;
        buyUpgrade(props.upgradeKey);
    }

    return (
        <>
            <div onClick={handleBuyUpgrade}
                 className={cn(
                     props.hidden && "grayscale-100",
                     (!canBuy && !props.hidden) && "opacity-60",
                     "select-none bg-gray-800 hover:bg-gray-700 text-white border-4 border-yellow-500 rounded-2xl h-25 mx-auto my-5 flex justify-between w-5/6 sm:w-5/6 md:w-5/6 lg:w-3/4 xl:w-5/6 2xl:w-160 transition-colors duration-300 cursor-pointer")}>
                <UpgradeIcon icon={props.icon} hidden={props.hidden} alt={props.name}/>
                <UpgradeNamePrice name={props.name} price={props.price} hidden={props.hidden}/>
                <UpgradeCPS cps={props.cps} hidden={props.hidden}/>
                {props.hidden ? null : <UpgradeQuantity quantity={props.quantity}/>}
            </div>
        </>
    );
};