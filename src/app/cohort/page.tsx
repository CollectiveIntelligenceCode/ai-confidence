import type { Metadata } from 'next';
import CohortPageContent from '@/components/CohortPageContent';

export const metadata: Metadata = {
  title: 'AI Confidence Digital Cohort — Tools. Skills. Confidence.',
  description: 'Build practical AI fluency and confidence. For individuals, consultants and teams.',
};

export default function CohortPage() {
  return <CohortPageContent />;
}
