import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function NavBar() {
  return (
    <div className="navContainer">
      <ul className="navList">
        <Link to="/count" className="navLink">
          <li>Counter</li>
        </Link>
        <Link to="/" className="navLink">
          <li>Example</li>
        </Link>
        <Link to="/" className="navLink">
          <li>Example</li>
        </Link>
      </ul>
    </div>
  );
}

export default NavBar;
