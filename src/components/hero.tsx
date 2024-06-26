import React from "react";
import Header from "../components/header";
import { useClipboard } from "../hooks/useClipBoard";
import { MdCopyAll } from "react-icons/md";

const Hero = () => {
  const bgStyle = {
    backgroundImage: "url(updateImage.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    borderRadius: "15px",
  };

  const mobileBg = {
    backgroundImage: "url(updateImage.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const contractAddress = "0xd7d451FD20D295d4447c28AbbB706085C1a73f4c";
  const { copyToClipboard } = useClipboard();

  return (
    <div className="hero-bg">
      <Header />
      <div
        className="container flex flex-col-reverse md:flex-row 
          gap-[3em] md:h-[86vh] items-center justify-center w-full mx-auto text-center"
      >
        <div className="w-full md:w-[500px]">
          <div
            className=" md:block rounded-xl h-[45vh]  my-[2em] md:m-0"
            style={bgStyle}
          ></div>
        </div>
        <div className="mt-[5em] md:mt-[10em] w-full md:w-[600px] px-4">
          <h1
            className="text-3xl md:text-5xl font-bold uppercase title_element text-center md:text-left stroke-text text-transparent"
            style={{
              lineHeight: 1.3,
            }}
          >
            Welcome to the world of Stormy
          </h1>

          <p className="my-3 text-white text-center md:text-left">
            Welcome to the world of Stormy, the meme coin that combines humor,
            history, and a dash of scandal to create an exciting and engaging
            cryptocurrency experience. Born from one of the most sensational and
            talked-about scandals in recent history, Stormy offers more than
            just a financial opportunity—it’s a chance to be part of a cultural
            phenomenon.
          </p>

          <div className="flex items-center">
            <div className="mt-5 flex items-center gap-2 w-fit h-fit">
              <div className="px-4 py-2 bg-white border-2 border-brand-accent rounded-md flex items-center">
                <span className="text-sm md:text-xl text-black flex break-all">
                  {contractAddress}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
