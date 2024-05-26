

import { useClipboard } from "../hooks/useClipBoard";
import { MdCopyAll } from "react-icons/md";

const Hero = () => {
  const bgStyle = {
    backgroundImage: "url(no-bg.png)",
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const mobileBg = {
    backgroundImage: "url(no-bg.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const contractAddress = "0xdsf6cv1dsf89fsdfv456ds5f4d";
  const { copyToClipboard } = useClipboard();
  return (
    <div>
      <div className="container flex flex-col-reverse  md:flex-row h-[45vh] md:h-[100vh] items-center justify-center w-full mx-auto text-center">
        <div
          className="w-full hidden md:block rounded-xl h-[40vh] md:h-[60vh] mt-[2em]"
          style={bgStyle}
        ></div>
        <div className="mt-[5em] md:mt-[10em] w-full px-4">
        <h1
            className="hero-text  title_element text-[40px] text-center md:text-[70px] font-bold mb-4  "
            style={{
              lineHeight: 1.3,
            }}
          >
            MEME FINANCE LAYER OF BITCOIN
          </h1>

          <div className="mt-5 flex items-center gap-2 w-fit mx-auto h-fit">
            <div className="px-4 py-2 bg-none border-2 border-brand-accent rounded-md flex items-center">
              <span className="text-md md:text-xl">{contractAddress}</span>
            </div>
            <div
              className="rounded-md p-3 bg-brand-accent cursor-pointer flex items-center justify-center"
              onClick={() => copyToClipboard(contractAddress)}
            >
              <MdCopyAll className="text-white" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full md:hidden  rounded-xl h-[50vh] md:h-[60vh]"
        style={mobileBg}
      ></div>
    </div>
  );
};

export default Hero;
