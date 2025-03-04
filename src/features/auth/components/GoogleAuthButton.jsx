import Button from "../../../components/Button.jsx";
import GoogleIcon from "../../../components/icons/GoogleIcon.jsx";

function GoogleAuthButton(props) {

    return (
        <Button variant="tertiary" size="sm" width="full">
            <GoogleIcon className="w-5 h-5"/>
            {props.children}
        </Button>
    );

}

export default GoogleAuthButton;