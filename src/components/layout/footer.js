import CtaButton, { CtaButtonVariants } from "@/components/cta-button";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const Footer = () => {
  const router = useRouter();
  return (
    <footer className="w-full bg-[#A2FF00] font-serif relative overflow-clip">
      <Image
        src="/assets/images/acedia-guide-(1)-14.png"
        width={583}
        height={1267}
        className="absolute right-0 -rotate-90 top-[-32%]"
      />
      <div className="px-10 py-[250px] z-10">
        <div className="flex justify-center w-full">
          <div className="mb-[140px]">
            <h2 className="font-semibold text-[86px] leading-[88px] text-[#4813D8] opacity-80 mb-[43px] max-w-[768px]">
              Let's build something really good together.
            </h2>
            <CtaButton
              variant={CtaButtonVariants.footer}
              onClick={() => router.push("/contact")}
            >
              Get in touch with us
            </CtaButton>
          </div>
        </div>

        <div className="flex items-center justify-center w-full gap-8">
          <a href="https://twitter.com/acediadevs" target="_blank">
            <Image
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0xNC4wOTU0NzksMTAuMzE2NDgyTDIyLjI4NjM1NCwxaC0xLjk0MDcxOGwtNy4xMTUzNTIsOC4wODc2ODJMNy41NTE0MTQsMUgxbDguNTg5NDg4LDEyLjIzMTA5M0wxLDIzaDEuOTQwNzE3ICBsNy41MDkzNzItOC41NDI4NjFMMTYuNDQ4NTg3LDIzSDIzTDE0LjA5NTQ3OSwxMC4zMTY0ODJ6IE0xMS40MzY1MjIsMTMuMzM4NDY1bC0wLjg3MTYyNC0xLjIxODcwNGwtNi45MjQzMTEtOS42ODgxNWgyLjk4MTMzOSAgbDUuNTg5NzgsNy44MjE1NWwwLjg2Nzk0OSwxLjIxODcwNGw3LjI2NTA2LDEwLjE2NjI3MWgtMi45ODEzMzlMMTEuNDM2NTIyLDEzLjMzODQ2NXoiLz48L3N2Zz4="
              width={80}
              height={80}
            />
          </a>
          <a href="http://www.instagram.com/acediadevs" target="_blank">
            <Image
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTUuMjMzIDUuNDg4Yy0uODQzLS4wMzgtMS4wOTctLjA0Ni0zLjIzMy0uMDQ2cy0yLjM4OS4wMDgtMy4yMzIuMDQ2Yy0yLjE3LjA5OS0zLjE4MSAxLjEyNy0zLjI3OSAzLjI3OS0uMDM5Ljg0NC0uMDQ4IDEuMDk3LS4wNDggMy4yMzNzLjAwOSAyLjM4OS4wNDcgMy4yMzNjLjA5OSAyLjE0OCAxLjEwNiAzLjE4IDMuMjc5IDMuMjc5Ljg0My4wMzggMS4wOTcuMDQ3IDMuMjMzLjA0NyAyLjEzNyAwIDIuMzktLjAwOCAzLjIzMy0uMDQ2IDIuMTctLjA5OSAzLjE4LTEuMTI5IDMuMjc5LTMuMjc5LjAzOC0uODQ0LjA0Ni0xLjA5Ny4wNDYtMy4yMzNzLS4wMDgtMi4zODktLjA0Ni0zLjIzMmMtLjA5OS0yLjE1My0xLjExMS0zLjE4Mi0zLjI3OS0zLjI4MXptLTMuMjMzIDEwLjYyYy0yLjI2OSAwLTQuMTA4LTEuODM5LTQuMTA4LTQuMTA4IDAtMi4yNjkgMS44NC00LjEwOCA0LjEwOC00LjEwOHM0LjEwOCAxLjgzOSA0LjEwOCA0LjEwOGMwIDIuMjY5LTEuODM5IDQuMTA4LTQuMTA4IDQuMTA4em00LjI3MS03LjQxOGMtLjUzIDAtLjk2LS40My0uOTYtLjk2cy40My0uOTYuOTYtLjk2Ljk2LjQzLjk2Ljk2LS40My45Ni0uOTYuOTZ6bS0xLjYwNCAzLjMxYzAgMS40NzMtMS4xOTQgMi42NjctMi42NjcgMi42NjdzLTIuNjY3LTEuMTk0LTIuNjY3LTIuNjY3YzAtMS40NzMgMS4xOTQtMi42NjcgMi42NjctMi42NjdzMi42NjcgMS4xOTQgMi42NjcgMi42Njd6bTQuMzMzLTEyaC0xNGMtMi43NjEgMC01IDIuMjM5LTUgNXYxNGMwIDIuNzYxIDIuMjM5IDUgNSA1aDE0YzIuNzYyIDAgNS0yLjIzOSA1LTV2LTE0YzAtMi43NjEtMi4yMzgtNS01LTV6bS45NTIgMTUuMjk4Yy0uMTMyIDIuOTA5LTEuNzUxIDQuNTIxLTQuNjUzIDQuNjU0LS44NTQuMDM5LTEuMTI2LjA0OC0zLjI5OS4wNDhzLTIuNDQ0LS4wMDktMy4yOTgtLjA0OGMtMi45MDgtLjEzMy00LjUyLTEuNzQ4LTQuNjU0LTQuNjU0LS4wMzktLjg1My0uMDQ4LTEuMTI1LS4wNDgtMy4yOTggMC0yLjE3Mi4wMDktMi40NDUuMDQ4LTMuMjk4LjEzNC0yLjkwOCAxLjc0OC00LjUyMSA0LjY1NC00LjY1My44NTQtLjA0IDEuMTI1LS4wNDkgMy4yOTgtLjA0OXMyLjQ0NS4wMDkgMy4yOTkuMDQ4YzIuOTA4LjEzMyA0LjUyMyAxLjc1MSA0LjY1MyA0LjY1My4wMzkuODU0LjA0OCAxLjEyNy4wNDggMy4yOTkgMCAyLjE3My0uMDA5IDIuNDQ1LS4wNDggMy4yOTh6Ii8+PC9zdmc+"
              width={80}
              height={80}
            />
          </a>
          <a href="http://linkedin.com/company/acediadevs" target="_blank">
            <Image
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTkgMGgtMTRjLTIuNzYxIDAtNSAyLjIzOS01IDV2MTRjMCAyLjc2MSAyLjIzOSA1IDUgNWgxNGMyLjc2MiAwIDUtMi4yMzkgNS01di0xNGMwLTIuNzYxLTIuMjM4LTUtNS01em0tMTEgMTloLTN2LTExaDN2MTF6bS0xLjUtMTIuMjY4Yy0uOTY2IDAtMS43NS0uNzktMS43NS0xLjc2NHMuNzg0LTEuNzY0IDEuNzUtMS43NjQgMS43NS43OSAxLjc1IDEuNzY0LS43ODMgMS43NjQtMS43NSAxLjc2NHptMTMuNSAxMi4yNjhoLTN2LTUuNjA0YzAtMy4zNjgtNC0zLjExMy00IDB2NS42MDRoLTN2LTExaDN2MS43NjVjMS4zOTYtMi41ODYgNy0yLjc3NyA3IDIuNDc2djYuNzU5eiIvPjwvc3ZnPg=="
              width={80}
              height={80}
            />
          </a>
          <a href="mailto:contact@acediadevs.com">
            <Image
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMTIuNzEzbC0xMS45ODUtOS43MTNoMjMuOTdsLTExLjk4NSA5LjcxM3ptMCAyLjU3NGwtMTItOS43MjV2MTUuNDM4aDI0di0xNS40MzhsLTEyIDkuNzI1eiIvPjwvc3ZnPg=="
              width={100}
              height={80}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
