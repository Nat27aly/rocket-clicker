import Button from "../../../components/Button.jsx";
import {useNavigate} from "react-router";

function SignUpButton() {

    const navigate = useNavigate();

    function handleGoToSignUpPage() {
        navigate("/sign-up");
    }

    return (
        <Button size="sm" onClick={handleGoToSignUpPage}>Sign Up</Button>
    );
}

export default SignUpButton;