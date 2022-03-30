import React from "react";
import { Link } from "react-router-dom";
import About from "./../pages/About";
import Contact from "./../pages/Contact";

const Navbar = () => {
  return (
    <article>
      <ul>
        <li>
          <Link to="/" element={<About />}>
            {" "}
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" element={<About />}>
            {" "}
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" element={<Contact />}>
            {" "}
            Contact us
          </Link>
        </li>
      </ul>
    </article>
  );
};

export default Navbar;
