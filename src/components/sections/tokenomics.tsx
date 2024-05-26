import React from "react";
import AllocationChart from "../micro/alocationChart";

const Tokenomics = () => {
  return (
    <div className="py-[5em] my-[5em]">
      <div className="container mx-auto text-center">
        <h1 className="title_element default-text text-2xl md:text-4xl font-bold">
          TOKENOMICS
        </h1>
        <div className="mt-[3em] bg-gray-900  w-full md:w-[800px] mx-auto px-5 py-[5em] rounded-xl">
          <h1 className="text-xl md:text-2xl font-bold default-text ">TOKEN SUPPLY</h1>
          <h3 className="text-lg md:text-3xl mt-3 text-gray-600 font-bold">130,000,000,000 STMY</h3>
        </div>

        <div className=" bg-gray-900 mt-5  w-full md:w-[800px] mx-auto px-5 py-[5em] rounded-xl">
          <h1 className="text-xl md:text-2xl font-bold default-text mb-5 ">TOKEN ALLOCATION</h1>
          <AllocationChart/>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
