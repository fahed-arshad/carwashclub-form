"use client";
import "./globals.css";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme/theme";
import { Montserrat, Nunito_Sans } from "next/font/google";
import localFont from "next/font/local";

export const montserrat = Montserrat({ subsets: ["latin"] });
export const nunito = Nunito_Sans({ subsets: ["latin"] });

export const numberPlateFont = localFont({
  src: "./UKNumberPlate.ttf",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
