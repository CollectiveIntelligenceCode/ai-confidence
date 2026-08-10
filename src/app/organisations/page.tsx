import type { Metadata } from 'next';
import OrganisationsPageContent from '@/components/OrganisationsPageContent';

export const metadata: Metadata = {
  title: 'AI Confidence for Organisations — Team Enablement. Readiness. Scale.',
  description: 'Build an AI-native operating model and guide confident, organisation-wide AI adoption.',
};

export default function OrganisationsPage() {
  return <OrganisationsPageContent />;
}
