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

  return (
    <>
      <Script
        id="course-schema-cohort"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <CohortPageContent />
    </>
  );
}
