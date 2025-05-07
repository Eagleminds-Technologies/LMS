import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Circle } from "lucide-react"
import { cn } from "../../utils/helpers"
import { Label } from "./Label";

const RadioGroup = React.forwardRef(({
  className,
  error,
  helperText,
  label,
  required,
  ...props
}, ref) => {
  const id = props.id || props.name;
  
  return (
    <div className="space-y-2">
      {label && (
        <Label 
          className="flex items-center space-x-1"
        >
          <span>{label}</span>
          {required && <span className="text-red-500">*</span>}
        </Label>
      )}
      
      <RadioGroupPrimitive.Root
        className={cn("grid gap-2", className)}
        {...props}
        ref={ref}
      />
      
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
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef(({ 
  className, 
  children, 
  disabled,
  label,
  ...props 
}, ref) => {
  const id = props.id || props.value;
  
  return (
    <div className="flex items-center space-x-2">
      <RadioGroupPrimitive.Item
        ref={ref}
        id={id}
        className={cn(
          "aspect-square h-4 w-4 rounded-full border border-gray-200 shadow",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/20",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
          "dark:border-gray-700 dark:data-[state=checked]:border-primary",
          className
        )}
        disabled={disabled}
        {...props}
      >
        <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
          <Circle className="h-2.5 w-2.5 fill-current text-current" />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
      {label && (
        <Label
          htmlFor={id}
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label}
        </Label>
      )}
    </div>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }