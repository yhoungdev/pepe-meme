import React from "react";

import Hero from "../components/hero";
import ActivitySection from "../components/activitySection";
import Footer from "../components/footer";

import Tokenomics from "../components/sections/tokenomics";
import RoadmapSection from "../components/sections/roadmap";
import Presale from "../components/sections/presale";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <ActivitySection />
      <Tokenomics />
      <RoadmapSection />
      <Presale/>
      <Footer />
    </div>
  );
};

export default Homepage;
