import React from "react";
import AllocationChart from "../micro/alocationChart";

const Tokenomics = () => {
  return (
    <div id="tokenomics" className="py-[5em] my-[5em]">
      <div className=" mx-auto text-center">
      <h2
          className="text-3xl md:text-5xl font-bold uppercase title_element text-center stroke-text text-transparent"
        >
          TOKENOMICS
        </h2>
        <div className="mt-[3em] bg-gray-900  w-full md:w-[800px] mx-auto px-5 py-[5em] rounded-xl">
          <h1 className="text-xl md:text-2xl font-bold default-text ">
            TOKEN SUPPLY
          </h1>
          <h3 className="text-lg md:text-3xl mt-3 text-gray-200 font-bold">
            130,000,000,000 STMY
          </h3>
        </div>

        <div className=" bg-gray-900 mt-5  w-full md:w-[800px] mx-auto px-5 py-[5em] rounded-xl">
          <h1 className="text-xl md:text-2xl font-bold default-text mb-5 ">
            TOKEN ALLOCATION
          </h1>
          <AllocationChart />
        </div>
      </div>

      
    </div>
  );
};

export default Tokenomics;
