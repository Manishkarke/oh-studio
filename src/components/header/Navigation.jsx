import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
function Navigation() {
  return (
    <>
      <nav className="navigation">
        <ul className="nav-items">
          <li className="nav-item">
            <NavLink to={"/"}>home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/profile"}>profile</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/contact"}>contact</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
