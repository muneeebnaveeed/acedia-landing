import Image from "next/image";
import React from "react";
import classNames from "classnames";
import { clashGrotesk, inter } from "@/utils/fonts";

const ProjectTile = ({ img, textPrefix, children, className }) => {
  return (
    <div className={classNames("relative w-[1792] font-serif", className)}>
      <Image className="rounded-y-[32px]" src={img} width={1792} height={896} />
      <div className="rounded-b-[32px] absolute z-1 bottom-0 left-0 w-full bg-[#4813D8] opacity-80 h-[100px] flex gap-4 items-center px-8 text-[#F7FCDE]">
        <span className={`text-[25px] leading-[32px] font-bold`}>
          {textPrefix}
        </span>
        <p className="text-[18px] leading-[36px] font-medium">{children}</p>
      </div>
    </div>
  );
};

export default ProjectTile;
