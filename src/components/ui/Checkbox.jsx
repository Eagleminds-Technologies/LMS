import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check, Minus } from "lucide-react"
import { cn } from "../../utils/helpers"
import { Label } from "./Input"

const Checkbox = React.forwardRef(({
  className,
  checked,
  label,
  error,
  helperText,
  required,
  indeterminate,
  disabled,
  ...props
}, ref) => {
  const id = props.id || props.name;
  
  return (
    <div className="space-y-2">
      <div className="flex items-start space-x-2">
        <CheckboxPrimitive.Root
          ref={ref}
          id={id}
          className={cn(
            "peer h-4 w-4 shrink-0 rounded-sm border border-gray-200 shadow",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "data-[state=checked]:bg-primary data-[state=checked]:text-white data-[state=checked]:border-primary",
            "dark:border-gray-700 dark:data-[state=checked]:bg-primary dark:data-[state=checked]:border-primary",
            error && "border-red-500 focus-visible:ring-red-500/20",
            className
          )}
          checked={checked}
          disabled={disabled}
          {...props}
        >
          <CheckboxPrimitive.Indicator className={cn("flex items-center justify-center text-current")}>
            {indeterminate ? (
              <Minus className="h-3 w-3" />
            ) : (
              <Check className="h-3 w-3" />
            )}
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
        
        {label && (
          <div className="flex items-center gap-1">
            <Label
              htmlFor={id}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {label}
            </Label>
            {required && <span className="text-red-500">*</span>}
          </div>
        )}
      </div>
      
      {(error || helperText) && (
        <p 
          id={helperText ? `${id}-description` : undefined}
          className={cn(
            "text-xs pl-6",
            error ? "text-red-500" : "text-gray-500 dark:text-gray-400"
          )}
        >
          {error || helperText}
        </p>
      )}
    </div>
  )
})
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }