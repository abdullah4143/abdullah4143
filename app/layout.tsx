import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CursorGlow from "@/components/CursorGlow";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "System_Init: Abdullah Ashraf",
  description: "Full-Stack Architect & Logic Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-[#0B0F1A] text-white overflow-x-hidden`}
      >
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
