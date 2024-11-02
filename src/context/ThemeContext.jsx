// src/context/ThemeContext.jsx
import { createContext, useContext, useEffect, useState } from "react";

// 1️⃣ Create a Context
const ThemeContext = createContext();

// 2️⃣ Create a custom hook for easy context consumption
export const useTheme = () => useContext(ThemeContext);

// 3️⃣ Define the provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // Default theme is light

  useEffect(() => {
    document.body.className = theme; // Apply theme to body
  }, [theme]);

  // Toggle function to switch themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Pass the current theme and toggle function to the provider value
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
