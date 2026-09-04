import type { Metadata } from 'next';
import Script from 'next/script';
import LeadersPageContent from '@/components/LeadersPageContent';

export const metadata: Metadata = {
  title: 'AI Confidence for Leaders — Strategy. Adoption. Change.',
  description: 'Build strategic clarity to lead AI transformation. Expert one-day workshops for founders, directors, and senior teams. Secure your spot today.',
};

export default function LeadersPage() {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "AI Confidence for Leaders",
    "description": "Build strategic clarity to lead AI transformation. Expert one-day workshops for founders, directors, and senior teams.",
    "url": "https://aiconfidence.co/leaders",
    "provider": {
      "@type": "Organization",
      "name": "AI Confidence",
      "url": "https://aiconfidence.co"
    },
    "instructor": [{ "@type": "Person", "name": "Chris Bradshaw" }],
    "courseMode": "OfflineCoursePlatform",
    "educationalLevel": "Advanced",
    "duration": "PT1D"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "When is the next AI Confidence Day for Leaders?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our most recent event sold out quickly. We are building the waitlist for the next date now. Join to be notified before we open publicly, with priority booking."
        }
      },
      {
        "@type": "Question",
        "name": "Is this for people with no AI experience?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The day is designed for senior leaders who understand the strategic importance of AI but want to build the confidence and clarity to lead it, regardless of technical background."
        }
      },
      {
        "@type": "Question",
        "name": "What does the day involve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A focused, practical leadership experience combining expert sessions, peer discussion and applied strategy work. You leave with clarity, a draft strategy and real confidence, not just slides."
        }
      },
      {
        "@type": "Question",
        "name": "Can we bring this to our organisation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We design bespoke AI Confidence programmes for leadership teams and boards. Use the private day enquiry link below to start a conversation."
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="course-schema-leaders"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <Script
        id="faq-schema-leaders"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <LeadersPageContent />
    </>
  );
}
