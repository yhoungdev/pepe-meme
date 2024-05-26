import React from "react";

import Hero from "../components/hero";
import ActivitySection from "../components/activitySection";
import Feature from "../components/features";
import Footer from "../components/footer";
import Information from "../components/information";
import Header from "../components/header";
import Tokenomics from "../components/sections/tokenomics";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <ActivitySection />
      <Tokenomics />
      {/* <Feature /> */}
      {/* <Information /> */}
      <Footer />
    </div>
  );
};

export default Homepage;
