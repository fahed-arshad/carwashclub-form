import { Montserrat, Nunito_Sans } from "next/font/google";
import localFont from "next/font/local";

export const montserrat = Montserrat({ subsets: ["latin"] });
export const nunito = Nunito_Sans({ subsets: ["latin"] });

export const numberPlateFont = localFont({
  src: "./UKNumberPlate.ttf",
  display: "swap",
});
