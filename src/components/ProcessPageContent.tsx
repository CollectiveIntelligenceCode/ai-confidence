'use client';
import Navigation from '@/components/Navigation';
import Footer from '@/components/home/Footer';
import FadeIn from '@/components/FadeIn';
import { LeadCaptureModal } from '@/components/LeadCaptureModal';
import { useState } from 'react';
import Link from 'next/link';

const steps = [
  {
    number: '01',
    label: "What's the deal",
    title: 'Business Challenge',
    description:
      'We start where it matters most — the real pressure you are facing. Whether it is a board directive, a competitor moving faster, rising costs, or a talent risk, we help you name the actual challenge before we talk about AI. No solution-first conversations. No vendor pitches. Just honest diagnosis.',
    link: { label: 'Take the AI Maturity Quiz', href: '/ai-maturity' },
  },
  {
    number: '02',
    label: "What's the opportunity",
    title: 'Executive AI Briefing',
    description:
      'A 90-minute working session with your senior team. Not a presentation — a facilitated conversation to surface where AI could make the most difference in your organisation, and what is currently in the way. You leave with clarity, not more questions. This session is complimentary for qualified organisations.',
  },
  {
    number: '03',
    label: "What we've learned",
    title: 'AI Opportunity Report',
    description:
      'A concise document capturing what we heard, what we believe, and what we recommend. AI maturity assessment, priority opportunities, key risks, quick wins, and a 90-day roadmap — written for decision-makers, not technical teams. Clear enough to share with your board.',
  },
  {
    number: '04',
    label: 'What we prescribe',
    title: 'Recommended Programme',
    description:
      'Based on what we have learned, we recommend the right level of engagement for your organisation. Whether that is an AI Confidence Day for your leadership team, a Digital Cohort for emerging champions, or a structured consulting engagement — no fixed packages. Right-sized to your situation and your timeline.',
    tags: ['AI Confidence Day', 'Digital Cohort', 'Consulting'],
  },
  {
    number: '05',
    label: 'What we offer',
    title: 'Ongoing Partnership',
    description:
      'The work does not stop at delivery. We build advisory relationships that give you a trusted AI partner as the landscape evolves. Predictable engagement, measurable outcomes, and a long-term relationship built on the confidence we have created together.',
  },
];

export default function ProcessPageContent() {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="bg-[#111111] pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <p className="text-[#D4AF37] text-[10px] tracking-[0.4em] uppercase font-sans mb-6">
              How we work
            </p>
            <h1 className="font-serif text-white text-[clamp(2.6rem,6vw,4.8rem)] leading-[1.05] mb-6">
              A process built<br />
              <span className="italic text-white/50">around your challenge.</span>
            </h1>
            <p className="text-white/60 text-base leading-relaxed max-w-xl mx-auto font-sans">
              We do not start with AI. We start with the problem you are trying to solve. Every engagement follows a clear five-step process — from initial challenge through to ongoing partnership.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-white py-24 lg:py-36">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="relative">
            {/* Vertical connector line */}
            <div
              className="absolute left-[27px] top-10 bottom-10 w-px bg-[#D4AF37]/20 hidden lg:block"
              aria-hidden="true"
            />

            <ol className="space-y-0">
              {steps.map((step, i) => (
                <FadeIn key={i} delay={i * 80}>
                  <li className="relative flex gap-10 lg:gap-16 pb-28 lg:pb-36 last:pb-0">
                    {/* Number + dot */}
                    <div className="flex flex-col items-center shrink-0 pt-1">
                      <div className="w-14 h-14 rounded-full border border-[#D4AF37]/30 flex items-center justify-center bg-white relative z-10 shrink-0">
                        <span className="font-serif text-[#D4AF37] text-lg leading-none">
                          {step.number}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-2">
                      <p className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-sans mb-3">
                        {step.label}
                      </p>
                      <h2 className="font-serif text-[#111111] text-[clamp(1.6rem,3vw,2.4rem)] leading-tight mb-4">
                        {step.title}
                      </h2>
                      <p className="text-[#555555] text-base font-sans leading-relaxed max-w-2xl">
                        {step.description}
                      </p>
                      {step.tags && (
                        <div className="flex flex-wrap gap-2 mt-5">
                          {step.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] font-sans px-4 py-2 border border-[#D4AF37]/40 text-[#D4AF37] tracking-wide"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      {step.link && (
                        <div className="mt-4">
                          <Link
                            href={step.link.href}
                            className="inline-flex items-center gap-2 text-[11px] font-sans tracking-[0.2em] uppercase text-[#D4AF37] hover:text-[#111111] transition-colors duration-200"
                          >
                            {step.link.label}
                            <span aria-hidden="true">→</span>
                          </Link>
                        </div>
                      )}
                    </div>
                  </li>
                </FadeIn>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Security callout strip */}
      <div className="bg-[#111111] py-16 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-16">
              <div className="shrink-0">
                <p className="text-[#D4AF37] text-[10px] tracking-[0.4em] uppercase font-sans">
                  Security by design
                </p>
              </div>
              <div className="flex-1">
                <p className="font-serif text-white text-xl leading-snug mb-4">
                  Security is not a separate workstream.
                </p>
                <p className="text-white/55 text-base font-sans leading-relaxed max-w-2xl">
                  Every engagement includes an assessment of data governance, access controls, compliance alignment (GDPR, ISO 27001, sector-specific), shadow AI exposure, and secure deployment considerations. AI Confidence means confident and secure.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Insight strip */}
      <div className="bg-[#F5F5F0] py-16 border-t border-black/6">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <p className="font-serif text-[#111111] text-[clamp(1.4rem,3vw,2rem)] leading-relaxed">
              &ldquo;CxOs do not buy courses first.{' '}
              <span className="text-[#D4AF37]">They buy confidence</span>{' '}
              in the decisions they need to make.&rdquo;
            </p>
          </FadeIn>
        </div>
      </div>

      {/* CTA */}
      <section className="bg-[#111111] py-24 lg:py-32 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <FadeIn>
            <p className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-sans mb-6">
              Start the conversation
            </p>
            <h2 className="font-serif text-white text-[clamp(2rem,5vw,3.5rem)] leading-tight mb-6">
              Begin with your challenge.
            </h2>
            <p className="text-white/60 text-base font-sans leading-relaxed mb-10 max-w-md mx-auto">
              The Executive AI Briefing is complimentary for qualified organisations. It takes 90 minutes and leaves you with a clear picture of where AI can make the most difference.
            </p>
            <button
              onClick={() => setModal(true)}
              className="inline-block bg-[#D4AF37] text-[#111111] px-12 py-4 text-[11px] tracking-[0.3em] uppercase font-sans hover:bg-white transition-all duration-300"
            >
              Request a Briefing
            </button>
          </FadeIn>
        </div>
      </section>

      <Footer />

      {modal && (
        <LeadCaptureModal
          variant="leaders"
          isOpen={true}
          onClose={() => setModal(false)}
        />
      )}
    </>
  );
}
