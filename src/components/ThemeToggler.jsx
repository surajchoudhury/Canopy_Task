import React from "react";
import { ThemeContext } from "../App";
import { FaMoon } from "react-icons/fa";
import { BsSun } from "react-icons/bs";

const themeTogglerStyle = {
  cursor: "pointer",
  color: "#fff",
  fontSize:"1.5rem"
};
const ThemeToggler = () => {
  return (
    <ThemeContext.Consumer>
      {({ theme, setTheme }) => {
        return (
          <div
            style={{display:"flex", alignItems:"center"}}
            onClick={() => {
              setTheme(theme === "light" ? "dark" : "light");
            }}
          >
            {theme === "light" ? (
              <BsSun style={themeTogglerStyle} />
            ) : (
              <FaMoon style={themeTogglerStyle} />
            )}
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default ThemeToggler;
