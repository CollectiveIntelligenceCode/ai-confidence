import type { Metadata } from 'next';
import LeadersPageContent from '@/components/LeadersPageContent';

export const metadata: Metadata = {
  title: 'AI Confidence for Leaders — Strategy. Adoption. Change.',
  description: 'Build strategic confidence and lead AI transformation. For founders, directors and senior teams.',
};

export default function LeadersPage() {
  return <LeadersPageContent />;
}
