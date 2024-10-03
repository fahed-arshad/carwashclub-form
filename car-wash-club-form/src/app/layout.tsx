"use client";
import "./globals.css";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme/theme";
import { nunito } from "./theme/font";

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
