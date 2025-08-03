import type { Metadata } from "next";
import { Geist, Oxanium } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/home/c-navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const oxanium = Oxanium({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-oxanium',
});

export const metadata: Metadata = {
  title: "XP Zone",
  description: "Sistema criado para anunciar jogos, console e acessórios de games!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${oxanium.variable} antialiased bg-[#12042B]`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
