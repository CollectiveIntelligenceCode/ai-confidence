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

  return (
    <>
      <Script
        id="course-schema-leaders"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <LeadersPageContent />
    </>
  );
}
