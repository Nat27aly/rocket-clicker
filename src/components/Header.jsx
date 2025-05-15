import {useState, useEffect} from 'react';
import SignInButton from "../features/auth/components/SignInButton.jsx";
import SignUpButton from "../features/auth/components/SignUpButton.jsx";
import SignOutButton from "../features/auth/components/SignOutButton.jsx";
import ConfigPageButton from "../features/game/components/ConfigPageButton.jsx";
import PickaxeIcon from "./icons/PickaxeIcon.jsx";
import {Link} from "react-router";
import { useLocation } from "react-router";


function Header() {

    const [inside, setInside] = useState(false);
    const location = useLocation();

    const currentUrl = location.pathname;
    
    useEffect(() => {
        if (currentUrl === "/game") {
            setInside(true);
        } else {
            setInside(false);
        }
    }, [currentUrl]);
    

    return (
        <div className='bg-gray-800 flex text-white h-16 items-center justify-between px-4 relative z-50'>
            <Link to="/" className='flex items-center' >
                <PickaxeIcon className='h-6'/>
                <p className='text-3xl text-gray-100 font-bold'>Rock Clicker</p>
            </Link>
            <div className='flex items-center gap-2'>
                <SignInButton insideApp={inside}/>
                <SignUpButton insideApp={inside}/>
                <ConfigPageButton insideApp={inside}/>
                <SignOutButton insideApp={inside}/>
            </div>
        </div>
    );
}

export default Header;