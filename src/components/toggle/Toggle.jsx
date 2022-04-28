import React from "react";
import "./toggle.css";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="t">
      <img
        src="https://raw.githubusercontent.com/Rush/Font-Awesome-SVG-PNG/master/black/svg/sun-o.svg"
        alt=""
        className="t-icon"
      />
      <img
        src="https://raw.githubusercontent.com/Rush/Font-Awesome-SVG-PNG/master/black/svg/moon-o.svg"
        alt=""
        className="t-icon"
      />
      <div
        className="t-button"
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : 25 }}
      ></div>
    </div>
  );
};

export default Toggle;
