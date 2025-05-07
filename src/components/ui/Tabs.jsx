import React from 'react';
import { cn } from '../../utils/helpers';

const Tabs = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div className={cn("w-full", className)} ref={ref} {...props} />
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

const TabsTrigger = React.forwardRef(({ className, active, ...props }, ref) => {
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

const TabsContent = React.forwardRef(({ className, active, ...props }, ref) => {
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