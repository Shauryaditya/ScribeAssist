import React from "react";

const Contact = () => {
  return (
    <div className="max-w-screen-2xl mx-auto overflow-hidden bg-[#191A29] py-8">
      <div className="mx-4 md:mx-48">
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl text-white">
            <span className="text-violet-500">Contact</span> Us
          </h1>
          <p className="text-white">
            SAAI is always here to help you. Our support system worls tirelessly
            to provide the best experience for our diagonostitions. Have a
            question? Ask us anything
          </p>
        </div>
        <form class="w-full max-w-full mt-8">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <input
                class="appearance-none block w-full bg-transparent text-gray-700 border border-gray-200 rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Name"
              />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <input
                class="appearance-none block w-full bg-transparent text-gray-700 border border-gray-200 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Email"
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full  px-3">
              <textarea
                class="appearance-none block w-full h-36 bg-transparent text-gray-700 border border-gray-200 rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="text"
                placeholder="Type question here"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
