import { Montserrat, Nunito_Sans, Syne, Saira } from "next/font/google";
import localFont from "next/font/local";

export const montserrat = Montserrat({ subsets: ["latin"] });
export const nunito = Nunito_Sans({ subsets: ["latin"] });
export const syne = Syne({ subsets: ["latin"] });
export const saira = Saira({ subsets: ["latin"] });

export const numberPlateFont = localFont({
  src: "./UKNumberPlate.ttf",
  display: "swap",
});
