import Container from "../../../components/Container.jsx";
import Card from "../../../components/Card.jsx";
import Heading from "../../../components/Heading.jsx";
import GoogleAuthButton from "./GoogleAuthButton.jsx";
import Separator from "../../../components/Separator.jsx";
import SignInForm from "./SignInForm.jsx";
import SignGoogle from "./SignGoogle.jsx";

function SignInPage() {

    return (
        <Container size="sm" className="flex flex-col items-center pt-14">
            <Card>
                <Heading level="5">Ingresa para guardar tu progreso e intenta superarte.</Heading>
                <SignGoogle/>
                <Separator label="OR"/>
                <SignInForm/>
            </Card>
        </Container>
    );
}

export default SignInPage;