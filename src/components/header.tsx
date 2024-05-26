//@ts-nocheck
import React, { useState } from "react";
import { FaBars, FaDiscord, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const sidebarStyle = {
    position: "fixed",
    top: 0,
    left: isSidebarOpen ? 0 : "-100%",
    width: "60%",
    height: "100%",
    backgroundColor: "#000000cf",
    transition: "left 0.3s ease",
    padding: "1rem",
    boxSizing: "border-box",
    zIndex: 1000,
  };

  return (
    <>
      <header className="bg-cover bg-center p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <a href="/">
              <img src="/logo.png" alt="Logo" width={"65"} />
            </a>
          </div>
          <div className="hidden md:flex items-center">
            <Link
              to="/"
              className="text-black font-bold px-4 py-2 hover:underline  text-xl"
            >
              Home
            </Link>
            <Link
              to="/roadmap"
              className="text-black font-bold  px-4 py-2 hover:underline  text-xl"
            >
              Road Map
            </Link>
            <Link
              to="/utility"
              className="text-black font-bold  px-4 py-2 hover:underline  text-xl"
            >
              Token Utility
            </Link>
          </div>
          <div className="hidden md:flex justify-center w-full md:w-auto items-center">
            <a
              href=""
              className="text-white px-2"
            >
              <FaDiscord size={24} />
            </a>
            <a
              href=""
              className="text-white px-2"
            >
              <FaTwitter size={24} />
            </a>
          </div>
          <div
            onClick={toggleSidebar}
            className="bg-[#013b0142] h-[50px] w-[50px] flex justify-center items-center rounded-full cursor-pointer md:hidden"
          >
            <FaBars color="white" />
          </div>
        </nav>
      </header>

      <div style={sidebarStyle} className="text-center ">
        <div className="flex items-center h-[80%] flex-col justify-center gap-[4em] text-1xl">
          <Link to="/roadmap" className="block py-2 text-white">
            Road Map
          </Link>
          <Link to="/utility" className="block py-2 text-white">
            Token Utility
          </Link>
          <a
            href="https://docs.memeTRUMP PEPE.io/"
            className="block py-2 text-white"
          >
            Documentation
          </a>
          <div className="flex items-start justify-center">
            <a
              href=""
              className="text-white px-2"
            >
              <FaDiscord size={24} />
            </a>
            <a
              href=""
              className="text-white px-2"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
