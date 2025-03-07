import {cva} from "class-variance-authority";
import {cn} from "../utils/tailwind.js";

function Button(props) {
    const {type = "button"} = props;

    const buttonVariants = cva(
        'cursor-pointer transition-colors inline-flex items-center font-semibold rounded-lg px-4 py-2 gap-3  justify-center disabled:opacity-50 disabled:cursor-not-allowed',
        {
            variants: {
                variant: {
                    primary: "bg-white hover:bg-gray-200 active:bg-gray-300 text-gray-900",
                    secondary: "bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 text-yellow-1000",
                    tertiary: "bg-gray-800 hover:bg-gray-900 active:bg-gray-950 text-white",
                    cuartiary: "bg-transparent p-5 hover:bg-gray-800 border-2 border-white active:bg-gray-900 text-white"
                },
                size: {
                    sm: "h-9 text-sm",
                    md: "h-10 text-base",
                    lg: "h-14 text-xl",
                },
                width: {
                    default: "w-auto",
                    full: "w-full",
                }
            },
            defaultVariants: {
                variant: "primary",
                size: "md",
            }
        }
    )

    /*
    * variant va a ser el valor de props.variant, en caso de que dicho valor sea null o undefined,
    * asignamos por defecto "primary"
    */

    return (
        <button
            type={type}
            className={cn(buttonVariants(props))}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    );
}

export default Button;