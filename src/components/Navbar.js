import React from "react";
import { NavLink } from "react-router-dom";
import About from "./../pages/About";
import Contact from "./../pages/Contact";
import "./../styles/navlinkstyles.css";

const Navbar = () => {
  return (
    <article>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "link")}
            element={<About />}
          >
            {" "}
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "link")}
            element={<About />}
          >
            {" "}
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "link")}
            element={<Contact />}
          >
            {" "}
            Contact us
          </NavLink>
        </li>
      </ul>
    </article>
  );
};

export default Navbar;
