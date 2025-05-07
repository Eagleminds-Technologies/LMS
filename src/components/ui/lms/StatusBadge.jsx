import { cn } from "../../../utils/helpers";

const statusConfig = {
  active: {
    color: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
    dotColor: "bg-green-500"
  },
  pending: {
    color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
    dotColor: "bg-yellow-500"
  },
  blocked: {
    color: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
    dotColor: "bg-red-500"
  },
  inactive: {
    color: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
    dotColor: "bg-gray-500"
  },
  expired: {
    color: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
    dotColor: "bg-red-500"
  },
  trial: {
    color: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
    dotColor: "bg-blue-500"
  },
  paid: {
    color: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
    dotColor: "bg-green-500"
  },
  unpaid: {
    color: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
    dotColor: "bg-red-500"
  },
  overdue: {
    color: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
    dotColor: "bg-red-500"
  },
  "in-progress": {
    color: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
    dotColor: "bg-blue-500"
  },
  completed: {
    color: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
    dotColor: "bg-green-500"
  },
  cancelled: {
    color: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
    dotColor: "bg-red-500"
  }
};

export const StatusBadge = ({ 
  status, 
  showDot = true,
  size = "default",
  className,
  ...props 
}) => {
  const config = statusConfig[status.toLowerCase()] || statusConfig.inactive;
  const displayText = status.charAt(0).toUpperCase() + status.slice(1);

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full font-medium",
        size === "sm" && "px-2 py-0.5 text-xs",
        size === "default" && "px-2.5 py-0.5 text-sm",
        size === "lg" && "px-3 py-1 text-base",
        config.color,
        className
      )}
      {...props}
    >
      {showDot && (
        <span
          className={cn(
            "mr-1.5 h-1.5 w-1.5 rounded-full",
            config.dotColor
          )}
        />
      )}
      {displayText}
    </span>
  );
};