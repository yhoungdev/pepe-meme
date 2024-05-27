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
    border: "5px solid #8cae4b",
    borderRadius: "15px",
  };

  const mobileBg = {
    backgroundImage: "url(updateImage.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const contractAddress = "0xdsf6cv1dsf89fsdfv456ds5f4d";
  const { copyToClipboard } = useClipboard(); 

  return (
    <div className="hero-bg">
      <Header />
      <div
        className="container flex flex-col-reverse md:flex-row
        gap-[3em] md:h-[80vh] items-center  justify-center w-full mx-auto text-center"
      >
        <div className="w-full md:w-[500px]">
          <div
            className=" hidden md:block rounded-xl h-[45vh]  mt-[2em]"
            style={bgStyle}
          ></div>
        </div>
        <div className="mt-[5em] md:mt-[10em] w- md:w-[600px] px-4">
          <h1
            className="text-3xl md:text-5xl font-bold uppercase
               title_element
               text-center md:text-left stroke-text text-transparent"
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

          <div className="mt-5 flex items-center  gap-2 w-fit  h-fit">
            <div className="px-4 py-2 bg-none border-2 border-brand-accent rounded-md flex items-center">
              <span className="text-md md:text-xl text-white">{contractAddress}</span>
            </div>
            <div
              className="rounded-md 
              p-3 bg-brand-accent cursor-pointer flex items-center
               justify-center bg-default"
              onClick={() => copyToClipboard(contractAddress)}
            >
              <MdCopyAll className="text-white" />
            </div>
          </div>

          </div>

          {/* <div className="flex justify-center md:justify-start">
            <Button className="mb-5 md:mb-0">Get Started</Button>
          </div> */}
        </div>
      </div>
      <div
        className="w-full md:hidden rounded-xl h-[50vh] md:h-[60vh]"
        style={mobileBg}
      ></div>
    </div>
  );
};

export default Hero;
