import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "lms-theme",
}) {
  // Initialize theme state from localStorage or default
  const [theme, setTheme] = useState(() => {
    // Check if we're in a browser environment
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem(storageKey);
      if (storedTheme) {
        return storedTheme;
      }
      
      // If theme is system, check user preference
      if (defaultTheme === "system") {
        return window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
      }
    }
    return defaultTheme;
  });

  // Apply the theme class to the document element
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const root = window.document.documentElement;
    
    // Remove both light and dark classes
    root.classList.remove("light", "dark");
    
    // Apply the appropriate theme class
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
  }, [theme]);

  // Listen for system preference changes when theme is set to "system"
  useEffect(() => {
    if (typeof window === 'undefined' || theme !== "system") return;
    
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    
    const handleChange = () => {
      const root = window.document.documentElement;
      root.classList.remove("light", "dark");
      root.classList.add(mediaQuery.matches ? "dark" : "light");
    };
    
    // Add event listener with browser compatibility
    try {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    } catch (err) {
      // Fallback for older browsers
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, [theme]);

  // Create the context value
  const value = {
    theme,
    setTheme: (newTheme) => {
      localStorage.setItem(storageKey, newTheme);
      setTheme(newTheme);
    },
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};