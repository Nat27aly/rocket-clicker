import {Route, Routes} from "react-router";
import LandingPage from "../features/landing/components/LandingPage.jsx";
import SignInPage from "../features/auth/components/SignInPage.jsx";
import SignUpPage from "../features/auth/components/SignUpPage.jsx";
import MainLayout from "../components/MainLayout.jsx";
import DashboardLayout from "../features/dashboard/components/DashboardLayout.jsx";
import DashboardHomePage from "../features/dashboard/components/DashboardHomePage.jsx";

import { GameSection } from "../features/game/components/GameSection.jsx";

function AppRoutes() {

    return (
        <Routes>
            <Route element={<MainLayout/>}>
                <Route index element={<LandingPage/>}/>
                <Route path="/sign-in" element={<SignInPage/>}/>
                <Route path="/sign-up" element={<SignUpPage/>}/>
                <Route path="/game" element={<GameSection />} ></Route>



            </Route>

            <Route path="/dashboard" element={<DashboardLayout/>}>
                <Route index element={<DashboardHomePage/>}/>
            </Route>
        </Routes>
    );
}

export default AppRoutes