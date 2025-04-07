import React from 'react';
import UpgradeImage from './UpgradeImage.jsx';
import UpgradeNamePrice from './UpgradeNamePrice.jsx';
import UpgradeClicks from './UpgradeClicks.jsx';
import UpgradeLevel from './UpgradeLevel.jsx';


export default function Upgrade(props) {
    return (
        <>
            <div className="bg-gray-800 text-white border-4 border-yellow-500 rounded-2xl h-25 mx-auto my-5 grid grid-cols-8 w-5/6 sm:w-1/2 md:w-5/6 lg:w-3/4 xl:w-5/6 2xl:w-160">
                <UpgradeImage image={props.image}/>
                <UpgradeNamePrice name={props.name} price={props.price}/>
                <UpgradeClicks clicks={props.clicks}/>
                <UpgradeLevel level={props.level}/>
            </div>
        </>
    );
};