import Button from "../../../components/Button.jsx";
import Heading from "../../../components/Heading.jsx";
import {useNavigate} from "react-router";
import Container from "../../../components/Container.jsx";

function LandingPage() {
    const navigate = useNavigate();

    function handleGoToGame() {
        // If the user is logged in, redirect it to the game

        // Otherwise, user need to authenticate
        navigate("/sign-in");
    }
    function handleGoAdmin() {
        window.open("https://console.firebase.google.com/u/2/project/rockclicker-linkia/authentication/users?hl=es-419", "_blank");
    }

    return (
        <Container className={'flex justify-center flex-col items-center pt-52 text-center'}>
            <Heading level={1} color="white" className="pb-4 z-10">Todo empieza con un sólo click...</Heading>
            <Heading level={3} color="gray" className="pb-10 z-10">Despierta al minero que llevas dentro</Heading>
            <Button onClick={handleGoToGame} variant="secondary" size='lg' className="z-10">Empezar a clickear</Button>

            <Button onClick={handleGoAdmin} variant='cuartiary' size='md' className="z-10 relative top-35">Entrar como Admin</Button>
        </Container>
    );
}

export default LandingPage;