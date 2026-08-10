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
  title: "AI Confidence: Build Confident Teams & AI-Ready Organisations",
  description:
    "Build AI confidence across your organisation. Expert training for people, teams, and leaders to thrive in an AI-enabled future.",
  openGraph: {
    title: "AI Confidence: Build Confident Teams & AI-Ready Organisations",
    description:
      "Build AI confidence across your organisation. Expert training for people, teams, and leaders to thrive in an AI-enabled future.",
    url: "https://aiconfidence.co",
    siteName: "AI Confidence",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "AI Confidence" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Confidence: Build Confident Teams & AI-Ready Organisations",
    description:
      "Build AI confidence across your organisation. Expert training for people, teams, and leaders.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AI Confidence",
    "url": "https://aiconfidence.co",
    "description": "AI confidence-building courses and programmes for people, teams, and organisations",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "url": "https://aiconfidence.co"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://aiconfidence.co",
    "name": "AI Confidence",
    "description": "Build AI confidence across your organisation"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://aiconfidence.co"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "How It Works",
        "item": "https://aiconfidence.co/how-it-works"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Digital Cohort",
        "item": "https://aiconfidence.co/cohort"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "For Leaders",
        "item": "https://aiconfidence.co/leaders"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "For Organisations",
        "item": "https://aiconfidence.co/organisations"
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${playfairDisplay.variable} h-full`}
    >
      <head>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Script
          id="breadcrumb-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>
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
