import type { Metadata } from "next";
import "./globals.css";
import { abaddon_bold } from "../utils/font";
import { ThemeProvider } from "@/components/ui/theme-provider";


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
      <body className={`${abaddon_bold.className}`}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
    </html>
  );
}
