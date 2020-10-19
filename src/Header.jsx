import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <nav id="navbar" className="ui fixed inverted menu">
      <div className="ui container">
        <Link id="header" className="header item" to="/">
          Sebastian Niewiadomski
        </Link>
        <div className="right menu">
          <NavLink
            id="projects-tab"
            className="ui item"
            activeStyle={{ fontWeight: "bold" }}
            to="/projects"
          >
            Projects
          </NavLink>
          <NavLink
            id="cv-tab"
            className="ui item"
            activeStyle={{ fontWeight: "bold" }}
            to="/cv"
          >
            CV
          </NavLink>
          <NavLink
            id="experience-tab"
            className="ui item"
            activeStyle={{ fontWeight: "bold" }}
            to="/experience"
          >
            Experience
          </NavLink>
          <NavLink
            id="contact-tab"
            className="ui item"
            activeStyle={{ fontWeight: "bold" }}
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
