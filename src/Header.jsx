import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <nav id="navbar" className="ui fixed inverted menu">
      <div className="ui container">
        <Link id="header" className="header item" to="/">
          Connor Roelofsen
        </Link>
        <div className="right menu">
          <NavLink
            id="myprojects-tab"
            className="ui item"
            activeStyle={{ fontWeight: "bold" }}
            to="/myprojects"
          >
            My Projects
          </NavLink>

          <NavLink
            id="contactme-tab"
            className="ui item"
            activeStyle={{ fontWeight: "bold" }}
            to="/contactme"
          >
            Contact Me
          </NavLink>

          <NavLink
            id="comingsoon-tab"
            className="ui item"
            activeStyle={{ fontWeight: "bold" }}
            to="/pdfviewer"
          >
            CV
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
