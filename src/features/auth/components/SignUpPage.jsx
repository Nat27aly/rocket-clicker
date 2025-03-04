import GoogleAuthButton from "./GoogleAuthButton.jsx";
import Heading from "../../../components/Heading.jsx";
import Card from "../../../components/Card.jsx";
import Container from "../../../components/Container.jsx";
import AuthSubmitButton from "./AuthSubmitButton.jsx";
import Input from "../../../components/Input.jsx";
import Separator from "../../../components/Separator.jsx";


function SignUpPage() {

    function handleSubmit(e) {
        e.preventDefault();


    }

    return (
        <Container size="sm" className="flex flex-col items-center pt-14">
            <Card>
                <Heading level="5">Regístrate, guarda tu progreso e intenta superarte.</Heading>
                <GoogleAuthButton>Sign up with Google</GoogleAuthButton>
                <Separator label="OR"/>
                <form className="w-full space-y-3" onSubmit={handleSubmit}>
                    <Input type="text" name="email" placeholder="nombre@mail.com" label="Email"/>
                    <Input type="password" name="password" placeholder="" label="Contraseña"/>
                    <Input type="password" name="password" placeholder="" label="Repite contraseña"/>
                    <AuthSubmitButton>Regístrate</AuthSubmitButton>
                </form>
            </Card>
        </Container>
    );
}

export default SignUpPage;