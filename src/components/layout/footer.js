import CtaButton, { CtaButtonVariants } from "@/components/cta-button";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#A2FF00] font-serif relative overflow-clip">
      <Image
        src="/assets/images/acedia-guide-(1)-14.png"
        width={583}
        height={1267}
        className="absolute right-0 -rotate-90 top-[-32%]"
      />
      <div className="px-10 py-[250px] z-10">
        <div className="flex gap-[168px] mb-[140px]">
          <div>
            <h2 className="font-semibold text-[86px] leading-[88px] text-[#4813D8] opacity-80 mb-[43px] max-w-[768px]">
              Let's build something really good together.
            </h2>
            <CtaButton variant={CtaButtonVariants.footer}>
              Schedule time to chat with us
            </CtaButton>
          </div>
          <p className="max-w-[610px] text-sm leading-[28px] text-black">
            *Some important things to know about us: We were raised on punk rock
            and the internet. We don't tolerate misogynist, racist, or
            homophobic language. We're anti-oppression and not really into how
            this capitalist culture thing is working out for the human race. Our
            prices are set based on our experience and expertise. We are proud
            and honoured to do what we love in such an amazing place - The City
            of Hamilton is situated upon the traditional territories of the
            Erie, Neutral, Huron-Wendat, Haudenosaunee and Mississaugas. This
            land is covered by the Dish With One Spoon Wampum Belt Covenant,
            which was an agreement between the Haudenosaunee and Anishinaabek to
            share and care for the resources around the Great Lakes. We further
            acknowledge that this land is covered by the Between the Lakes
            Purchase, 1792, between the Crown and the Mississaugas of the Credit
            First Nation. Today, the City of Hamilton is home to many Indigenous
            people from across Turtle Island (North America) and we recognize
            that we must do more to learn about the rich history of this land so
            that we can better understand our roles as residents, neighbours,
            partners and caretakers.
          </p>
        </div>
        <div className="flex items-center justify-center w-full gap-3">
          <a href="https://twitter.com/acediadevs" target="_blank">
            <Image src="/assets/images/x-logo.png" width={80} height={80} />
          </a>
          <a href="http://www.instagram.com/acediadevs" target="_blank">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
              width={80}
              height={80}
            />
          </a>
          <a href="www.linkedin.com/company/acediadevs" target="_blank">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
              width={80}
              height={80}
            />
          </a>
          <a href="mailto:contact@acediadevs.com">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfCe8PumZ5jhEGolAsIG_iv2LKJ6OBsw0V4Q&usqp=CAU"
              width={115}
              height={80}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
