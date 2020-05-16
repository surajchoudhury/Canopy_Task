import React from "react";
import { IoIosArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";
const Card = (props) => {
  const { title, src, desc } = props;
  return (
    <div className="card">
      <img src={src} alt="" srcSet="" />
      <div className="info">
        <h1>{title}</h1>
        <p>{desc}</p>
        <span>
          <IoIosArrowDropright className="arrow" />
        </span>
      </div>
    </div>
  );
};

const LandingPage = (props) => {
  return (
    <div>
      <div className="wrapper">
        <Link to="/holdings" className="link">
          <Card
            src={"/table.png"}
            title={"Holdings Table"}
            desc={
              "Group your current and past holdings by the custodian, asset class, industry, and many more."
            }
          />
        </Link>

        <Link to="/networth" className="link">
          <Card
            src={"chart.png"}
            title={"Networth Line Chart"}
            desc={
              "Line graph connects individual data points that, typically, display quantitative values over a specified time interval."
            }
          />
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
