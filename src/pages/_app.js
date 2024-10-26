import { UnderMaintenance } from "@/components/under-maintenance";
import "@/styles/globals.css";
import { clashGrotesk, inter } from "@/utils/fonts";

export default function App({ Component, pageProps }) {
  return (
    <div className={`${clashGrotesk.variable} ${inter.variable} font-sans`}>
      {process.env.UNDER_MAINTENANCE === "true" && <UnderMaintenance />}
      <Component {...pageProps} />;
    </div>
  );
}
