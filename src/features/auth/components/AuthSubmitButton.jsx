import Button from "../../../components/Button.jsx";
import ArrowRightIcon from "../../../components/icons/ArrowRightIcon.jsx";

function AuthSubmitButton({children}) {

    return (
        <Button type="submit" variant="secondary" size="md" width="full" className="mt-4">
            <div className="flex w-full justify-between items-center">
                <span>
                {children}
                    </span>
                <ArrowRightIcon/>
            </div>
        </Button>
    );
}

export default AuthSubmitButton;