import React, { useContext } from "react";
import { GiChart } from "react-icons/gi";
import { AiOutlineTable } from "react-icons/ai";
import { MdHome } from "react-icons/md";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import ThemeToggler from "./ThemeToggler";
import { ThemeContext } from "../App";
import AppTheme from "./AppThems";

const Header = (props) => {
  const {
    history: {
      location: { pathname },
    },
  } = props;

  const { theme } = useContext(ThemeContext);
  const headerStyle = AppTheme[theme];

  return (
    <header
      className={
        pathname === "/"
          ? theme === "light"
            ? "header-light"
            : "header-dark"
          : theme === "light"
          ? "header_2-light"
          : "header_2-dark"
      }
      style={headerStyle}
    >
      <div className="brand-box">
        <span>
          <Link to="/">
            <MdHome className="brand" />
          </Link>
        </span>
        <ThemeToggler />
      </div>
      <div className="brandbox_2" title="Switch View">
        {pathname === "/holdings" ? (
          <Link to="/networth">
            <GiChart className="brand_2" />
          </Link>
        ) : pathname === "/networth" ? (
          <Link to="/holdings">
            <AiOutlineTable className="brand_2" />
          </Link>
        ) : (
          ""
        )}
      </div>

      <div className={pathname === "/" ? "text-box" : "text-box-2"}>
        <h1
          className={pathname === "/" ? "heading-primary" : "heading-primary-2"}
        >
          <span className="heading-primary-main">
            {(pathname === "/" && "canopy") ||
              (pathname === "/holdings" && "holdings") ||
              (pathname === "/networth" && "networth")}
          </span>
        </h1>
      </div>
    </header>
  );
};

export default withRouter(Header);
