import HomeBanner from "./components/HomeBanner";
import Navbar from "./components/Navbar";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { ThemeProvider } from "./context/ThemeContext";
import "./index.css";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <HomeBanner />
        <ThemeSwitcher />
      </div>
    </ThemeProvider>
  );
}

export default App;
