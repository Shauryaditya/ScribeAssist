'use client'
import React, { useState } from "react";
import Image from "next/image";
const Card = ({ props }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = isHovered
    ? 'bg-white text-black'
    : 'bg-[#222331] text-white';

  const textHoverStyle = isHovered ? 'text-black' : 'text-white';



  return (
    <div className={`min-w-xs bg-[#222331]   shadow-xl rounded-[20px] p-12 transition duration-500 ease-in-out transform hover:bg-white hover:text-black ${cardStyle} `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transition: 'background-color 0.5s ease-in-out', // Shorthand for transition properties
      }}
    >
      <div className={`flex flex-col justify-start gap-6 `}>
        {/* Conditionally render icons based on hover state */}
        {isHovered ? (
          <Image className={`w-8 h-18 object-contain`} src={props.hovericon} alt="" width={100} height={100} />
        ) : (
          <Image className={`w-8 h-18 object-contain`} src={props.icon} alt="" width={100} height={100} />
        )}

        <h2 className={`text-[#FFFFFF] text-lg font-bold ${textHoverStyle} `}>{props.name}</h2>
        <p className={`text-[#FFFFFF] text-xs font-normal ${textHoverStyle}`}>{props.desc}</p>
      </div>

    </div>
  );
};

export default Card;
