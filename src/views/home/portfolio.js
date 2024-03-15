import Image from "next/image";
import React from "react";

const PortfolioItem = ({ href, img }) => {
  return (
    <a href={href} target="_blank">
      <Image
        className="rounded-[32px] hover:scale-105 transition duration-500 cursor-pointer"
        width={566}
        height={622}
        src={img}
      />
    </a>
  );
};

const Portfolio = () => {
  return (
    <section className="px-10 py-[80px] bg-[#A2FF00] w-full">
      <h1 className="text-[90px] font-semibold leading-[88px] font-serif mb-[80px] text-black">
        Portfolio
      </h1>
      <div className="flex items-center gap-[50px] w-full ">
        <PortfolioItem
          href="https://www.artstation.com/artwork/qeB0eL"
          img="https://cdnb.artstation.com/p/assets/images/images/066/424/367/large/acedia-chained.jpg"
        />
        <PortfolioItem
          href="https://www.artstation.com/artwork/9EzBZa"
          img="https://cdnb.artstation.com/p/assets/images/images/066/426/599/large/acedia-03.jpg"
        />
        <PortfolioItem
          href="https://www.artstation.com/artwork/GeJ1v3"
          img="https://cdnb.artstation.com/p/assets/images/images/066/424/671/large/acedia-celestial.jpg"
        />
      </div>
    </section>
  );
};

export default Portfolio;
