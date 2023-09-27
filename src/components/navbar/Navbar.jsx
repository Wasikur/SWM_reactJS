import React, { useState } from "react";
import "./NavbarStyles.css";
import { Link } from "react-router-dom";
import logo from "../../assets/Rhino_tech_logo.png";
import items from "./NavItems";
import NavLinks from "./NavLinks";

function createNav(nav) {
  return <NavLinks id={nav.id} key={nav.id} title={nav.title} url={nav.url} />;
}

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav>
      <Link to="/">
        <img src={logo} width="100" height="100" alt="logo" />
      </Link>
      <div className="nav-links" id="navLinks">
        <div className="menu-icons">
          <i
            className={clicked ? "fas fa-times" : "fas fa-bars"}
            onClick={handleClick}
          ></i>
        </div>
        <ul
          className={clicked ? "nav-menu active" : "nav-menu"}
          onClick={handleClick}
        >
          {items.map(createNav)}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
