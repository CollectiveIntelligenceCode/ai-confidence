import type { Metadata } from 'next';
import ProcessPageContent from '@/components/ProcessPageContent';

export const metadata: Metadata = {
  title: 'How We Work — AI Confidence',
  description: 'A clear five-step process from business challenge to ongoing AI partnership. We start with your problem, not with AI.',
};

export default function HowItWorksPage() {
  return <ProcessPageContent />;
}
