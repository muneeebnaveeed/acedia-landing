import TopNavbar from "@/components/layout/top-navbar";
import Image from "next/image";
import React from "react";
import ProjectTile from "./project-tile";
import Footer from "../../components/layout/footer";
import CtaButton, { CtaButtonVariants } from "@/components/cta-button";
import Portfolio from "./portfolio";
import Services from "./services";

const HomeView = () => {
  return (
    <>
      <div className="relative">
        <Image
          src="/assets/images/grain.png"
          width={1920}
          height={1080}
          className="absolute pointer-events-none z-1 opacity-5"
        />
        <TopNavbar />
        <section className="w-full relative h-[950px] pb-28 px-10 overflow-clip">
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
          <div className="flex flex-col gap-[50px]">
            <p>
              A game development & creative studio delivering narrative-driven,
              rich-in-visuals video games PC & Console, and offering services
              such as game development, 3D animation & visualization, 3D asset
              creation & modeling, sound design & more.
            </p>
            <p>
              Wanna receive dev updates & cool exclusive artwork for it? Join
              the waitlist!
            </p>
            <CtaButton
              variant={CtaButtonVariants.primary}
              className="w-[300px]"
            >
              Let's work together
            </CtaButton>
          </div>
          <div className="flex flex-col gap-[50px]">
            <p>
              Currently, we’re working on The Grave Keeper, a run-and-gun
              first-person shooter for PC. It’s the story of an archaeologist
              diving into the mystery of an infamously abandoned graveyard, only
              to never be able to find his way back. It comes out at the end of
              2024.
            </p>
            <p>
              We’re extremely passionate about telling stories, be it through
              the games we develop, the animations we make, the sounds we design
              & the music we create. Sounds interesting? Wanna work with us? Get
              in touch! (This’ll be the call to action instead of “Let’s work
              together!”)
            </p>
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
        <div className="flex flex-col gap-[200px] z-10">
          <ProjectTile img="/assets/images/3d.jpg" textPrefix="3D">
            Worked with a small team to build a chart-topping animations for one
            of the fastest growing e-commerce brands in the world.
          </ProjectTile>
          <div>
            <ProjectTile
              img="/assets/images/3d-1.jpg"
              textPrefix="3D"
              className="mb-20"
            >
              Worked with a small team to build a chart-topping animations for
              one of the fastest growing e-commerce brands in the world.
            </ProjectTile>
            <p className="text-[29px] leading-[44px] font-serif font-bold">
              We got way more stuff to show you.{" "}
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
      <Portfolio />
      <Services />
      <Footer />
    </>
  );
};

export default HomeView;
