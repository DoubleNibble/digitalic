import type { Metadata } from "next";
import { Inter, Comfortaa, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import Loader from "@/components/Loader";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const comfortaa = Comfortaa({ subsets: ["latin"], variable: "--font-comfortaa" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

export const metadata: Metadata = {
  title: "Digitalic — Emphasize Your Business",
  description: "AI-Driven. Blockchain-Secured. Under Your Control.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${comfortaa.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* Added FonAwesome CDN */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        />
      </head>
      <body className="font-sans">
        <Loader />
        <Cursor />
        <div className="ambient-bg" />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
