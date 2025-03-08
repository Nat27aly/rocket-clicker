import Button from "../../../components/Button.jsx";
import { useAuth } from "../context/authContext.jsx";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router";

function SignInButton({ insideApp }) {
    const { signOutApp, checkLogged } = useAuth();
    const [errorOut, setErrorOut] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const checkUserLogged = async () => {
            if(!(await checkLogged())){
                navigate('/');
            };
        };

        checkUserLogged();
    }, []);

    function handleGoToSignInPage() {
        navigate("/sign-in")
    }

    async function handleGoToLanding() {
        setErrorOut('');

        try {
            await signOutApp();
            navigate("/")
        }
        catch (error) {
            setErrorOut('Error: ' + error.code)
        }
    }

    return (
        <>
            <Button variant="secondary" size="sm" onClick={!insideApp ? handleGoToSignInPage : handleGoToLanding}>{insideApp ? "Logout " : "Log In"}
            </Button>

            {errorOut && <p className="text-red-700">{setErrorOut}</p>}
        </>
    );
}

export default SignInButton;