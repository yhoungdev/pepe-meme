import React from "react";

const RoadmapItem = ({ title, quater, imageSrc }) => (
  <div className="flex flex-col items-left p-4 relative bg-[#091813] w-full md:w-[400px] border-l-8 border-[#c9740a] py-[5em]">
    <h3 className="text-white text-lg font-semibold  ">{title}</h3>
    <h1
      className=" font-bold text-7xl absolute z-4 opacity-35 right-3 bottom-2 "
      style={{
        color: "rgb(255 255 255 / 10%)",
        fontWeight: "bolder",
      }}
    >
      {quater}
    </h1>
  </div>
);

const ROADMAP = [
  {
    quater: "Q1",
    content: "Launch and Initial Distribution",
  },
  {
    quater: "Q2",
    content: "NFT Marketplace Launch",
  },
  {
    quater: "Q3",
    content: "Community Events and Contests",
  },
  {
    quater: "Q4",
    content: "Expanded Partnerships and Marketing",
  },
];
const RoadmapData = () => {
  return (
    <div className="">
      <div className="container mx-auto p-4 ">
        <div className="flex flex-wrap justify-center  items-stretch gap-8 md:gap-[2em]">
          {ROADMAP.map((_, key) => (
            <RoadmapItem
              key={key}
              title={_.content}
              quater={_.quater}
              imageSrc="/path-to-your-image.png"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoadmapData;
