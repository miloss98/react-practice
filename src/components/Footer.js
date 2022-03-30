import React from "react";
import { Link } from "react-router-dom";
import About from "./../pages/About";
import Contact from "./../pages/Contact";
const Footer = () => {
  return (
    <div>
      <div>This is Footer</div>
      <Link to="/about" element={<About />}>
        {" "}
        About us{" "}
      </Link>
      <Link to="/contact" element={<Contact />}>
        {" "}
        Contact us
      </Link>
    </div>
  );
};

export default Footer;
