import Image from "next/image";
import React from "react";

const TeamMemberTile = ({ img, name, children, className }) => {
  return (
    <div className={`flex w-full ${className}`}>
      <div className="translate-x-[100px] relative">
        <div className="absolute w-[538px] h-[663px] -top-1 -left-1 bg-[#4813D8] -z-10 rounded-[23px]" />
        <Image className="rounded-[23px]" src={img} width={538} height={663} />
      </div>
      <div className="bg-[#D9D9D9] px-[66px] py-[82px] height-[663px] text-black font-serif font-semibold w-[538px] h-[663px] rounded-[23px] z-10 translate-y-[100px]">
        <p className="text-[#4813D8] underline text-[40px] leading-[88px]">
          {name}
        </p>
        <p className="text-[28px] leading-[44px] font-medium">{children}</p>
        <p className="text-[#4813D8] text-[28px] leading-[44px] underline">
          Read about our approach
        </p>
      </div>
    </div>
  );
};

export default TeamMemberTile;
