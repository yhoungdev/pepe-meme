import React from "react";
import { FaTelegram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white p-4 flex flex-col md:flex-row justify-between items-center container mx-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between w-full md:w-auto mb-4 md:mb-0">
        <a href="/">
          <img
            src="/updateImage.jpg"
            alt="Logo"
            width={"65"}
            className="rounded-full"
          />
        </a>
      </div>
      {/* <div className="flex flex-wrap justify-center mb-4 md:mb-0 w-full md:w-auto">
        {navLinks.map((link, index) => (
          <a
            key={index}
            href={link.path}
            className="text-white px-4 py-2 hover:underline text-xl"
          >
            {link.name}
          </a>
        ))}
      </div> */}
      <p className="text-center my-2">
        Copyright stormy.vip © 2024. All rights reserved
      </p>
      <div className="flex items-center justify-center w-full md:w-auto">
        <a
          href="https://x.com/stormybase"
          target="_bank"
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

        {/* <a href="https://basescan.org/address/0xd7d451FD20D295d4447c28AbbB706085C1a73f4c#code" target="_blank" class="inverted-link">
    <img src="/icons/base-logo.svg" height="100" width="100" alt="base image" className="inverted-img" />
</a> */}

      </div>
    </footer>
  );
};

export default Footer;
