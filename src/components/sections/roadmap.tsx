import React from "react";
import Timeline from "./timeline";

const RoadmapSection = () => {
  return (
    <div className="container">
      <div className="py-[5em] my-[5em]">
        <center>
          <h1 className="title_element default-text text-2xl md:text-4xl font-bold">
            ROADMAP
          </h1>
        </center>

        <div className="my-3">
            <Timeline/>
        </div>
      </div>
    </div>
  );
};

export default RoadmapSection;