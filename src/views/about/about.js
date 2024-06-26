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
            The Team
          </h1>
          <TeamMemberTile
            img="/assets/images/Hussain.jpg"
            name="Hussain Bin Tahir"
            className="justify-end"
            link="https://www.linkedin.com/in/hussainbintahir/"
          >
            An avid gamer with 5 years of experience in 3D art & game development, Hussain is the CEO & the head of Visual Art at ACEDIA.
          </TeamMemberTile>
          <TeamMemberTile
            img="/assets/images/Tooba.jpg"
            name="Tooba Samad"
            link="https://www.linkedin.com/in/tooba-samad-8a7656276/"
            className="justify-start"
          >
            An architect by profession, Tooba designs the game environments & levels in ACEDIA.
          </TeamMemberTile>
          <TeamMemberTile
            img="https://media.licdn.com/dms/image/D4D03AQGzncQWVSrEtg/profile-displayphoto-shrink_800_800/0/1694528440176?e=1715212800&v=beta&t=M9PuA4QidLQ4-0xztE3RG1-_92aWG1X2xmX9W9k-HjU"
            name="Owais Khattak"
            link="https://www.linkedin.com/in/owais-khattak-676014120/"
            className="justify-end mt-[130px]"
          >
            A professional ex-Dota player and an obsessive for all things games, Owais is the primary game designer at ACEDIA.
          </TeamMemberTile>
          <TeamMemberTile
            img="https://media.licdn.com/dms/image/D4D03AQEiO1SWgyqjtg/profile-displayphoto-shrink_800_800/0/1709567878850?e=1715212800&v=beta&t=Og5xlZf-nHGHHhhPB4hKgjSqmhobX3ZMcPvqOHZ2bQg"
            name="Imtinan Ul Haq"
            className="justify-start"
            link="https://www.linkedin.com/in/muhammad-imtinan-ul-haq/"
          >
            An Unreal Engine wizard, a casual Counter Strike player since 2017 and a huge geek, Imtinan is the co-founder & the primary game developer at ACEDIA.
          </TeamMemberTile>
          <TeamMemberTile
            img="https://media.licdn.com/dms/image/D4D03AQErnGf52nda0g/profile-displayphoto-shrink_800_800/0/1691231234486?e=1715212800&v=beta&t=R4W0WpWFtyFyVOyQPJUKmQvrL6tVpl-R_PT_u-Ne-Lc"
            name="Hassaan Sheikh"
            link="https://www.linkedin.com/in/hassaanahmd1/"
            className="justify-end mt-[130px]"
          >
            Hassaan has been in sound design & music production for 3 years, and does game audio at ACEDIA.
          </TeamMemberTile>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutView;
