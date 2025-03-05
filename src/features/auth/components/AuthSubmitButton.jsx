import Button from "../../../components/Button.jsx";
import ArrowRightIcon from "../../../components/icons/ArrowRightIcon.jsx";

function AuthSubmitButton({children, disabled}) {

    return (
        <Button type="submit" variant="secondary" size="md" width="full" className="mt-4" disabled={disabled}>
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