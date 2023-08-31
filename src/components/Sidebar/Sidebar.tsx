"use client";

import React, { useState } from "react";
import { Microphone } from "@/assets/icons/microphone";
import { Notes } from "@/assets/icons/Notes";
import { Calender } from "@/assets/icons/Calender";
import { Account } from "@/assets/icons/Account";
import { Help } from "@/assets/icons/Help";
const Sidebar = () => {
  const options = [
    {
      key: 1,
      title: "Home",
      icon: <Microphone />
    },
    {
      key: 2,
      title: "Records",
      icon: <Notes />,
    },
    {
      key: 3,
      title: "Appointments",
      icon: <Calender />,
    },
    {
      key: 4,
      title: "Account",
      icon: <Account />,
    },
    {
      key: 5,
      title: "Help",
      icon: <Help />,
    },
  ];
  const [isSelected, setIsSelected] = useState("Home");
  return (
    <div className="w-[320px]  bg-[#191A29] h-screen">
      <div className="w-full flex flex-col justify-center items-start px-[40px] gap-[6rem] pt-[42px]">
        <div className="">
          <p className="text-[#8167E6] text-[26px] font-[700]">
            ScribeAssistAI
          </p>
        </div>
        <div className="flex flex-col gap-10">
          {options.map((ele) => {
            return (
              <button
                value={ele.title}
                onClick={() => setIsSelected(ele.title)}
                key={ele.key}
                className={
                  isSelected === ele.title
                    ? "text-white flex gap-5 w-[240px] bg-btn-selected rounded-[14px] h-[48px] justify-start items-center pl-[20px] py-[30px] cursor-pointer"
                    : "text-white flex gap-5 w-[240px] h-[48px] justify-start items-center pl-[20px] py-[30px] cursor-pointer"
                }
              >
                <div>{ele.icon}</div>
                <div>
                  <p>{ele.title}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
