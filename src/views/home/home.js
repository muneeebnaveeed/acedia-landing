import TopNavbar from "@/components/layout/top-navbar";
import Image from "next/image";
import React, { useRef } from "react";
import ProjectTile from "./project-tile";
import Footer from "../../components/layout/footer";
import CtaButton, { CtaButtonVariants } from "@/components/cta-button";
import Portfolio from "./portfolio";
import Services from "./services";
import { useRouter } from "next/router";

const HomeView = () => {
  const router = useRouter();
  const gamesSectionRef = useRef();
  const portfolioSectionRef = useRef();
  const servicesSectionRef = useRef();
  return (
    <>
      <div className="relative">
        <Image
          src="/assets/images/grain.png"
          width={1920}
          height={1080}
          className="absolute pointer-events-none z-1 opacity-5"
        />
        <TopNavbar
          onClickGames={() => {
            debugger;
            gamesSectionRef.current.scrollIntoView();
          }}
          onClickPortfolio={() => portfolioSectionRef.current.scrollIntoView()}
          onClickServices={() => servicesSectionRef.current.scrollIntoView()}
        />
        <section
          className="w-full relative h-[950px] pb-28 px-10 overflow-clip"
          ref={gamesSectionRef}
        >
          <div className="absolute top-0 left-0 z-[-1] scale-[103%]">
            <Image
              src="/assets/images/header-image.jpg"
              width={1920}
              height={950}
            />
          </div>
          <div className="z-10 flex items-end justify-between w-full h-full">
            <div className="font-serif">
              <h1 className="text-[137px] text-white uppercase translate-y-7">
                The Grave Keeper
              </h1>
              <h3 className="text-[48px] text-white">Coming Winter, 2024</h3>
            </div>
            <div>
              <CtaButton
                variant={CtaButtonVariants.primary}
                className="w-[240px]"
                onClick={() =>
                  window.open("https://forms.gle/gfZk46cDaCepj7FQ7", "_blank")
                }
              >
                Join the waitlist
              </CtaButton>
            </div>
          </div>
        </section>
      </div>
      <section className="pt-[120px] px-10">
        <div className="flex justify-center w-full">
          <Image
            src="https://s3-alpha-sig.figma.com/img/cb78/1df7/8234b07de868e06948b496bec985abae?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EuQwFNTl8Tc~QCUeQ2VsPTGD-~x523wSWAp0l3P6TnrLtQqrUM0qB51gL-FrWyKUOl53CjGO2JaIbTlk7am7fW58IaJxu9tnon5MQkGeTlLbvRS2rheQSlhfQQ1lY72WWGpW2C37Q-zGmQDOelfVDaqczKeeaRMWmlq8RvIIWwBuaPwUj4~Id7NPO-yQyNU1dnbH~JQjqi~iTDC1SejLyaCrBOCB5W2K111XLexshScEKKFcyX4xyOVYPNCBSi0JE4I3VyL9P3NXUvLdet2ccs2aQOYQQ-45OEEOWaknXhzDhR76bz0~D2py9gYUnJsh1~jtPQapHNI16NV4kpkQEQ__"
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
          </div>
          <div className="flex flex-1 flex-col gap-[50px]">
            <p className="mb-8">
              We’re extremely passionate about telling stories, be it through
              the games we develop, the animations we make, the sounds we design
              & the music we create. Sounds interesting? Wanna work with us?
            </p>
            <p>
              Wanna receive dev updates & cool exclusive artwork for it? Join
              the waitlist!
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
            Still from a music video we recently animated for a New York-based
            musician.
          </ProjectTile>
          <div>
            <ProjectTile
              img="https://cdnb.artstation.com/p/assets/images/images/066/425/101/large/acedia-shatter-stone-01.jpg"
              textPrefix="3D"
              className="mb-20"
            >
              Still from a music video we recently animated for a New York-based
              musician.
            </ProjectTile>
            <p className="text-[29px] leading-[44px] font-serif font-bold rounded-[32px]">
              <a
                href="https://www.artstation.com/acediadevs"
                target="_blank"
                className="text-[#CFED4E] underline"
              >
                Check out more here
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
