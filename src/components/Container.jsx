import { cva } from "class-variance-authority";
import { cn } from "../utils/tailwind.js";

function Container({ children, className, size = "md", ...props }) {
    const containerVariants = cva("w-full mx-auto px-4", {
        variants: {
            size: {
                sm: "max-w-screen-sm",
                md: "max-w-screen-md",
                lg: "max-w-screen-lg",
                xl: "max-w-screen-xl",
            },
        },
        defaultVariants: {
            size: "md",
        },
    });

    return (
        <div className={cn(containerVariants({ size }), className)} {...props}>
            {children}
        </div>
    );
}

export default Container;
