import { useTheme } from '../context/ThemeContext';

function HomeBanner() {
  const { theme } = useTheme();

  return (
    <div className={`home-banner ${theme}`}>
      <h1>Welcome to the Theme Switcher App!</h1>
      <p>Switch between light and dark modes easily.</p>
    </div>
  );
}

export default HomeBanner;
