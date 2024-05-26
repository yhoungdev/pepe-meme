import React from "react";

import Hero from "../components/hero";
import ActivitySection from "../components/activitySection";
import Footer from "../components/footer";

import Tokenomics from "../components/sections/tokenomics";
import RoadmapSection from "../components/sections/roadmap";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <ActivitySection />
      <Tokenomics />
      <RoadmapSection />
      <Footer />
    </div>
  );
};

export default Homepage;
