import React from "react";
import Timeline from "./timeline";

const RoadmapSection = () => {
  return (
    <div id="roadmap" className="container">
      <div className="py-[5em] my-[5em]">
        <center>
          <h2 className="text-3xl md:text-5xl font-bold uppercase title_element text-center stroke-text text-transparent">
            ROADMAP
          </h2>
        </center>

        <div className="my-3">
          <Timeline />
        </div>
      </div>
    </div>
  );
};

export default RoadmapSection;
