import React, { Fragment } from "react";
import { ROADMAPDATA, TOKENUTILITY } from "../data/roadmapData";

const Ownership = () => {
  return (
    <div className="bg-brown-800 px-3 text-white text-center py-12 min-h-screen flex flex-col justify-center">
      <h2
        className="text-3xl lg:text-6xl font-bold mb-4 title_element default-text"
        data-aos="fade-up"
      >
        TOKEN UTILITIES
      </h2>

      <p className="mb-8  text-md md:text-xl" data-aos="fade-up">
        TRUMP PEPE totally revamps the game bringing instant utility and value
        to holders
      </p>
      <div data-aos="fade-up" className="flex flex-wrap justify-center gap-4">
        {TOKENUTILITY.map(({ title, content }, index) => (
          <Fragment>
            <div
              key={index}
              className="bg-[#13875c0d] flex items-center p-6 rounded-lg shadow-lg w-full md:w-[350px] h-[250px] text-center"
            >
              <div>
                <center>
                  <img src="/icons/reward2.webp" alt="" width={"40px"} />
                </center>
                <div>
                  <h1 className="text-xl  font-bold">{title}</h1>
                  <p className="my-3">{content}</p>
                </div>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Ownership;
