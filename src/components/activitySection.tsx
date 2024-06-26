import React from "react";
import Button from "./micro/button";

const ActivitySection = () => {
  return (
    <section id="about" className="text-white md:py-[10em] px-4 md:px-8 mt-[4em]">
      <div className="flex justify-center">
        <h2 className="text-3xl md:text-5xl font-bold uppercase title_element text-center stroke-text text-transparent">
          ABOUT $Stormy
        </h2>
      </div>
      <div className="my-[5em] flex justify-center">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 text-center md:text-left">
            <p>
              Stormy Daniels, a well-known adult film star, found herself at the
              heart of a political scandal involving former U.S. President
              Donald Trump. The hush-money payment of $130,000, made just before
              the 2016 election, captured global attention and linked their
              names forever in the annals of modern history. Despite denials and
              legal battles, the saga remains etched in public memory, providing
              the perfect backdrop for a meme coin with a unique story.
            </p>
            <a href="https://t.me/StormyCoinBase" target="_blank">
              <Button className="mt-4">Join Community</Button>
            </a>
          </div>
          <div
            className="md:flex md:justify-end bg-black h-[400px] rounded-lg"
            style={{
              backgroundImage: "url(/bg.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "10px",
            }}
          ></div>
        </div>
      </div>

      {/* Other section */}
      <div className="flex justify-center">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div
            className="md:flex md:justify-end bg-black h-[400px] rounded-lg"
            style={{
              backgroundImage: "url(/bg.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "10px",
            }}
          ></div>
          <div className="space-y-6 text-center md:text-left">
            <p>
              Stormy isn’t just another cryptocurrency; it’s a ticket to a
              digital revolution where scandal meets blockchain. Our mission is
              to offer a coin that not only has potential for financial growth
              but also brings laughter and engagement to its community.
            </p>
            <div className="flex flex-col gap-3">
              <p>
                Scandalous Fun: Dive into a coin that captures one of the most
                notorious scandals in recent history. Each transaction is a nod
                to life’s unexpected twists.
              </p>
              <p>
                Community Engagement: Join a vibrant community that thrives on
                humor, history, and the unexpected. Participate in events,
                contests, and more, all centered around the Stormy lore.
              </p>
              <p>
                Ride the Wave: In a market where trends come and go, Stormy
                stands out as a coin with a story. Ride the wave of market
                excitement with a coin as unpredictable as the events that
                inspired it.
              </p>
            </div>
            <a href="https://t.me/StormyCoinBase" target="_blank">
              <Button className="mt-4">Join Community</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitySection;
