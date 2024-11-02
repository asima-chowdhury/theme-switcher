import { useEffect } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import ThemeSwitcher from './components/ThemeSwitcher';
import './index.css';

function AppContent() {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = theme; // Apply theme to body
  }, [theme]);

  return (
    <div className="App">
      <h1>Theme Switcher App</h1>
      <ThemeSwitcher />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
