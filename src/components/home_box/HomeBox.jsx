import React from "react";
import { Link } from "react-router-dom";
import "./Home_boxStyles.css";

const HomeBox = () => {
  return (
    <div className="test-box">
      <h1>Rhino Tech Waste Foundation</h1>
      <br />
      This is the first solid waste management plant in Assam. It is located in
      Dibrugarh district of Upper Assam.
      <br />
      <br />
      <br />
      <br />
      <Link to="/about" className="hero-btn">
        Visit Us To know More
      </Link>
    </div>
  );
};

export default HomeBox;
