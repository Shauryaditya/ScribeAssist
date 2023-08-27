import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="max-w-screen-2xl mx-auto  ">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="max-w-xs flex flex-col gap-12 mx-4 md:mx-48">
          <h1 className="text-4xl text-white">
            <span className="text-violet-500">Write</span> Better Notes
          </h1>
          <p className="text-white">
            ScribeAssist AI (SAAI) takes care of your notes so you can take
            better care of your patients. Ready to experience the power of AI
            assisted care?
          </p>
          <div className="flex gap-8">
            <button className="px-6 py-2 bg-violet-600 rounded-lg text-white text-xs">
              Launch SAAI
            </button>
            <button className="px-6 py-2 bg-gray-500 opacity-80  text-white rounded-lg text-xs">
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
        <div className="overflow-hidden" >
          <Image src="/Dna.png" width={700} height={400} objectFit="contain" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
