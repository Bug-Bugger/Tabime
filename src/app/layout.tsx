import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { Lexend } from "next/font/google";
import "./globals.css";
import Navbar from "@components/layout/navbar";
import Footer from "@components/layout/footer";
import ObserverProvider from "@components/layout/observerProvider";

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
      <ObserverProvider>
        <body>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </ObserverProvider>
    </html>
  );
}
