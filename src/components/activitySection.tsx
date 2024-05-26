import React from "react";
import Button from "./micro/button";

const ActivitySection = () => {
  return (
    <section className=" text-white  md:py-5 px-4 md:px-8">
      <div className="h-[90vh] items-center flex ">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6" data-aos="fade-up">
            <h2 className="text-3xl md:text-5xl font-bold uppercase title_element default-text">
              ABOUT $TRUMP PEPE
            </h2>

          
            <p>
            Stormy Daniels, a well-known adult film star, found herself at the heart of a political scandal involving former U.S. President Donald Trump. The hush-money payment of $130,000, made just before the 2016 election, captured global attention and linked their names forever in the annals of modern history. Despite denials and legal battles, the saga remains etched in public memory, providing the perfect backdrop for a meme coin with a unique story.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 rounded-full mr-4"></span>
                Get Level 10 in Discord
              </li>
              <li className="flex items-center">
                <span className="flex-shrink-0 w-8 h-8 bg-green-400 rounded-full mr-4"></span>
                Invite Friends
              </li>
            </ul>
           <a href="">
             <Button className="mt-4">Get Started</Button>
           </a>
          </div>
          <div
            className="md:flex md:justify-end  bg-black h-[400px] rounded-lg"
            data-aos="fade-up"
            style={{
              backgroundImage: "url(/bg.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>

      {/* other section */}
      <div className="h-[90vh] items-center flex flex-row-reverse ">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6" data-aos="fade-up">
            <h2 className="text-3xl md:text-5xl font-bold uppercase title_element default-text">
              ABOUT $TRUMP PEPE
            </h2>

          
            <p>
            Stormy Daniels, a well-known adult film star, found herself at the heart of a political scandal involving former U.S. President Donald Trump. The hush-money payment of $130,000, made just before the 2016 election, captured global attention and linked their names forever in the annals of modern history. Despite denials and legal battles, the saga remains etched in public memory, providing the perfect backdrop for a meme coin with a unique story.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 rounded-full mr-4"></span>
                Get Level 10 in Discord
              </li>
              <li className="flex items-center">
                <span className="flex-shrink-0 w-8 h-8 bg-green-400 rounded-full mr-4"></span>
                Invite Friends
              </li>
            </ul>
           <a href="">
             <Button className="mt-4">Get Started</Button>
           </a>
          </div>
          <div
            className="md:flex md:justify-end  bg-black h-[400px] rounded-lg"
            data-aos="fade-up"
            style={{
              backgroundImage: "url(/bg.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default ActivitySection;
