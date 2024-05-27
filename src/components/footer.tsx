import React from "react";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import navLinks from "../utils";

const Footer = () => {
  return (
    <footer className="text-white p-4 flex flex-col md:flex-row justify-between items-center container mx-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between w-full md:w-auto mb-4 md:mb-0">
        <a href="/">
        <img src="/updateImage.jpg" alt="Logo" width={"65"} className="rounded-full" />
        </a>
      </div>
      <div className="flex flex-wrap justify-center mb-4 md:mb-0 w-full md:w-auto">
        {navLinks.map((link, index) => (
          <a
            key={index}
            href={link.path}
            className="text-white px-4 py-2 hover:underline text-xl"
          >
            {link.name}
          </a>
        ))}
      </div>
      <div className="flex items-center justify-center w-full md:w-auto">
        <a href="" className="text-white px-2">
          <FaDiscord size={24} />
        </a>
        <a href="" className="text-white px-2">
          <FaTwitter size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
