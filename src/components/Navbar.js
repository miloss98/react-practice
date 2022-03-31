import React from "react";
import { NavLink } from "react-router-dom";
import About from "./../pages/About";
import Contact from "./../pages/Contact";

const Navbar = () => {
  return (
    <article>
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => {
              return { color: isActive ? "red" : "black" };
            }}
            element={<About />}
          >
            {" "}
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            style={({ isActive }) => {
              return {
                color: isActive ? "red" : "black",
              };
            }}
            element={<About />}
          >
            {" "}
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            style={({ isActive }) => {
              return {
                color: isActive ? "red" : "black",
              };
            }}
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
