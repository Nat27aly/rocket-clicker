import { BrowserRouter as Router } from "react-router";
import AppRoutes from "./routes.jsx";
import Button from "../components/Button.jsx";
import { AuthProvider } from "../features/auth/context/authContext.jsx";


function App() {

    return (
        <AuthProvider>
            <Router>
                <AppRoutes />
                
            </Router>
        </AuthProvider>
    )
}

export default App
