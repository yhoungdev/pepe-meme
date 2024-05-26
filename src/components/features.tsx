import React from "react";

const Feature = () => {
  return (
    <div className="bg-brown-600 min-h-screen flex flex-col items-center justify-center text-center p-4">
      <h2
        className="text-5xl md:text-6xl text-white mb-10 title_element default-text "
        data-aos="fade-up"
      >
        PROJECT UTILITY
      </h2>
      {/* <p className="text-lg text-gray-200 mb-12" data-aos="fade-up">
        Here's the breakdown of the next meme-styled gaming mona lisa
      </p> */}
      <div className="" data-aos="fade-up">
        <div className="flex gap-4 flex-col md:flex-row">
          <div
            className=" text-white  rounded-lg shadow-md w-[80vw] h-[350px] md:w-[600px]"
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "center",
              backgroundPosition: "center",
              backgroundImage: "url(/bg/6.jpeg)",
            }}
          >
            <div
              className=" w-full h-full p-6  "
              style={{
                background: "linear-gradient(45deg, black, transparent)",
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              <div>
                <h1 className="text-bold title_element text-2xl">
                  Full scale meme launchpad
                </h1>
                <p className="1em mx-auto md:w-[80%]">
                  create, launch and bootstrap meme projects with no extra line
                  of codes
                </p>
              </div>
            </div>
          </div>
          <div
            className="bg-black rounded-lg text-white  shadow-md w-[80vw] h-[350px] md:w-[400px]"
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "center",
              backgroundPosition: "center",
              backgroundImage: "url(/bg/7.jpeg)",
            }}
          >
            <div
              className=" w-full h-full p-6  "
              style={{
                background: "linear-gradient(45deg, black, transparent)",
                display: "flex",
                alignItems: "flex-end",
                textAlign: "center",
              }}
            >
              <div>
                <h1 className="text-bold default_text title_element text-2xl">
                  First meme staking protocol on bitcoin{" "}
                </h1>
                <p className="1em">stake meme tokens earn rewards</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-4 flex-col md:flex-row-reverse my-8">
          <div
            className="bg-black rounded-lg text-white  shadow-md w-[80vw] h-[350px] md:w-[600px]"
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "center",
              backgroundPosition: "center",
              backgroundImage: "url(/bg/4.jpeg)",
            }}
          >
            <div
              className=" w-full h-full p-6  mx-auto"
              style={{
                background: "linear-gradient(45deg, black, transparent)",
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              <div className="w-full">
                <h1 className="text-bold title_element text-2xl mb-3">
                  Anti rug liquidity locker
                </h1>
                <p className="my-4 md:w-[80%] mx-auto">
                  projects and meme developers lock liquidity, creating a more
                  secured meme ecosystem
                </p>
              </div>
            </div>
          </div>
          <div
            className="bg-black rounded-lg text-white  shadow-md w-[80vw] h-[350px] md:w-[400px]"
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "center",
              backgroundPosition: "center",
              backgroundImage: "url(/bg/3.jpeg)",
            }}
          >
            <div
              className=" w-full h-full p-6  "
              style={{
                background: "linear-gradient(45deg, black, transparent)",
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              <div className="text-center w-full">
                <h1 className="text-bold title_element text-2xl mb-3">
                  Meme Dex{" "}
                </h1>
                <p className="1em">Trade meme tokens pairs with ease</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-4 flex-col md:flex-row">
          <div
            className=" text-white  rounded-lg shadow-md w-[80vw] h-[350px] md:w-[500px]"
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "center",
              backgroundPosition: "center",
              backgroundImage: "url(/bg/1.jpeg)",
            }}
          >
            <div
              className=" w-full h-full p-6  "
              style={{
                background: "linear-gradient(45deg, black, transparent)",
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              <div>
                <h1 className="text-bold title_element text-2xl mb-3">
                  Leading Web3 platform for building solid meme communities
                </h1>
                <p className="1em">
                  launch community campaigns, create community task, get
                  involved, earn rewards for community building participation
                </p>
              </div>
            </div>
          </div>
          <div
            className="bg-black rounded-lg text-white  shadow-md w-[80vw] h-[350px] md:w-[500px]"
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "center",
              backgroundPosition: "center",
              backgroundImage: "url(/bg/2.jpeg)",
            }}
          >
            <div
              className=" w-full h-full p-6  "
              style={{
                background: "linear-gradient(45deg, black, transparent)",
                display: "flex",
                alignItems: "flex-end",
                textAlign: "center",
              }}
            >
              <div>
                <h1 className="text-bold default_text title_element text-2xl mb-3">
                  Liquidity farming
                </h1>
                <p className="1em">
                  create and add liquidity to meme projects, earn rewards and
                  foster growth
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
