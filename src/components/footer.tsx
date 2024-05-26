import React from "react";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" text-white p-4 flex flex-col md:flex-row justify-between items-center container mx-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between w-full md:w-auto mb-4 md:mb-0">
        <a href="/">
          <img src="/logo.png" width={"65"} />
        </a>
      </div>
      <div className="flex flex-wrap justify-center mb-4 md:mb-0 w-full md:w-auto">
        <Link
          to="/roadmap"
          className="text-white px-4 py-2 hover:underline title_element default-text text-xl"
        >
          Road Map
        </Link>

        <Link
          to="/utility"
          className="text-white px-4 py-2 hover:underline title_element default-text text-xl"
        >
          Token Utility
        </Link>

        <a
          href="https://docs.memeTRUMP PEPE.io/"
          className="text-white px-4 py-2 hover:underline title_element default-text text-xl"
        >
          Documentation
        </a>
      </div>
    </footer>
  );
};

export default Footer;
