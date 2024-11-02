// src/components/ThemeSwitcher.jsx
import { useTheme } from "../context/ThemeContext";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{ padding: "10px", textAlign: "center" }}>
      <h3>Current Theme: {theme}</h3>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "dark" : "light"} mode
      </button>
    </div>
  );
};

export default ThemeSwitcher;
