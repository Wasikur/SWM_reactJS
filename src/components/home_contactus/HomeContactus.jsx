import React from "react";
import "./HomeContactusStyles.css";
import { Link } from "react-router-dom";

const HomeContactus = () => {
  return (
    <>
      <h1>
        Contact us for further information
        <br />
        Anywhere from the World
      </h1>
      <Link to="/contact" className="hero-btn">
        CONTACT US
      </Link>
    </>
  );
};

export default HomeContactus;
