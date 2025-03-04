import Container from "../../../components/Container.jsx";
import Card from "../../../components/Card.jsx";
import Heading from "../../../components/Heading.jsx";
import GoogleAuthButton from "./GoogleAuthButton.jsx";
import AuthSubmitButton from "./AuthSubmitButton.jsx";
import Input from "../../../components/Input.jsx";
import Separator from "../../../components/Separator.jsx";

function SignInPage() {

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <Container size="sm" className="flex flex-col items-center pt-14">
            <Card>
                <Heading level="5">Ingresa para guardar tu progreso e intenta superarte.</Heading>
                <GoogleAuthButton>Sign in with Google</GoogleAuthButton>
                <Separator label="OR"/>
                <form className="w-full space-y-3" onSubmit={handleSubmit}>
                    <Input type="text" name="email" placeholder="nombre@mail.com" label="Email"/>
                    <Input type="password" name="password" placeholder="" label="Contraseña"/>
                    <AuthSubmitButton>Ingresar</AuthSubmitButton>
                </form>

            </Card>
        </Container>
    );
}

export default SignInPage;