import CtaButton, { CtaButtonVariants } from "@/components/cta-button";
import TopNavbar from "@/components/layout/top-navbar";
import React from "react";

const ContactView = () => {
  return (
    <>
      <TopNavbar />
      <section className="px-10 py-[120px] relative font-serif w-full">
        <div className="z-10 w-full">
          <h1 className="uppercase text-[#A2FF00] text-[217px] leading-[192px] font-bold mb-[34px]">
            Contact
          </h1>
          <p className="font-medium text-[27px] leading-[44px] text-[#F7FCDE] max-w-[1100px] mb-[183px]">
          Just fill out the form and we'll be in touch.
          </p>
          <form
            className="px-[53px] py-[68px] bg-[#4813D8] rounded-[38px] w-full flex flex-col gap-[80px]"
            method="POST"
            action="https://formspree.io/f/mrgnkwlr"
          >
            <div className="flex items-center gap-[80px]">
              <div className="flex items-start gap-[60px] flex-1">
                <label
                  className="uppercase text-[29px] leading-[44px] font-semibold min-w-[180px]"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="bg-[#A2FF00] p-[20px] text-black flex-1"
                />
              </div>
              <div className="flex items-start gap-[60px] flex-1">
                <label
                  className="uppercase text-[29px] leading-[44px] font-semibold min-w-[180px]"
                  htmlFor="company"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="bg-[#A2FF00] p-[20px] text-black flex-1"
                />
              </div>
            </div>
            <div className="flex items-center gap-[80px]">
              <div className="flex items-start gap-[60px] flex-1">
                <label
                  className="uppercase text-[29px] leading-[44px] font-semibold min-w-[180px]"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="bg-[#A2FF00] p-[20px] text-black flex-1"
                />
              </div>
              <div className="flex-1" />
            </div>
            <div className="flex items-center gap-[80px]">
              <div className="flex items-start gap-[60px] flex-1">
                <label
                  className="uppercase text-[29px] leading-[44px] font-semibold min-w-[180px]"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  type="text"
                  id="message"
                  name="message"
                  className="bg-[#A2FF00] p-[20px] text-black flex-1 min-h-[200px]"
                />
              </div>
              <div className="flex-1" />
            </div>
            <div className="flex justify-end w-full">
              <CtaButton variant={CtaButtonVariants.primary} htmlType="submit">
                Send
              </CtaButton>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactView;
