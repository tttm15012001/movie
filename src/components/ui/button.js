import { cn } from "../../lib/utils"

const buttonVariants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    ghost: "hover:bg-secondary hover:text-foreground",
    outline: "border border-border bg-transparent hover:bg-secondary",
}

const buttonSizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 px-3 text-sm",
    lg: "h-11 px-8",
    icon: "h-10 w-10",
}

export function Button({ className, variant = "default", size = "default", children, ...props }) {
    return (
        <button
            className={cn(
                "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
                buttonVariants[variant],
                buttonSizes[size],
                className,
            )}
            {...props}
        >
            {children}
        </button>
    )
}
