import "@/styles/globals.css";
import { clashGrotesk, inter } from "@/utils/fonts";

export default function App({ Component, pageProps }) {
  return (
    <div className={`${clashGrotesk.variable} ${inter.variable} font-sans`}>
      <Component {...pageProps} />;
    </div>
  );
}
