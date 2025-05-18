import Button from "../../../components/Button.jsx";
import { useAuth } from "../context/authContext.jsx";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router";

function SignOutButton({ insideApp }) {
    const { signOutApp, checkLogged } = useAuth();
    const [errorOut, setErrorOut] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const checkUserLogged = async () => {
            if (!(await checkLogged())) {
                navigate('/');
            };
        };

        checkUserLogged();
    }, []);

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
            <Button variant="secondary" size="sm" onClick={handleGoToLanding} className={insideApp ? "" : "hidden"}>Log Out
            </Button>

            {errorOut && <p className="text-red-700">{setErrorOut}</p>}
        </>
    );
}

export default SignOutButton;