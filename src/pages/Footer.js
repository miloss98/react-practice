import React from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";

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
