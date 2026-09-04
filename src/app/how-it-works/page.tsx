import type { Metadata } from 'next';
import Script from 'next/script';
import ProcessPageContent from '@/components/ProcessPageContent';

export const metadata: Metadata = {
  title: 'How We Work | AI Confidence 5-Step Process',
  description: 'A clear five-step process from business challenge to ongoing AI partnership. We start with your problem, not with AI.',
};

export default function HowItWorksPage() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How We Work: Our 5-Step AI Confidence Process",
    "description": "Our engagement process from business challenge to ongoing partnership.",
    "step": [
      { "@type": "HowToStep", "position": "1", "name": "Business Challenge", "text": "We start by understanding your actual business challenge before discussing AI tools." },
      { "@type": "HowToStep", "position": "2", "name": "Executive AI Briefing", "text": "A 90-minute facilitated session with your senior leadership." },
      { "@type": "HowToStep", "position": "3", "name": "AI Opportunity Report", "text": "Concise recommendations including maturity assessment and roadmap." },
      { "@type": "HowToStep", "position": "4", "name": "Recommended Programme", "text": "Right-sized engagement: one-day workshop, digital cohort, or bespoke consulting." },
      { "@type": "HowToStep", "position": "5", "name": "Ongoing Partnership", "text": "Sustained advisory relationship with measurable outcomes." }
    ]
  };

  return (
    <>
      <Script
        id="howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <ProcessPageContent />
    </>
  );
}
