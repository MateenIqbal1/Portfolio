import type { Metadata } from "next";
import { Geist,} from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Portfolio",
  description: "My portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} bg-[#030014] overflow-y-scroll overflow-x-hidden `}
      >
        <StarsCanvas />
    
          <Navbar />
    

        {children}
        <div id="about-me">
          <Footer />
        </div>
      </body>
    </html>
  );
}
