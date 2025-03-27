import Header from "./Header.jsx";
import {Outlet} from "react-router";
import Input from "./Input.jsx";
import Button from "./Button.jsx";

function MainLayout() {

    return (<div className='min-h-screen bg-gray-700 font-sans'>
        <Header/>
        <main className='grow '>
            <Outlet/>

            {/* Piedra de la izquierda */}
            <img
                src="/rocks-left.svg"
                alt="Piedra Izquierda"
                className="fixed bottom-0 left-0 z-0 opacity-40"
            />

            {/* Piedra de la derecha */}
            <img
                src="/rocks-right.svg"
                alt="Piedra Derecha"
                className="fixed bottom-0 right-0 z-0 hidden xl:block opacity-40"
            />
        </main>
    </div>);
}

export default MainLayout;