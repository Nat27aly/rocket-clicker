import DashboardHeader from "./DashboardHeader.jsx";
import {Outlet} from "react-router";

function DashboardLayout(){

    return(
        <div>
            <DashboardHeader/>
            <main>
                <Outlet/>
            </main>
        </div>

    );
}

export default DashboardLayout;