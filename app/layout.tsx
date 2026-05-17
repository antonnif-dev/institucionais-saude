import { Inter, Playfair_Display } from "next/font/google";
import type { Metadata } from "next";
import { ReactNode } from "react";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const lucidaBright = localFont({
  src: "../public/fonts/LucidaBrightRegular.ttf",
  variable: "--font-lucida-bright",
});

const lucidaFaxItalic = localFont({
  src: "../public/fonts/LucidaFaxItalic.ttf",
  variable: "--font-lucida-fax-italic",
});

export const metadata: Metadata = {
  title: "Dra. Laís Namen",
  description: "Clínica especializada",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`
          ${inter.variable}
          ${playfair.variable}
          ${lucidaBright.variable}
          ${lucidaFaxItalic.variable}
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}