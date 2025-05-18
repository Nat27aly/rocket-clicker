import Header from "./Header.jsx";
import {Outlet, useLocation} from "react-router";
import Input from "./Input.jsx";
import Button from "./Button.jsx";

function MainLayout() {
    let location = useLocation();
    



    return (<div className={`min-h-screen bg-gray-700 font-sans ${location.pathname === '/game' ? 'overflow-hidden' : ''}`}>
        <Header/>
        <main className='relative grow overflow-hidden'>
            <Outlet/>

            {/*Piedra de la izquierda*/}
            <img
                src="/rocks-left.svg"
                alt="Piedra Izquierda"
                className={`fixed bottom-0 left-0 z-0 opacity-40 ${location.pathname === '/game' ? 'hidden' : ''}`} 
            />

            {/*Piedra de la derecha*/}
            <img
                src="/rocks-right.svg"
                alt="Piedra Derecha"
                className={` fixed bottom-0 right-0 z-0 hidden opacity-40 ${location.pathname === '/game' ? 'xl:hidden' : 'xl:block'}`}
            />
        </main>
    </div>);
}

export default MainLayout;