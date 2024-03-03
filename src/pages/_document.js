import { clashGrotesk, inter } from "@/utils/fonts";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html
      lang="en"
      className={`${clashGrotesk.variable} ${inter.variable} font-sans`}
    >
      <Head>
        <link
          rel="stylesheet"
          href="https://meyerweb.com/eric/tools/css/reset/reset.css"
        />
        <link rel="styleheet" href="clash-grotesk.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
