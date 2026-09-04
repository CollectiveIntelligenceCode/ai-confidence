import type { Metadata } from 'next';
import Script from 'next/script';
import CohortPageContent from '@/components/CohortPageContent';

export const metadata: Metadata = {
  title: 'AI Confidence Digital Cohort — Tools. Skills. Confidence.',
  description: 'Build practical AI fluency and confidence with hands-on training. Perfect for individuals, consultants, and teams. Join the next cohort today.',
};

export default function CohortPage() {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "AI Confidence Digital Cohort",
    "description": "Build practical AI fluency and confidence with hands-on training. Perfect for individuals, consultants, and teams.",
    "url": "https://aiconfidence.co/cohort",
    "provider": {
      "@type": "Organization",
      "name": "AI Confidence",
      "url": "https://aiconfidence.co"
    },
    "instructor": [
      { "@type": "Person", "name": "Chris Bradshaw" },
      { "@type": "Person", "name": "Lukáš Svěcený" }
    ],
    "courseMode": "OnlineCoursePlatform",
    "educationalLevel": "Intermediate"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "When does the next cohort start?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We are currently building the waitlist for our next cohort. Join now and you will be among the first to know the date, with priority access before we open publicly."
        }
      },
      {
        "@type": "Question",
        "name": "How much time does it require?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Digital Cohort is designed for busy professionals. Expect to invest a few hours per week across live sessions, practical exercises and community engagement."
        }
      },
      {
        "@type": "Question",
        "name": "Is this for beginners or experienced AI users?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Both. We design the programme to meet you where you are, whether you have never used AI tools seriously or want to level up from occasional use to genuine fluency."
        }
      },
      {
        "@type": "Question",
        "name": "What happens after I join the waitlist?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You will receive a confirmation email, then early access to the cohort before we open publicly, along with occasional updates from the AI Confidence team."
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="course-schema-cohort"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <Script
        id="faq-schema-cohort"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <CohortPageContent />
    </>
  );
}
