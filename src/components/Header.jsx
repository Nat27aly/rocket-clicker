import SignInButton from "../features/auth/components/SignInButton.jsx";
import SignUpButton from "../features/auth/components/SignUpButton.jsx";
import PickaxeIcon from "./icons/PickaxeIcon.jsx";
import {Link} from "react-router";


function Header() {

    return (
        <div className='bg-gray-800 flex text-white h-16 items-center justify-between px-4 relative z-50'>
            <Link to="/" className='flex items-center' >
                <PickaxeIcon className='h-6'/>
                <p className='text-3xl text-gray-100 font-bold'>Rocket Clicker</p>
            </Link>
            <div className='flex items-center gap-2'>
                <SignInButton/>
                <SignUpButton/>
            </div>
        </div>
    );
}

export default Header;