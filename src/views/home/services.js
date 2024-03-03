import Image from "next/image";
import React from "react";

const ServiceBlock = ({ title, children }) => {
  return (
    <div>
      <h3 className="font-bold text-[26px] leading-[32px] text-[#F7FCDE] mb-[15px]">
        {title}
      </h3>
      <p className="font-medium text-[18px] leading-[36px] text-[#F7FCD] opacity-90 max-w-[540px]">
        {children}
      </p>
    </div>
  );
};

const Services = () => {
  return (
    <section className="py-[86px] px-10 relative">
      <div className="absolute top-0 left-0 rotate-[-0.61] z-[-1]">
        <Image
          src="/assets/images/acedia-guide-(1)-15.png"
          width={1850}
          height={1545}
        />
      </div>
      <div className="z-10">
        <h2 className="text-[#A2FF00] text-[88px] leading-[86px] font-serif font-semibold underline underline-offset-[12px]">
          Services
        </h2>
        <div className="mt-[100px] flex gap-[64px] font-serif">
          <Image
            className="rounded-[32px]"
            src="/assets/images/services-section.jpg"
            width={565}
            height={622}
          />
          <div className="flex flex-col gap-[60px]">
            <ServiceBlock title="Game Development">
            Working primarily with Unreal Engine, Blender, Maya & Adobe Substance, we develop games for PC, Console & Mobile. We have an affinity for story-based games with beautiful visuals & immersive sound design. Got a project we could work together on? You know what to do.
            </ServiceBlock>
            <ServiceBlock title="3D Asset Creation">
            Custom-modeled 3D assets such as models & environments made completely from scratch in Blender to fit your exact creative needs.
            </ServiceBlock>
            <p className="font-bold text-[26px] leading-[32px] text-[#F7FCDE]">
              Ready to make a change?{" "}
              <span className="text-[#CFED4E] underline">
                Let's get started
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-[60px]">
            <ServiceBlock title="3D Animation & Visualization">
            End-to-end 3D animations & visualizations for games, film, TV and music videos, made with Blender & Maya.
            </ServiceBlock>
            <ServiceBlock title="Sound Design">
            Audio production ranging from foley & sound design to music recording & production for games, film, TV & music videos.
            </ServiceBlock>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
