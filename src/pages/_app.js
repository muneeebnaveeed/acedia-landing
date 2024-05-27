import "@/styles/globals.css";
import { clashGrotesk, inter } from "@/utils/fonts";
import Image from "next/image";

export default function App({ Component, pageProps }) {
  return (
    <div className={`${clashGrotesk.variable} ${inter.variable} font-sans`}>
      <div className="fixed w-screen h-screen flex justify-center items-center z-[10000]">
        <div className="w-full h-full p-20 backdrop-blur-lg flex flex-col gap-8 items-center justify-center">
          <Image width={960} height={540} src="/assets/images/maintenance-cropped.png" className="max-w-[624px] max-h-full object-contain" />
          <p className="text-[30px] font-extralight">Aw jeez, you caught us. Still setting things up.</p>
        </div>
      </div>
      <Component {...pageProps} />;
    </div>
  );
}
