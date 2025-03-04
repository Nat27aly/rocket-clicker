import GoogleAuthButton from "./GoogleAuthButton.jsx";
import Heading from "../../../components/Heading.jsx";
import Card from "../../../components/Card.jsx";
import Container from "../../../components/Container.jsx";
import Separator from "../../../components/Separator.jsx";
import SignUpForm from "./SignUpForm.jsx";


function SignUpPage() {



    return (
        <Container size="sm" className="flex flex-col items-center pt-14">
            <Card>
                <Heading level="5">Regístrate, guarda tu progreso e intenta superarte.</Heading>
                <GoogleAuthButton>Sign up with Google</GoogleAuthButton>
                <Separator label="OR"/>
               <SignUpForm/>
            </Card>
        </Container>
    );
}

export default SignUpPage;