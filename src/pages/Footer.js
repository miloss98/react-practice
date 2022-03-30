import React from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";

const Footer = () => {
  return (
    <div>
      <div>This is Footer</div>
      <Link to="/about" element={<About />} />
      <Link to="/contact" element={<Contact />} />
    </div>
  );
};

export default Footer;
