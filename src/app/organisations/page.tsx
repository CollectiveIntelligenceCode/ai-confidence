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

  return (
    <>
      <Script
        id="course-schema-organisations"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <OrganisationsPageContent />
    </>
  );
}
