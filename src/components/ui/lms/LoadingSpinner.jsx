import { cn } from "../../../utils/helpers";

const sizes = {
  sm: "h-4 w-4",
  default: "h-6 w-6",
  lg: "h-8 w-8",
  xl: "h-12 w-12"
};

export const LoadingSpinner = ({
  size = "default",
  className,
  fullScreen = false,
  text,
  ...props
}) => {
  const Spinner = () => (
    <div
      className={cn(
        "inline-block animate-spin rounded-full border-2 border-current border-t-transparent",
        "text-primary/60 dark:text-primary/40",
        sizes[size],
        className
      )}
      role="status"
      aria-label="loading"
      {...props}
    >
      <span className="sr-only">Loading...</span>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <div className="flex flex-col items-center space-y-4">
          <Spinner />
          {text && (
            <p className="text-sm text-gray-500 dark:text-gray-400">{text}</p>
          )}
        </div>
      </div>
    );
  }

  return <Spinner />;
};