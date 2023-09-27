import React from "react";
import { Link } from "react-router-dom";

const NavLinks = (props) => {
  return (
    <li>
      <Link to={props.url}>{props.title}</Link>
    </li>
  );
};

export default NavLinks;
