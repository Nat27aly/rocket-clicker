import {cva} from "class-variance-authority";
import {cn} from "../utils/tailwind.js";

function Heading(props) {

    const headingVariants = cva(
        "font-sans font-bold",
        {
            variants: {
                level: {
                    "1": "text-6xl",
                    "2": "text-5xl",
                    "3": "text-4xl",
                    "4": "text-3xl",
                    "5": "text-2xl",
                    "6": "text-xl",
                },
                color: {
                    default: "text-gray-900",
                    white: "text-white",
                    gray: "text-gray-400"
                }
            },
            defaultVariants: {
                level: "1",
                color: "default",
            }
        }
    )

    // Definir dinámicamente el componente basado en el nivel
    const Tag = `h${props.level}`;

    return (
        <Tag className={cn(headingVariants(props))}>{props.children}</Tag>
    );
}

export default Heading;