import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import About from './components/About';
import Techs from './components/Techs';
import Menu from './components/Menu';
import { createContext, useState,useEffect } from 'react';
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

function App() {

  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((actual) => (actual === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
    <Menu/>
    <div className="switch">
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
    <Main/>
    <About />
    <Techs />
  </div>
  </ThemeContext.Provider>
  );
}

export default App;
