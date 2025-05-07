import React, { useState, useEffect } from 'react';
import { cn } from '../../utils/helpers';

const Tabs = React.forwardRef(({ className, value, defaultValue, onValueChange, children, ...props }, ref) => {
  // Internal state for controlled/uncontrolled usage
  const [selectedTab, setSelectedTab] = useState(value || defaultValue || "");
  
  // Update internal state when value prop changes
  useEffect(() => {
    if (value !== undefined) {
      setSelectedTab(value);
    }
  }, [value]);
  
  // Handle tab changes
  const handleValueChange = (newValue) => {
    if (value === undefined) {
      // In uncontrolled mode, update internal state
      setSelectedTab(newValue);
    }
    
    // Call the provided onValueChange handler if it exists
    if (onValueChange) {
      onValueChange(newValue);
    }
  };
  
  // Clone children to pass selectedTab and handler
  const childrenWithProps = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;
    
    if (child.type.displayName === "TabsList") {
      return React.cloneElement(child, {
        children: React.Children.map(child.props.children, (tabChild) => {
          if (!React.isValidElement(tabChild) || tabChild.type.displayName !== "TabsTrigger") {
            return tabChild;
          }
          
          const tabValue = tabChild.props.value;
          return React.cloneElement(tabChild, {
            active: selectedTab === tabValue,
            onClick: (e) => {
              tabChild.props.onClick?.(e);
              handleValueChange(tabValue);
            },
            "aria-selected": selectedTab === tabValue
          });
        })
      });
    }
    
    if (child.type.displayName === "TabsContent") {
      return React.cloneElement(child, {
        active: selectedTab === child.props.value
      });
    }
    
    return child;
  });
  
  return (
    <div className={cn("w-full", className)} ref={ref} {...props}>
      {childrenWithProps}
    </div>
  );
});

Tabs.displayName = "Tabs";

const TabsList = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-lg bg-gray-100 p-1 text-gray-600 dark:bg-gray-800 dark:text-gray-400",
        className
      )}
      {...props}
    />
  );
});

TabsList.displayName = "TabsList";

const TabsTrigger = React.forwardRef(({ className, active, value, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-900 dark:focus-visible:ring-gray-800",
        active || props["aria-selected"]
          ? "bg-white text-gray-900 shadow-sm dark:bg-gray-900 dark:text-gray-100"
          : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100",
        className
      )}
      {...props}
    />
  );
});

TabsTrigger.displayName = "TabsTrigger";

const TabsContent = React.forwardRef(({ className, active, value, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 dark:ring-offset-gray-900 dark:focus-visible:ring-gray-800",
        active || props["aria-selected"] ? "block" : "hidden",
        className
      )}
      {...props}
    />
  );
});

TabsContent.displayName = "TabsContent";

export { Tabs, TabsList, TabsTrigger, TabsContent };