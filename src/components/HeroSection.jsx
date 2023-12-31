import React from "react";
import Image from "next/image";

const HeroSection = () => {

  return (
    <div className="max-w-screen-2xl h-[35rem] md:h-[40rem] lg:h-[50rem] bg-opacity-80 mx-auto -mt-20 bg-no-repeat  md:bg-right bg-cover font-sans overflow-y-scroll no-scrollbar "
      style={{
         backgroundImage: `url('/Dna.png')`,
         backgroundPosition:'-20%,100%'
     }}
    >
      <div className="w-full h-full flex flex-row justify-start items-center">
        <div className="max-w-md flex flex-col p-5 mx-auto sm:ml-16 md:ml-24 lg:mx-32 max-sm:mt-14 mt-8">
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
              <button className="relative w-1/2 px-6 py-3 bg-[#8167E6] rounded-xl text-white text-sm hover:bg-white">
                Launch SAAI
                <div className="absolute inset-0 flex items-center justify-center transform translate-y-2 opacity-0 hover:translate-y-0 hover:opacity-100 transition-transform hover:duration-100 ">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5 6C14.122 6 13 7.122 13 8.5C13 9.878 14.122 11 15.5 11C16.878 11 18 9.878 18 8.5C18 7.122 16.878 6 15.5 6ZM15.5 10C14.673 10 14 9.327 14 8.5C14 7.673 14.673 7 15.5 7C16.327 7 17 7.673 17 8.5C17 9.327 16.327 10 15.5 10ZM24 2.5C24 1.122 22.878 0 21.486 0C16.544 0.141 12.042 2.552 8.375 7.001C6.789 7.02 5.207 7.405 3.79 8.116C1.488 9.271 0 11.777 0 14.5V15H5C6.068 15 7.073 15.416 7.829 16.171C8.584 16.927 9 17.931 9 19V24H9.5C12.223 24 14.729 22.513 15.884 20.211C16.596 18.794 16.98 17.211 16.999 15.625C21.447 11.958 23.859 7.455 24 2.5ZM4.238 9.01C5.272 8.491 6.403 8.165 7.555 8.049C7.457 8.181 7.359 8.314 7.262 8.449C5.709 10.616 4.55 13.133 4.17 14H1.019C1.185 11.85 2.412 9.926 4.238 9.01ZM14.99 19.762C14.073 21.588 12.15 22.815 10 22.981V19.83C10.868 19.45 13.384 18.291 15.552 16.738C15.687 16.641 15.82 16.544 15.952 16.446C15.836 17.598 15.51 18.729 14.991 19.763L14.99 19.762ZM14.969 15.925C13.166 17.217 11.055 18.25 9.993 18.736C9.929 17.5 9.417 16.347 8.536 15.465C7.654 14.583 6.501 14.072 5.265 14.008C5.751 12.946 6.784 10.835 8.076 9.032C10.629 5.469 15.033 1.184 21.5 1C22.327 1 23 1.673 23 2.486C22.816 8.967 18.531 13.371 14.969 15.925ZM1.732 18.732C0.882 19.581 0.313 22.613 0.208 23.212L0.084 23.915L0.787 23.791C1.386 23.686 4.418 23.117 5.267 22.267C5.739 21.795 5.999 21.167 5.999 20.499C5.999 19.831 5.739 19.203 5.267 18.731C4.324 17.787 2.675 17.788 1.732 18.732ZM4.56 21.56C4.174 21.946 2.626 22.391 1.333 22.666C1.608 21.373 2.053 19.825 2.439 19.439C2.722 19.156 3.099 19 3.5 19C3.901 19 4.277 19.156 4.561 19.439C4.845 19.722 5 20.099 5 20.5C5 20.901 4.844 21.277 4.561 21.561L4.56 21.56Z" fill="#8167E6" />
                  </svg>

                </div>
              </button>

              <button className="w-1/2 px-6 py-3 bg-[#222331] bg-opacity-80  text-white rounded-xl text-sm hover:bg-white hover:text-black transition-all duration-300">
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
                  strokeWidth="1.5"
                />
                <path
                  d="M12 5V8"
                  stroke="white"
                  strokeWidth="1.5"
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
