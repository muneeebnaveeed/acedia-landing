import TopNavbar from "@/components/layout/top-navbar";
import Image from "next/image";
import React from "react";
import TeamMemberTile from "./team-member-tile";
import Footer from "../../components/layout/footer";

const AboutView = () => {
  return (
    <>
      <TopNavbar />
      <section className="px-10 py-[124px] relative">
        <div className="absolute top-0 right-0 z-[-1]">
          <Image
            src="/assets/images/acedia-guide-(1)-17.png"
            width={2694}
            height={4326}
          />
        </div>
        <div className="z-10 w-full">
          <h1 className="font-bold font-serif text-[217px] leading-[192px] text-[#A2FF00] uppercase max-w-[860px] absolute left-[74px] top-[46px]">
            Origin Story
          </h1>
          <TeamMemberTile
            img="/assets/images/hussain.png"
            name="Hussain Bin Tahir"
            className="justify-end"
          >
            We work hard to build well-designed experiences for all, including
            the earth. Curious how we apply sustainable thinking to the
            internet?
          </TeamMemberTile>
          <TeamMemberTile
            img="/assets/images/hussain.png"
            name="Tooba Samad"
            className="justify-start"
          >
            We work hard to build well-designed experiences for all, including
            the earth. Curious how we apply sustainable thinking to the
            internet?
          </TeamMemberTile>
          <TeamMemberTile
            img="/assets/images/hussain.png"
            name="Hassan"
            className="justify-end mt-[130px]"
          >
            We work hard to build well-designed experiences for all, including
            the earth. Curious how we apply sustainable thinking to the
            internet?
          </TeamMemberTile>
          <TeamMemberTile
            img="/assets/images/hussain.png"
            name="Hassan"
            className="justify-start"
          >
            We work hard to build well-designed experiences for all, including
            the earth. Curious how we apply sustainable thinking to the
            internet?
          </TeamMemberTile>
          <TeamMemberTile
            img="/assets/images/hussain.png"
            name="Hassan"
            className="justify-end mt-[130px]"
          >
            We work hard to build well-designed experiences for all, including
            the earth. Curious how we apply sustainable thinking to the
            internet?
          </TeamMemberTile>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutView;
