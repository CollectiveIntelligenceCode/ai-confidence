import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "AI Confidence — Future-proof your business through confident AI adoption.",
  description:
    "Most organisations don't have an AI problem. They have a confidence problem. We help people, teams and organisations build the capability, confidence and operating models needed to thrive in an AI-enabled future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${playfairDisplay.variable} h-full`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
