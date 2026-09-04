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

  const courseListSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        "name": "AI Confidence Digital Cohort",
        "description": "A digital cohort programme to build AI confidence across teams. Practical, actionable, and designed for real-world work.",
        "url": "https://aiconfidence.co/cohort",
        "provider": {
          "@type": "Organization",
          "name": "AI Confidence",
          "url": "https://aiconfidence.co"
        },
        "educationalLevel": "Beginner to Intermediate",
        "teaches": "AI literacy, confidence with AI tools, practical AI adoption",
        "inLanguage": "en-GB"
      },
      {
        "@type": "Course",
        "name": "AI Confidence for Leaders",
        "description": "Leadership programme for executives and managers to build strategic AI confidence and lead AI-ready organisations.",
        "url": "https://aiconfidence.co/leaders",
        "provider": {
          "@type": "Organization",
          "name": "AI Confidence",
          "url": "https://aiconfidence.co"
        },
        "educationalLevel": "Advanced",
        "teaches": "AI strategy, leadership in AI transformation, AI-ready culture",
        "inLanguage": "en-GB"
      },
      {
        "@type": "Course",
        "name": "AI Confidence for Organisations",
        "description": "Organisation-wide AI confidence programme. Build capability, culture, and confidence across every level of your business.",
        "url": "https://aiconfidence.co/organisations",
        "provider": {
          "@type": "Organization",
          "name": "AI Confidence",
          "url": "https://aiconfidence.co"
        },
        "educationalLevel": "All Levels",
        "teaches": "AI adoption, organisational change management, AI fluency",
        "inLanguage": "en-GB"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is AI Confidence?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI Confidence is a training and development programme designed to help people, teams, and organisations become confident with AI. We provide practical skills and mindset shifts for an AI-enabled future."
        }
      },
      {
        "@type": "Question",
        "name": "Who is AI Confidence for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI Confidence is designed for individuals, teams, leaders, and entire organisations. We have programmes tailored for every level — from first-time AI users to executives leading transformation."
        }
      },
      {
        "@type": "Question",
        "name": "What makes AI Confidence different?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unlike generic AI training, AI Confidence focuses on building real confidence — not just knowledge. Our programmes address the human side of AI adoption, helping people thrive rather than fear the technology."
        }
      },
      {
        "@type": "Question",
        "name": "How do I start building AI confidence?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Start with our How It Works page to find the right path for you. We offer three entry points: the Digital Cohort for teams, a programme For Leaders, and a comprehensive solution For Organisations."
        }
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
        <Script
          id="course-list-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(courseListSchema) }}
        />
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="min-h-full">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-sky-500 focus:text-white focus:rounded-lg focus:font-semibold">Skip to main content</a>
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
