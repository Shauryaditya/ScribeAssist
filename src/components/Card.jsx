import React from "react";

const Card = ({props}) => {

  return (
    <div className=" max-w-xs bg-[#222331] opacity-40 shadow-xl rounded-lg p-8">
      
        
          <div className="flex flex-col justify-start gap-6">
            <img className="w-8 h-18 object-contain" src={props.icon} alt="" />
         <h2 className="text-[#FFFFFF] text-xl font-bold">{props.name}</h2>
        <p className="text-[#FFFFFF] text-sm font-normal">{props.desc}</p> 
      </div>
   
    </div>
  );
};

export default Card;
