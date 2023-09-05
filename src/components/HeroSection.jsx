import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="max-w-screen-2xl h-[900px] bg-opacity-80 mx-auto -mt-20 bg-no-repeat bg-right bg-cover font-sans "
      style={{ backgroundImage: `url('/Dna.png')` }}
    >
      <div className="w-full h-full flex flex-row justify-start items-center">
        <div className="max-w-md flex flex-col p-5 mx-auto sm:ml-16 md:ml-24 lg:mx-32 max-sm:mt-10 mt-8">
          <h1 className="text-[34px] text-white leading-10 font-mono font-bold">
            <span className="text-[#8167E6]">Write</span> Better Notes
          </h1>
          <p className="text-white leading-6 py-5">
            ScribeAssist AI (SAAI) takes care of your notes so you can take
            better care of your patients. Ready to experience the power of AI
            assisted care?
          </p>
          <div className="flex flex-col gap-16">
          <div className="w-full flex gap-8 mt-10 md:mt-20">
            <button className="w-1/2 px-6 py-3 bg-[#8167E6] rounded-xl text-white text-sm">
              Launch SAAI
            </button>
            <button className="w-1/2 px-6 py-3 bg-[#222331] bg-opacity-80  text-white rounded-xl text-sm">
              Learn More
            </button>
          </div>
          <div className="">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
                stroke="white"
                stroke-width="1.5"
              />
              <path
                d="M12 5V8"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </div>
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
