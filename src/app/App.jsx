import {BrowserRouter as Router} from "react-router";
import AppRoutes from "./routes.jsx";
import Button from "../components/Button.jsx";
import {AuthProvider} from "../features/auth/context/authContext.jsx";
import {useEffect} from "react";
import useRockStore from "../features/game/stores/rock-store.js";


function App() {

    const addPoints = useRockStore(state => state.addPoints);
    const getTotalCPS = useRockStore(state => state.getTotalCPS);
    const syncToServer = useRockStore(state => state.syncToServer);

    useEffect(() => {
        const intervalId = setInterval(() => {
            addPoints(getTotalCPS())
        }, 1000)
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            syncToServer();
        }, 60000)
        return () => clearInterval(intervalId);
    }, []);

    return (
        <AuthProvider>
            <Router>
                <AppRoutes/>

            </Router>
        </AuthProvider>
    )
}

export default App
