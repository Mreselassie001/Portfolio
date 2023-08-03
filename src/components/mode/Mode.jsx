import React, { useContext } from "react";
import "./mode.css";
import { ThemeContext } from "../theme/ThemeContext";

const Mode = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="toggle-switch">
      <label className="switch-label">
        <input
          type="checkbox"
          className="checkbox"
          checked={theme === "night"}
          onChange={toggleTheme}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default Mode;
