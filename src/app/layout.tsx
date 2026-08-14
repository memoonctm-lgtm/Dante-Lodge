import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { SiteProvider } from "@/context/SiteProvider";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dante Lodge #174 | Freemasonry in Louisiana",
  description:
    "Dante Lodge #174 — A brotherhood of men dedicated to integrity, fellowship, and community service in Louisiana. Learn about Freemasonry and become a Mason.",
  keywords: [
    "Freemasonry",
    "Masonic Lodge",
    "Louisiana",
    "Dante Lodge",
    "Become a Mason",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <SiteProvider>{children}</SiteProvider>
      </body>
    </html>
  );
}
