import React, { forwardRef } from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cn } from "../../utils/helpers";

const Label = React.forwardRef(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className
    )}
    {...props}
  />
));
Label.displayName = "Label";

const Input = forwardRef(({
  className,
  type = "text",
  label,
  error,
  icon: Icon,
  iconPosition = "left",
  required,
  disabled = false,
  helperText,
  ...props
}, ref) => {
  const id = props.id || props.name;
  const iconClasses = Icon ? (
    iconPosition === "left" ? "pl-10" : "pr-10"
  ) : "";

  return (
    <div className="space-y-2 w-full">
      {label && (
        <Label 
          htmlFor={id}
          className="flex items-center space-x-1 text-gray-700 dark:text-gray-300"
        >
          <span>{label}</span>
          {required && <span className="text-red-500">*</span>}
        </Label>
      )}
      
      <div className="relative">
        {Icon && iconPosition === "left" && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 pointer-events-none">
            <Icon size={18} />
          </div>
        )}
        
        <input
          type={type}
          id={id}
          className={cn(
            "flex h-10 w-full rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-gray-100",
            "placeholder:text-gray-400 dark:placeholder:text-gray-500",
            "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary dark:focus:ring-primary/30",
            "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-50 dark:disabled:bg-gray-900",
            error && "border-red-500 focus:border-red-500 focus:ring-red-500/20",
            iconClasses,
            className
          )}
          disabled={disabled}
          ref={ref}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={helperText ? `${id}-description` : undefined}
          {...props}
        />
        
        {Icon && iconPosition === "right" && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 pointer-events-none">
            <Icon size={18} />
          </div>
        )}
      </div>
      
      {(error || helperText) && (
        <p 
          id={helperText ? `${id}-description` : undefined}
          className={cn(
            "text-xs",
            error ? "text-red-500" : "text-gray-500 dark:text-gray-400"
          )}
        >
          {error || helperText}
        </p>
      )}
    </div>
  );
});

Input.displayName = "Input";

export { Input, Label };