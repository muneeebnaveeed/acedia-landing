import TopNavbar, { Sections } from "@/components/layout/top-navbar";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import ProjectTile from "./project-tile";
import Footer from "../../components/layout/footer";
import CtaButton, { CtaButtonVariants } from "@/components/cta-button";
import Portfolio from "./portfolio";
import Services from "./services";
import { useRouter } from "next/router";

const HomeView = () => {
  const router = useRouter();
  const sectionQuery = router.query.section;

  const gamesSectionRef = useRef();
  const portfolioSectionRef = useRef();
  const servicesSectionRef = useRef();

  useEffect(() => {
    const scrollIntoView = (sectionRef) =>
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    switch (sectionQuery) {
      case Sections.GAMES:
        scrollIntoView(gamesSectionRef);
        break;
      case Sections.PORTFOLIO:
        scrollIntoView(portfolioSectionRef);
        break;
      case Sections.SERVICES:
        scrollIntoView(servicesSectionRef);
        break;
      default:
    }
  }, [sectionQuery]);

  return (
    <>
      <div className="relative">
        <Image
          src="/assets/images/grain.png"
          width={1920}
          height={1080}
          className="absolute pointer-events-none z-1 opacity-5"
        />

        <section
          className="w-full relative h-[962px] overflow-clip"
          ref={gamesSectionRef}
        >
          <div className="absolute top-0 left-0 z-[-1] w-full h-full">
            <Image
              src="/assets/images/header-image.jpg"
              className="w-full h-full"
              width={1920}
              height={962}
            />
          </div>
          <TopNavbar />
          <div className="z-10 absolute left-0 bottom-[53px] px-[84px] w-full flex justify-between items-center flex-nowrap gap-4">
            <div className="font-serif">
              <h1 className="text-[80px] text-white uppercase">
                The Grave Keeper
              </h1>
              <h3 className="text-[29px] text-white leading-[36px] max-w-[1161px]">
                A soulslike FPS. A Lovecraftian tale of an archaeologist’s bid
                for sanity and survival in the cosmic nightmare he finds himself
                in. <span className="font-bold">Coming early 2025.</span>
              </h3>
            </div>
            <div>
              <CtaButton
                variant={CtaButtonVariants.primary}
                className="w-[240px]"
                onClick={() =>
                  window.open("https://forms.gle/gfZk46cDaCepj7FQ7", "_blank")
                }
              >
                Wishlist on Steam
              </CtaButton>
            </div>
          </div>
        </section>
      </div>
      <section className="pt-[120px] px-10">
        <div className="flex justify-center w-full pb-[75px]">
          <Image
            src="/assets/images/Logo (White).png"
            width={1105}
            height={359}
            alt="Acedia Logo"
          />
        </div>
        <div className="flex gap-[100px] text-[29px] leading-[44px] font-sans">
          <div className="flex flex-1 flex-col gap-[50px]">
            <p>
              A game development & creative studio delivering narrative-driven,
              rich-in-visuals video games PC & Console, and offering services
              such as game development, 3D animation & visualization, 3D asset
              creation & modeling, sound design & more.
            </p>
            <p>
              Currently, we’re working on The Grave Keeper, a run-and-gun
              first-person shooter for PC. It’s the story of an archaeologist
              diving into the mystery of an infamously abandoned graveyard, only
              to never be able to find his way back. It comes out at the end of
              2024.
            </p>
            <p>
              <a
                href="https://forms.gle/gfZk46cDaCepj7FQ7"
                target="_blank"
                className="text-[#CFED4E] text-[29px] leading-[44px] font-serif font-semibold rounded-[32px] inline"
              >
                Join the waitlist
              </a>{" "}
              if you wanna receive dev updates & cool, exclusive artwork from
              the game.
            </p>
          </div>
          <div className="flex flex-1 flex-col gap-[50px]">
            <p className="mb-8">
              We’re extremely passionate about telling stories, be it through
              the games we develop, the animations we make, the sounds we design
              & the music we create. Sounds interesting? Wanna work with us?
            </p>
            <CtaButton
              variant={CtaButtonVariants.primary}
              className="w-[300px]"
              onClick={() => {
                router.push("/contact");
              }}
            >
              Let's work together
            </CtaButton>
          </div>
        </div>
      </section>
      <section className="relative px-10 pt-[500px] pb-[80px] overflow-clip">
        <div className="absolute z-[-1] top-0 right-0">
          <Image
            src="/assets/images/acedia-guide-(1)-16.png"
            width={2316}
            height={2731}
          />
        </div>
        <div className="flex flex-col gap-[200px] z-10 rounded-[32px]">
          <ProjectTile
            img="https://cdnb.artstation.com/p/assets/images/images/066/424/955/large/acedia-graded.jpg"
            textPrefix="3D"
          >
            Assembly in Chaos // A personal artwork by the team.
          </ProjectTile>
          <div>
            <ProjectTile
              img="https://cdnb.artstation.com/p/assets/images/images/066/425/101/large/acedia-shatter-stone-01.jpg"
              textPrefix="3D"
              className="mb-20"
            >
              A concept render for one of our game demos, Split Horizons.
            </ProjectTile>
            <p className="text-[29px] leading-[44px] font-serif font-semibold rounded-[32px]">
              <a
                href="https://www.artstation.com/acediadevs"
                target="_blank"
                className="text-[#CFED4E]"
              >
                Check out our Artstation
              </a>
            </p>
          </div>
        </div>
      </section>
      <section className="w-full" ref={portfolioSectionRef}>
        <Portfolio />
      </section>
      <section className="w-full" ref={servicesSectionRef}>
        <Services />
      </section>
      <Footer />
    </>
  );
};

export default HomeView;
