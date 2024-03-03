import classNames from "classnames";
import Image from "next/image";
import { useRouter } from "next/router";

const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Games", href: "/" },
  { label: "Portfolio", href: "/" },
  { label: "Services", href: "/" },
  { label: "Contact Us", href: "/contact" },
];

const NavigationListItem = ({ isFirstItem, isLastItem, children, onClick }) => {
  return (
    <li>
      <button
        type="button"
        onClick={onClick}
        className={classNames(
          "py-3 px-2 text-[15px] text-[rgba(255,255,255,0.8)] hover:text-[rgba(255,255,255,1)] transition-colors cursor-pointer font-sans",
          { "pl-5": isFirstItem, "pr-5": isLastItem }
        )}
      >
        {children}
      </button>
    </li>
  );
};

const NavigationList = ({
  onClickGames,
  onClickPortfolio,
  onClickServices,
}) => {
  const router = useRouter();
  return (
    <ul className="flex items-center justify-center w-full ">
      <div className="bg-[rgb(246,252,220,0.2)] flex items-center rounded-full">
        {links.map((e, index, arr) => {
          return (
            <NavigationListItem
              onClick={() => {
                if (e.label === "Home") router.push("/");
                else if (e.label === "About Us") router.push("/about");
                else if (e.label === "Games") {
                  if (router.pathname === "/") onClickGames?.();
                  else router.push("/").then(() => onClickGames?.());
                } else if (e.label === "Portfolio") {
                  if (router.pathname === "/") onClickPortfolio?.();
                  else router.push("/").then(() => onClickPortfolio?.());
                } else if (e.label === "Services") {
                  if (router.pathname === "/") onClickServices?.();
                  else router.push("/").then(() => onClickServices?.());
                } else if (e.label === "Contact Us") router.push("/contact");
              }}
              isLastItem={index >= arr.length - 1}
              isFirstItem={index <= 0}
            >
              {e.label}
            </NavigationListItem>
          );
        })}
      </div>
    </ul>
  );
};

const TopNavbar = ({ onClickGames, onClickPortfolio, onClickServices }) => {
  const router = useRouter();
  return (
    <nav className="relative bg-[#4813D8] w-full h-[72px] px-10">
      <button
        type="button"
        className="absolute -translate-y-1/2 cursor-pointer top-9 left-10"
        onCLick={() => router.push("/")}
      >
        <Image
          src="https://s3-alpha-sig.figma.com/img/cb78/1df7/8234b07de868e06948b496bec985abae?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EuQwFNTl8Tc~QCUeQ2VsPTGD-~x523wSWAp0l3P6TnrLtQqrUM0qB51gL-FrWyKUOl53CjGO2JaIbTlk7am7fW58IaJxu9tnon5MQkGeTlLbvRS2rheQSlhfQQ1lY72WWGpW2C37Q-zGmQDOelfVDaqczKeeaRMWmlq8RvIIWwBuaPwUj4~Id7NPO-yQyNU1dnbH~JQjqi~iTDC1SejLyaCrBOCB5W2K111XLexshScEKKFcyX4xyOVYPNCBSi0JE4I3VyL9P3NXUvLdet2ccs2aQOYQQ-45OEEOWaknXhzDhR76bz0~D2py9gYUnJsh1~jtPQapHNI16NV4kpkQEQ__"
          width={159}
          height={52}
          alt="Acedia Logo"
        />
      </button>
      <div className="flex items-center justify-between w-full h-full">
        <NavigationList
          onClickGames={onClickGames}
          onClickPortfolio={onClickPortfolio}
          onClickServices={onClickServices}
        />
      </div>
    </nav>
  );
};

export default TopNavbar;
