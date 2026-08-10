import type { Metadata } from 'next';
import AIMaturityQuizContent from '@/components/AIMaturityQuizContent';

export const metadata: Metadata = {
  title: 'AI Maturity Assessment — AI Confidence',
  description: 'Six straightforward questions to assess where your organisation stands with AI. No technical knowledge required. Get an honest score and a recommended next step.',
};

export default function AIMaturityPage() {
  return <AIMaturityQuizContent />;
}
