import { useTheme } from "./theme-provider";
import { Moon, Sun, Laptop } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center space-x-1 p-1 rounded-md bg-gray-100 dark:bg-gray-800">
      <button
        onClick={() => setTheme("light")}
        className={`p-2 rounded-md ${
          theme === "light" ? "bg-white dark:bg-gray-700 shadow-sm" : ""
        }`}
        aria-label="Light mode"
      >
        <Sun size={18} className="text-yellow-500" />
      </button>
      
      <button
        onClick={() => setTheme("dark")}
        className={`p-2 rounded-md ${
          theme === "dark" ? "bg-white dark:bg-gray-700 shadow-sm" : ""
        }`}
        aria-label="Dark mode"
      >
        <Moon size={18} className="text-blue-500" />
      </button>
      
      <button
        onClick={() => setTheme("system")}
        className={`p-2 rounded-md ${
          theme === "system" ? "bg-white dark:bg-gray-700 shadow-sm" : ""
        }`}
        aria-label="System theme"
      >
        <Laptop size={18} className="text-gray-500 dark:text-gray-400" />
      </button>
    </div>
  );
}