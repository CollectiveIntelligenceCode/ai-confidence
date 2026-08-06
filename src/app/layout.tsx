import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import Script from "next/script";
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
  metadataBase: new URL("https://aiconfidence.co"),
  alternates: { canonical: "https://aiconfidence.co" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  title: "AI Confidence — Future-proof your business through confident AI adoption.",
  description:
    "Most organisations don't have an AI problem. They have a confidence problem. We help people, teams and organisations build the capability, confidence and operating models needed to thrive in an AI-enabled future.",
  openGraph: {
    title: "AI Confidence — Future-proof your business through confident AI adoption.",
    description:
      "Most organisations don't have an AI problem. They have a confidence problem. We help people, teams and organisations build the capability, confidence and operating models needed to thrive in an AI-enabled future.",
    url: "https://aiconfidence.co",
    siteName: "AI Confidence",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "AI Confidence" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Confidence — Future-proof your business through confident AI adoption.",
    description:
      "Most organisations don't have an AI problem. They have a confidence problem.",
    images: ["/opengraph-image"],
  },
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
      <body className="min-h-full">
        {children}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-ME0LQFTXTT" strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ME0LQFTXTT');
        `}</Script>
      </body>
    </html>
  );
}
