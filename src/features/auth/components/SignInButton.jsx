import Button from "../../../components/Button.jsx";
import {Link, useNavigate} from "react-router";

function SignInButton() {
    const navigate = useNavigate();

    function handleGoToSignInPage() {
        navigate("/sign-in")
    }

    return (
        <Button variant="secondary" size="sm" onClick={handleGoToSignInPage}>Sign In</Button>
    );
}

export default SignInButton;