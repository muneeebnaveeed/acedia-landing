import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const clashGrotesk = localFont({
  variable: "--font-clash-grotesk",
  src: [
    {
      path: "../assets/fonts/GROTESKLIGHT.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/GROTESKREGULAR.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/GROTESKMEDIUM.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/GROTESKSEMIBOLD.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/GROTESKBOLD.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});
