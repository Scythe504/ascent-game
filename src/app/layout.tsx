import type { Metadata } from "next";
import Abaddon from "next/font/local";
import { Poppins } from "next/font/google"
import "./globals.css";
import localFont from "next/font/local";
import { abaddon_bold } from "./utils/font";


export const metadata: Metadata = {
  title: "Ascent",
  description: "A Role Playing Game Chat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${abaddon_bold.className}`}>{children}</body>
    </html>
  );
}
