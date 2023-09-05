"use client";
import React, { useState } from "react";
import Notes from "./Notes";
import Instructions from "./Instructions";
import Alaysis from "./Alaysis";

const NotesandInstructions = () => {
  const heading = [
    {
      id: "8uhtyuujhg6987yhrtyhytg",
      name: "Notes",
    },
    {
      id: "8uhty45656uujhg6987yhrtyhytg",
      name: "Instructions",
    },
    {
      id: "8uhtyrt436987yhrtyhytg",
      name: "Alaysis",
    },
  ];
  const [selectedTab, setSelectedTab] = useState(1);

  return (
    <div className="flex gap-14 p-10">
      <div className="grow flex flex-col">
        <div className="max-w-xs flex justify-between bg-[#2F303D] rounded-lg overflow-hidden">
          {heading.map((item, index) => (
            <div
              onClick={() => setSelectedTab(index + 1)}
              key={item.id}
              className={`w-1/3 h-10 flex justify-center rounded-lg items-center cursor-pointer text-sm ${
                selectedTab === index + 1
                  ? "text-[#8167E6] bg-white"
                  : "text-gray-500 "
              }`}
            >
              {item.name}
            </div>
          ))}
          {/* <div className="flex">
                    <button className='text-xs text-white bg-[#2F303D] rounded-md px-4 py-2'>Save</button>
                    <button className='text-xs text-white bg-[#2F303D] rounded-md px-4 py-2'>Save</button>
                </div> */}
        </div>

        <div className="p-0 mt-4">
          {
            selectedTab === 1? <Notes/> : selectedTab === 2? <Instructions/> : <Alaysis/>
          }
        </div>
      </div>
    </div>
  );
};

export default NotesandInstructions;
