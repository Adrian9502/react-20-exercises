import React from "react";
import useLocalStorage from "./useLocalStorage";
import "./theme.css";
function LightDarkMode() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <i>
          <p>Light & Dark Mode Toggle</p>
        </i>
        <p>Hello World!</p>
        <button onClick={handleToggleTheme}>Change Background</button>
      </div>
    </div>
  );
}

export default LightDarkMode;
