import Button from "../../../components/Button.jsx";
import { useNavigate } from "react-router";

function SignInButton({ insideApp }) {
    const navigate = useNavigate();

    function handleGoToSignInPage() {
        navigate("/sign-in")
    }

    return (
        <>
            <Button variant="secondary" size="sm" onClick={handleGoToSignInPage} className={insideApp ? "hidden" : ""}>Sign In
            </Button>
        </>
    );
}

export default SignInButton;