"use client";

import React, { useState } from "react";
import { useRouter } from 'next/navigation'
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
  const router = useRouter();
  const navigateToPage = (route: string) => {
    // Use router.push to navigate to the specified page
    router.push(`/${route.toLowerCase()}`);
  };

  return (
    <div className="w-full bg-[#191A29] min-h-full">
      <div className="w-full flex flex-col justify-center items-start px-[36px] gap-12 pt-[42px]">
        <div className="">
          <p className="text-[#8167E6] text-[26px] font-[700]">
            ScribeAssistAI
          </p>
        </div>
        <div className="flex flex-col gap-6">
          {options.map((ele) => {
            return (
              <button
                value={ele.title}
                onClick={() =>{ setIsSelected(ele.title)
                  navigateToPage(ele.title);
                }}
                key={ele.key}
                className={
                  isSelected === ele.title
                    ? "text-white flex gap-5 w-[225px] text-xs bg-btn-selected rounded-[14px] h-[48px] justify-start items-center pl-[20px] py-[25px] cursor-pointer"
                    : "text-white flex gap-5 w-[225px] text-xs h-[48px] justify-start items-center pl-[20px] py-[25px] cursor-pointer"
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
