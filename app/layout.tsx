import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CommandPalette from "@/components/CommandPalette";
import EasterEgg from "@/components/EasterEgg";
import CustomCursor from "@/components/CustomCursor";

const syne = Syne({ subsets: ["latin"], variable: "--font-display", weight: ["400","500","600","700","800"] });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans", weight: ["300","400","500","600"] });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["300","400","500","600"] });

export const metadata: Metadata = {
  title: "Dhiya Ulhaq Prima Yuga | Portfolio",
  description: "Informatics Student · Cybersecurity Enthusiast · Fullstack Web Developer — Universitas Siliwangi",
  keywords: ["Dhiya Ulhaq","cybersecurity","web developer","portfolio","Universitas Siliwangi"],
  openGraph: { title: "Dhiya Ulhaq Prima Yuga | Portfolio", description: "Cybersecurity Enthusiast & Fullstack Web Developer", type: "website" },
};

const themeScript = `(function(){try{var s=localStorage.getItem('theme');var p=window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light';document.documentElement.setAttribute('data-theme',s||p);}catch(e){}})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${syne.variable} ${dmSans.variable} ${mono.variable} antialiased`} style={{ overflowX: "hidden" }}>
        {children}
        <CommandPalette />
        <EasterEgg />
        <CustomCursor />
      </body>
    </html>
  );
}
