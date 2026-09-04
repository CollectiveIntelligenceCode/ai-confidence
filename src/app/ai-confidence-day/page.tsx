import type { Metadata } from 'next';
import AIConfidenceDayContent from './ai-confidence-day-content';

export const metadata: Metadata = {
  title: 'AI Confidence Day | London Workshop | July 3, 2026',
  description: 'Join our full-day London workshop on AI strategy and transformation. Build clarity and confidence for AI adoption with expert facilitators.',
};

export default function AIConfidenceDayPage() {
  return <AIConfidenceDayContent />;
}
