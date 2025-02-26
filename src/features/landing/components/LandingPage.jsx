import {Link} from "react-router";

function LandingPage() {

    return (
        <div>
            <Link to='/sign-in'>Sign in</Link>
            <Link to='/sign-up'>Sign up</Link>
        </div>
    );
}

export default LandingPage;