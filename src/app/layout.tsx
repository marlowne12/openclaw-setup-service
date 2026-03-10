import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MaxSetup — Get Your AI Employee Set Up in 24 Hours",
  description:
    "Professional OpenClaw configuration. Skip the tech headaches. Custom AI assistant setup with vetted skills, persona design, and training. From $500.",
  keywords: [
    "openclaw setup",
    "ai employee setup",
    "openclaw installation",
    "ai assistant configuration",
    "openclaw help",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
