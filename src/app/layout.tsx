import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { Lexend } from "next/font/google";
import "./globals.css";
import Navbar from "@components/layout/Navbar";
import Footer from "@components/layout/Footer";
import { Providers } from "./providers";


export const metadata: Metadata = {
  title: "Tabime",
  description: "Simplicity For Incredible Journeys",
  icons: {
    icon: "./assets/logo.svg",
  },
};

const lexend = Lexend({
  weight: ["400", "700"],
  variable: "--font-Lexend",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lexend.variable} ${GeistMono.variable}`}>
    
    <Providers>
        <body>

          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
        </Providers>
    </html>
  );
}
