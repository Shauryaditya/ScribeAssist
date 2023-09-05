'use client'
import React,{useState} from "react";

const Card = ({props}) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = isHovered
    ? 'bg-white text-black'
    : 'bg-[#222331] text-white';

    const textHoverStyle = isHovered ? 'text-black' : 'text-white';

    const iconStyle = isHovered ? 'text-[#8167E6]' : 'text-white';
  return (
    <div className= {`min-w-xs bg-[#222331]  shadow-xl rounded-[20px] p-8 transition duration-300 ease-in-out transform hover:bg-white hover:text-black ${cardStyle} `} 
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}>
      
        
          <div className={`flex flex-col justify-start gap-6 `}>
          <svg
          className={`w-8 h-18 object-contain ${isHovered ? 'text-[#8167E6]' : 'text-white'}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          {props.icon}
        </svg>
         <h2 className={`text-[#FFFFFF] text-lg font-bold ${textHoverStyle} `}>{props.name}</h2>
        <p className={`text-[#FFFFFF] text-xs font-normal ${textHoverStyle}`}>{props.desc}</p> 
      </div>
   
    </div>
  );
};

export default Card;
