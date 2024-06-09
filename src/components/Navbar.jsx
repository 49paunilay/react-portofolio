import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center"></div>
      <div className="m-8 flex item-center justify-center gap-4 text-2xl">
        <Link to={"https://www.linkedin.com/in/nilay-paul-062521186/"}>
          <FaLinkedin />
        </Link>
        <Link to={"https://github.com/49paunilay"}>
          <FaGithub />
        </Link>
        <Link to={"https://www.instagram.com/nilay__paul/"}>
          <FaInstagram />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
