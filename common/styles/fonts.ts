import { Noto_Sans as NotoSans } from "next/font/google";
import localFont from "next/font/local";

export const notoSans = NotoSans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
});

export const ggSans = localFont({
  src: [
    {
      path: "../../styles/fonts/gg-sans/gg sans Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../styles/fonts/gg-sans/gg sans Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../styles/fonts/gg-sans/gg sans Semibold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../styles/fonts/gg-sans/gg sans Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gg-sans",
});

export const gintoNord = localFont({
  src: [
    {
      path: "../../styles/fonts/ginto-nord/ABCGintoNord-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../styles/fonts/ginto-nord/ABCGintoNord-Thin-Italic.otf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../../styles/fonts/ginto-nord/ABCGintoNord-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../styles/fonts/ginto-nord/ABCGintoNord-Light-Italic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../styles/fonts/ginto-nord/ABCGintoNord-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../styles/fonts/ginto-nord/ABCGintoNord-Regular-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../styles/fonts/ginto-nord/ABCGintoNord-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../styles/fonts/ginto-nord/ABCGintoNord-Medium-Italic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../styles/fonts/ginto-nord/ABCGintoNord-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../styles/fonts/ginto-nord/ABCGintoNord-Bold-Italic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../styles/fonts/ginto-nord/ABCGintoNord-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../styles/fonts/ginto-nord/ABCGintoNord-Black-Italic.otf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-ginto-nord",
});
