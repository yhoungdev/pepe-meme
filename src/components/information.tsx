import React from "react";
import ContactUs from "./micro/contactUs";
import { FaDiscord , FaTwitter } from "react-icons/fa";
const Information = () => {
  return (
    <div className="bg-brown-800  px-3 text-white text-center py-12 min-h-screen flex flex-col justify-center w-full md:w-[800px] mx-auto">
      <h2
        className="text-3xl lg:text-5xl text-center font-bold mb-[1.5em] title_element default-text"
        data-aos="fade-up"
      >
        CRYPTO MEME RAMPAGE STARTS TODAY!
      </h2>

      <div
        className=" flex items-center mx-auto rounded-lg shadow-lg w-full md:w-[500px]  text-center"
        // style={{
        //   backgroundRepeat: "no-repeat",
        //   backgroundSize: "center",
        //   backgroundPosition: "center",
        //   backgroundImage: "url(/bg/cat.jpeg)",
        // }}
      >
       <ContactUs/>
      </div>

      <div className="flex justify-center w-full md:w-auto">
        <a
          href="https://discord.com/invite/HMuZdJE6Er"
          className="text-white px-2"
          target="_blank"
        >
          <FaDiscord size={24} />
        </a>
        <a href="https://twitter.com/TRUMP PEPECoinSTX" className="text-white px-2"  target="_blank">
          <FaTwitter size={24} />
        </a>

        <div className="w-[25px] h-[25px] ml-2 cursor-pointer">
          <a href="https://zealy.io/c/TRUMP PEPEcoinstx" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              role="img"
            >
              <g clip-path="url(#clip0_4401_53494)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.50019 2.57855L0.616863 2.53178L0.612862 3.42386L0.612415 3.60983C0.61215 3.7547 0.611799 4.00477 0.611447 4.42608C0.610743 5.2687 0.61004 6.79671 0.61004 9.53869V9.89091L1.65667 10.9465C1.24225 11.2094 0.825878 11.4694 0.407595 11.7263L0.00327539 11.9746L0 17.8553L4.82763 22.7272L5.14455 22.7481C11.0682 23.1384 17.1604 22.7054 22.8683 20.7193L23.4365 20.5217V13.4551L22.2016 12.2097C22.412 12.0003 22.6219 11.789 22.8303 11.5765L23.0739 11.328V10.9786C23.0739 10.7374 23.0746 9.47435 23.0753 8.27107L23.0769 5.57283L18.1045 0.557983L17.6096 0.725198C12.4705 2.46147 6.95867 2.8676 1.50019 2.57855ZM17.8774 1.53148L22.2336 5.92483C22.2336 5.92483 22.2308 10.4955 22.2308 10.9786C22.0237 11.1898 21.8149 11.3999 21.6054 11.6085C21.4048 11.8082 21.2035 12.0065 21.0024 12.2028L22.5933 13.8074V19.9155C17.0227 21.8538 11.05 22.285 5.19951 21.8996L0.843329 17.5034L0.846143 12.4525C1.32251 12.1599 1.79648 11.8634 2.26796 11.563C2.51128 11.4079 2.75393 11.2518 2.99591 11.0946L1.45317 9.53869C1.45317 6.62828 1.45397 5.08585 1.45471 4.27912C1.45537 3.56583 1.45599 3.42771 1.45599 3.42771C1.73675 3.44258 2.01777 3.45563 2.299 3.4668C7.55129 3.67525 12.8739 3.22195 17.8774 1.53148Z"
                  fill="#fff"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.8773 1.53149C12.606 3.31247 6.98032 3.72025 1.45592 3.42772C1.45592 3.42772 1.45311 4.05496 1.45311 9.53871L2.99585 11.0946C2.28496 11.5564 1.56828 12.009 0.846075 12.4525L0.843262 17.5034L5.19944 21.8996C11.05 22.2851 17.0226 21.8538 22.5933 19.9155V13.8074L21.0023 12.2029C21.4133 11.8014 21.8253 11.3921 22.2307 10.9786C22.2307 10.4956 22.2335 5.92484 22.2335 5.92484L17.8773 1.53149ZM20.5444 10.596V8.14705L20.5416 8.14421C16.7475 9.21279 12.9534 9.6181 9.15933 9.6181C8.60287 9.6181 8.04919 9.6096 7.49273 9.5926V12.3023C8.05482 12.3193 8.61409 12.3278 9.17618 12.3278C11.1294 12.3278 13.0827 12.2201 15.036 11.9678C12.3211 14.1702 9.60339 16.0947 6.8857 17.8379V20.2868C7.64452 20.318 8.40333 20.335 9.16215 20.335C13.0771 20.335 16.992 19.9014 20.9098 18.7563V16.0466C18.0684 16.8742 15.2327 17.3305 12.3942 17.5205C15.109 15.4882 17.8267 13.2093 20.5444 10.596Z"
                  fill="#0D0D0D"
                />
                <path
                  d="M20.5445 8.147V10.5959C17.8268 13.2093 15.1091 15.4881 12.3942 17.5204C15.2327 17.3305 18.0685 16.8742 20.9098 16.0465C20.9098 16.9507 20.9098 17.852 20.9098 18.7562C16.9921 19.9013 13.0771 20.335 9.16219 20.335C8.40337 20.335 7.64456 20.318 6.88574 20.2868V17.8379C9.60344 16.0947 12.3211 14.1701 15.036 11.9678C13.0828 12.2201 11.1295 12.3278 9.17622 12.3278C8.61414 12.3278 8.05486 12.3193 7.49277 12.3022C7.49277 11.3981 7.49277 10.4967 7.49277 9.59255C8.04924 9.60955 8.60291 9.61805 9.15938 9.61805C12.9535 9.61805 16.7476 9.21274 20.5417 8.14417L20.5445 8.147Z"
                  fill="#fff"
                />
              </g>
              <defs>
                <clipPath id="clip0_4401_53494">
                  <rect width="23.4365" height="23.4365" fill="#fff" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Information;
