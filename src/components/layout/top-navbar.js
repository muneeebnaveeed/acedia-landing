import classNames from "classnames";
import Image from "next/image";
import { useRouter } from "next/router";

export const Sections = Object.freeze({
  GAMES: "games",
  PORTFOLIO: "portfolio",
  SERVICES: "services",
});

const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Games", href: `/?section=${Sections.GAMES}` },
  { label: "Portfolio", href: `/?section=${Sections.PORTFOLIO}` },
  { label: "Services", href: `/?section=${Sections.SERVICES}` },
  { label: "Contact Us", href: "/contact" },
];

const NavigationListItem = ({ isFirstItem, isLastItem, children, onClick }) => {
  return (
    <li>
      <button
        type="button"
        onClick={onClick}
        className={classNames(
          "py-3 px-2 text-[15px] text-[#F6FCDC] hover:text-opacity-80 transition-opacity cursor-pointer font-sans font-medium leading-[28px]",
          { "pl-5": isFirstItem, "pr-5": isLastItem }
        )}
      >
        {children}
      </button>
    </li>
  );
};

const NavigationList = () => {
  const router = useRouter();
  return (
    <ul className="flex items-center justify-center w-full ">
      <div className="bg-[#F6FCDC33] bg-opacity-20 flex items-center rounded-full">
        {links.map((link, index, arr) => {
          return (
            <NavigationListItem
              key={link.label}
              onClick={() => router.push(link.href, undefined)}
              isLastItem={index >= arr.length - 1}
              isFirstItem={index <= 0}
            >
              {link.label}
            </NavigationListItem>
          );
        })}
      </div>
    </ul>
  );
};

const TopNavbar = ({ className }) => {
  const router = useRouter();
  return (
    <nav
      className={classNames(
        "w-full px-[29px]",
        {
          relative:
            typeof className === "string" && !className.includes("absolute"),
        },
        className
      )}
    >
      <button
        type="button"
        className="absolute py-[27px]"
        onClick={() => router.push("/")}
      >
        <Image
          src="/assets/images/Logo (White).png"
          width={159}
          height={52}
          alt="Acedia Logo"
        />
      </button>
      <div className="flex items-center py-[27px] justify-between w-full h-full">
        <NavigationList />
      </div>
      <div />
    </nav>
  );
};

export default TopNavbar;
