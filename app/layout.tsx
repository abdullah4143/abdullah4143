import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CursorGlow from "@/components/CursorGlow";
import ScrollBall from "@/components/ScrollBall";
import PathBall from "@/components/PathBall";
import DisableDevTools from "@/components/DisableDevTools";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abdullah Ashraf — Full-Stack Developer",
  description:
    "Full-stack developer building SaaS platforms, CRM systems, and client products from Islamabad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
        style={{ backgroundColor: "var(--paper)", color: "var(--ink)" }}
      >
        <DisableDevTools />
        <CursorGlow />
        <ScrollBall />
        <PathBall />
        {children}
      </body>
    </html>
  );
}
