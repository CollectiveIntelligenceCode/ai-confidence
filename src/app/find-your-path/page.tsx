import type { Metadata } from 'next';
import FindYourPathContent from './find-your-path-content';

export const metadata: Metadata = {
  title: 'Find Your Path | AI Confidence Training Selector',
  description: 'Take our quick quiz to find the perfect AI training program for you. Choose between Digital Cohort, Leadership Track, or Enterprise Solutions.',
};

export default function FindYourPathPage() {
  return <FindYourPathContent />;
}
