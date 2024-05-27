//@ts-nocheck
import React, { useState, useEffect } from "react";
import { FaBars, FaTelegram, FaTwitter } from "react-icons/fa";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleNavLinkClick = (link) => {
    setActiveLink(link.name);
    setIsSidebarOpen(false);
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

  const navLinks = [
    { name: "Home", path: "#" },
    { name: "About", path: "#about" },
    { name: "Tokenomics", path: "#tokenomics" },
    { name: "Roadmap", path: "#roadmap" },
  ];

  useEffect(() => {
    // Set active link based on current location hash
    const hash = window.location.hash;
    const activeLink = navLinks.find((link) => link.path === hash);
    if (activeLink) {
      setActiveLink(activeLink.name);
    }
  }, []);

  return (
    <>
      <header className="bg-cover bg-center p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <a href="/">
              <img
                src="/updateImage.jpg"
                alt="Logo"
                width="65"
                className="rounded-full"
              />
            </a>
          </div>
          <div className="hidden md:flex items-center">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.path}
                onClick={() => handleNavLinkClick(link)}
                className={`text-black font-bold px-4 py-2 hover:underline text-xl ${
                  activeLink === link.name ? "text-white" : ""
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="hidden md:flex justify-center w-full md:w-auto items-center">
            <a
              href="https://x.com/stormybase"
              target="_blank"
              className="text-white px-2"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://t.me/StormyCoinBase"
              target="_blank"
              className="text-white px-2"
            >
              <FaTelegram size={24} />
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

      <div style={sidebarStyle} className="text-center">
        <div className="flex items-center h-[80%] flex-col justify-center gap-[4em] text-1xl">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.path}
              onClick={() => handleNavLinkClick(link)}
              className={`block py-2 text-white ${
                activeLink === link.name ? "text-green-500" : ""
              }`}
            >
              {link.name}
            </a>
          ))}

          <div className="flex items-start justify-center">
            <a
              href="https://x.com/stormybase"
              target="_blank"
              className="text-white px-2"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://t.me/StormyCoinBase"
              target="_blank"
              className="text-white px-2"
            >
              <FaTelegram size={24} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
