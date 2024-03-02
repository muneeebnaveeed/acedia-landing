import React from "react";
import classNames from "classnames";
import { clashGrotesk } from "@/utils/fonts";

const PrimaryCta = ({ children, className }) => {
  return (
    <button
      type="button"
      className={classNames(
        "bg-[#CFED4E] text-black py-3 flex justify-between items-center px-10 text-[18px] leading-[36px] rounded-full",
        className
      )}
    >
      <span className={clashGrotesk.className}>{children}</span>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.3172 10.442L11.6922 16.067C11.5749 16.1843 11.4159 16.2502 11.25 16.2502C11.0841 16.2502 10.9251 16.1843 10.8078 16.067C10.6905 15.9498 10.6247 15.7907 10.6247 15.6249C10.6247 15.459 10.6905 15.2999 10.8078 15.1827L15.3664 10.6249H3.125C2.95924 10.6249 2.80027 10.559 2.68306 10.4418C2.56585 10.3246 2.5 10.1656 2.5 9.99986C2.5 9.8341 2.56585 9.67513 2.68306 9.55792C2.80027 9.44071 2.95924 9.37486 3.125 9.37486H15.3664L10.8078 4.81705C10.6905 4.69977 10.6247 4.54071 10.6247 4.37486C10.6247 4.20901 10.6905 4.04995 10.8078 3.93267C10.9251 3.8154 11.0841 3.74951 11.25 3.74951C11.4159 3.74951 11.5749 3.8154 11.6922 3.93267L17.3172 9.55767C17.3753 9.61572 17.4214 9.68465 17.4529 9.76052C17.4843 9.8364 17.5005 9.91772 17.5005 9.99986C17.5005 10.082 17.4843 10.1633 17.4529 10.2392C17.4214 10.3151 17.3753 10.384 17.3172 10.442Z"
          fill="black"
        />
      </svg>
    </button>
  );
};

export default PrimaryCta;
