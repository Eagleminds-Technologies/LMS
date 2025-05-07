import { cn } from "../../../utils/helpers";

const roleConfig = {
  "super-admin": {
    color: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
    icon: "👑"
  },
  admin: {
    color: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
    icon: "⚡"
  },
  "institute-admin": {
    color: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400",
    icon: "🏫"
  },
  teacher: {
    color: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
    icon: "📚"
  },
  student: {
    color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
    icon: "🎓"
  },
  staff: {
    color: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400",
    icon: "💼"
  },
  support: {
    color: "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-400",
    icon: "🎯"
  },
  guest: {
    color: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
    icon: "👋"
  }
};

export const RoleTag = ({ 
  role, 
  showIcon = true,
  size = "default",
  className,
  ...props 
}) => {
  // Convert role to lowercase and handle hyphenation
  const normalizedRole = role.toLowerCase().replace(/\s+/g, '-');
  const config = roleConfig[normalizedRole] || roleConfig.guest;
  
  // Convert role to display format (e.g., "institute-admin" -> "Institute Admin")
  const displayText = role
    .split(/[-\s]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md font-medium",
        size === "sm" && "px-2 py-0.5 text-xs",
        size === "default" && "px-2.5 py-0.5 text-sm",
        size === "lg" && "px-3 py-1 text-base",
        config.color,
        className
      )}
      {...props}
    >
      {showIcon && (
        <span className="mr-1" role="img" aria-label={displayText}>
          {config.icon}
        </span>
      )}
      {displayText}
    </span>
  );
};