'use client';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import FadeIn from '@/components/FadeIn';

const paths = [
  {
    n: '01',
    title: 'AI Confidence Digital Cohort',
    for: 'For Leaders, CxOs, Founders & Business Owners',
    description: 'You want to genuinely understand AI and use it with confidence, in your role, your decisions, and your day-to-day work. This is where to start.',
    href: '/cohort',
    cta: 'Explore the Cohort',
  },
  {
    n: '02',
    title: 'AI Confidence for Leaders',
    for: 'For CxOs, Board Members & Senior Leaders',
    description: 'You lead at the top. You need to be able to set AI direction, lead board conversations with confidence, and guide your organisation, without becoming a technician.',
    href: '/leaders',
    cta: 'Explore for Leaders',
  },
  {
    n: '03',
    title: 'AI Confidence for Organisations',
    for: 'For Teams & Organisations',
    description: 'You\'re thinking at scale. You need a structured programme that builds AI capability across your team, department or whole organisation.',
    href: '/organisations',
    cta: 'Explore for Organisations',
  },
];

export default function FindYourPathContent() {
  return (
    <div className="min-h-screen bg-[#111111] flex flex-col pt-16">
      <Navigation />

      <div className="flex-1 flex flex-col items-center justify-center px-6 py-16 lg:py-24">
        <div className="w-full max-w-3xl">

          <FadeIn>
            <p className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-sans mb-4 text-center">
              Find Your Path
            </p>
            <h1 className="font-serif text-white text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] text-center mb-3">
              Which sounds most
              <span className="italic text-white/50"> like you?</span>
            </h1>
            <p className="text-white/40 text-sm font-sans text-center leading-relaxed mb-14">
              Pick the one that fits. We&apos;ll take you straight there.
            </p>
          </FadeIn>

          <div className="space-y-3">
            {paths.map((path, i) => (
              <FadeIn key={i} delay={i * 80}>
                <Link
                  href={path.href}
                  className="group block border border-white/10 hover:border-[#D4AF37]/60 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-400 px-8 py-7"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-[#D4AF37] text-[10px] tracking-[0.3em] font-sans opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                          {path.n}
                        </span>
                        <p className="font-serif text-white text-lg lg:text-xl leading-tight group-hover:text-[#D4AF37] transition-colors duration-300">
                          {path.title}
                        </p>
                      </div>
                      <p className="text-white/40 text-[10px] font-sans tracking-wide mb-3">{path.for}</p>
                      <p className="text-white/55 text-sm font-sans leading-relaxed">{path.description}</p>
                    </div>
                    <span className="text-white/20 group-hover:text-[#D4AF37] transition-colors duration-300 text-base shrink-0 mt-1">→</span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={300}>
            <p className="text-white/20 text-[10px] tracking-[0.2em] uppercase font-sans text-center mt-10">
              Not sure? <Link href="/#events" className="hover:text-white/50 transition-colors duration-300 underline underline-offset-4">Come to an event first →</Link>
            </p>
          </FadeIn>

        </div>
      </div>
    </div>
  );
}
