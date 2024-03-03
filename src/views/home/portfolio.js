import Image from "next/image";
import React from "react";

const Portfolio = () => {
  return (
    <section className="px-10 py-[80px] bg-[#A2FF00] w-full">
      <h1 className="text-[90px] font-semibold leading-[88px] underline font-serif mb-[80px]">
        Portfolio
      </h1>
      <div className="flex items-center gap-[50px] w-full">
        <Image
          className="rounded-[32px]"
          width={566}
          height={622}
          src="/assets/images/services-section.jpg"
        />
        <Image
          className="rounded-[32px]"
          width={566}
          height={622}
          src="/assets/images/services-section.jpg"
        />
        <Image
          className="rounded-[32px]"
          width={566}
          height={622}
          src="/assets/images/services-section.jpg"
        />
      </div>
    </section>
  );
};

export default Portfolio;
