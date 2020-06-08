import React, { useContext } from "react";
import { ThemeContext } from "../App";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <footer className={theme === "light" ? "footer-light" : "footer-dark"}>
      <small>&#xa9; Suraj Kumar choudhury</small>
    </footer>
  );
};

export default Footer;
