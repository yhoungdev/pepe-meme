import React from "react";
import Button from "../components/micro/button";
import Header from "../components/header";
import RoadmapData from "../components/page/roadMapItem";
import Footer from "../components/footer";

const Roadmap = () => {
  return (
    <>
      <Header />

      <section className="text-white flex justify-center items-center h-[60vh]">
        <div className="max-w-2xl px-4 md:px-8 text-center  space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold uppercase title_element default-text">
            $StormyS{"  "} ROADMAP
          </h2>
          {/* <p>
            The $Stormy project is an innovative meme finance ecosystem on
            Bitcoin's Stacks, designed to offer secure, inclusive, and
            easy-to-launch solutions for meme communities.
          </p> */}

          <div className="my-[4em]">
            <a href="" target="_blank">
              <Button className="">Get Started</Button>
            </a>
          </div>
        </div>
      </section>

      <div className="mb-[5em]">
        <RoadmapData />
      </div>
      <Footer />
    </>
  );
};

export default Roadmap;
