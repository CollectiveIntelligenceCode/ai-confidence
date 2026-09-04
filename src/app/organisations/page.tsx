import type { Metadata } from 'next';
import Script from 'next/script';
import OrganisationsPageContent from '@/components/OrganisationsPageContent';

export const metadata: Metadata = {
  title: 'AI Confidence for Organisations | Enterprise AI Training',
  description: 'Build an AI-native operating model and guide confident, organisation-wide adoption. Bespoke consulting and training for enterprises. Start today.',
};

export default function OrganisationsPage() {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "AI Confidence for Organisations",
    "description": "Build an AI-native operating model and guide confident, organisation-wide adoption. Bespoke consulting and training for enterprises.",
    "url": "https://aiconfidence.co/organisations",
    "provider": {
      "@type": "Organization",
      "name": "AI Confidence",
      "url": "https://aiconfidence.co"
    },
    "instructor": [
      { "@type": "Person", "name": "Chris Bradshaw" },
      { "@type": "Person", "name": "Rujuta Singh" }
    ],
    "courseMode": "BlendedCoursePlatform",
    "educationalLevel": "Intermediate"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How is this different from generic AI training?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We design every programme around your organisation, your sector, your people and your specific challenges. There is no off-the-shelf course, only a bespoke pathway built with you."
        }
      },
      {
        "@type": "Question",
        "name": "What size organisations do you work with?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We work with teams and organisations of all sizes, from 20-person businesses to large enterprises. The approach scales. The discovery call helps us understand what is right for you."
        }
      },
      {
        "@type": "Question",
        "name": "Can the programme be delivered in-house?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. All AI Confidence programmes for organisations are designed for in-house delivery, either on-site or virtually, at a pace and format that suits your team."
        }
      },
      {
        "@type": "Question",
        "name": "How do we get started?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Book a discovery call. We will spend 30 minutes understanding your organisation, your current AI maturity and your goals, then propose a tailored pathway."
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="course-schema-organisations"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <Script
        id="faq-schema-organisations"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <OrganisationsPageContent />
    </>
  );
}
