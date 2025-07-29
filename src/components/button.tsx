import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex gap-2 items-center justify-center rounded-lg font-medium hover:cursor-pointer transition-colors duration-300 ease-in-out",
  {
    variants: {
      variant: {
        primary: "bg-gray-500 text-white hover:bg-gray-600",
        secondary: "bg-gray-300 text-black hover:bg-gray-400",
        outline: "bg-transparent border border-gray-500 hover:bg-gray-200",
        ghost: "bg-transparent hover:bg-gray-200",
      },
      size: {
        md: "px-4 py-2",
        icon: "p-1",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? "span" : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button };
