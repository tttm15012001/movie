import { cn } from "../../lib/utils"

const badgeVariants = {
    default: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    outline: "border border-border bg-transparent",
}

export function Badge({ className, variant = "default", children, ...props }) {
    return (
        <div
            className={cn(
                "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors",
                badgeVariants[variant],
                className,
            )}
            {...props}
        >
            {children}
        </div>
    )
}
