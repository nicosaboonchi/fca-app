import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      "px-3 py-2 border border-gray-500 rounded-lg outline-gray-300 focus:outline-4",
      className
    )}
    {...props}
  />
));

Input.displayName = "Input";

export { Input };
