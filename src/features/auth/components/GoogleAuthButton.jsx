import Button from "../../../components/Button.jsx";
import GoogleIcon from "../../../components/icons/GoogleIcon.jsx";

function GoogleAuthButton({clickFunction, children}) {

    return (
        <Button variant="tertiary" size="sm" width="full" className="mt-4" onClick={clickFunction}>
            <GoogleIcon className="w-5 h-5"/>
            {children}
        </Button>
    );

}

export default GoogleAuthButton;