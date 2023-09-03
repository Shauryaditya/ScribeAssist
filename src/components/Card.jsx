import React from "react";

const Card = ({props}) => {

  return (
    <div className=" min-w-xs bg-[#222331]  shadow-xl rounded-lg p-8 transition-opacity  ">
      
        
          <div className="flex flex-col justify-start gap-6">
            <img className="w-8 h-18 object-contain" src={props.icon} alt="" />
         <h2 className="text-[#FFFFFF] text-lg font-bold hover:text-black">{props.name}</h2>
        <p className="text-[#FFFFFF] text-xs font-normal hover:text-black">{props.desc}</p> 
      </div>
   
    </div>
  );
};

export default Card;
