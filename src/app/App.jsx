import {BrowserRouter as Router} from "react-router";
import AppRoutes from "./routes.jsx";
import Button from "../components/Button.jsx";

function App() {

    return (
        <Router>
            <AppRoutes/>
        </Router>

    )
}

export default App
