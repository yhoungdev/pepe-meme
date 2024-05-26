import React from "react";
import Button from "./micro/button";

const Hero = () => {
  const bgStyle = {
    backgroundImage: "url(updateImage.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    border: "5px solid white",
    borderRadius: "15px",
  };

  const mobileBg = {
    backgroundImage: "url(updateImage.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div>
      <div className="container flex flex-col-reverse md:flex-row
        gap-[3em] md:h-[80vh] items-center  justify-center w-full mx-auto text-center">
        <div
          className=" hidden md:block rounded-xl h-[40vh] w-[70%]  mt-[2em]"
          style={bgStyle}
        ></div>
        <div className="mt-[5em] md:mt-[10em] w- md:w-[80%] px-4">
          <h1
            className="text-3xl md:text-5xl font-bold uppercase title_element default-text text-center md:text-left"
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

          <div className="flex justify-center md:justify-start">
            <Button className="mb-5 md:mb-0">Get Started</Button>
          </div>
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
