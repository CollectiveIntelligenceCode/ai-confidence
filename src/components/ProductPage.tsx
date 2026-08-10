'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { LeadCaptureModal } from '@/components/LeadCaptureModal';

type ModalVariant = 'cohort' | 'leaders' | 'organisations' | 'waitlist' | 'private' | 'cohort_waitlist' | 'leaders_waitlist' | 'organisations_waitlist';

export type ProductConfig = {
  n: string;
  title: string;
  audience: string;
  sub: string;
  outcome: string;
  learnLabel: string;
  learn: string[];
  format: string[];
  publicCtaLabel: string;
  publicCtaModal: ModalVariant;
  waitlistCtaModal: ModalVariant;
  privateCtaLabel: string;
};

const pastEvent = {
  date: '3rd July 2026',
  title: 'AI Confidence Day — For CXOs & Board Members',
  location: 'London',
};

export default function ProductPage({ config }: { config: ProductConfig }) {
  const [activeModal, setActiveModal] = useState<ModalVariant | null>(null);

  const manifestoStatements = [
    { pre: 'Human-led,', em: 'AI-powered.' },
    { pre: 'Human wisdom,', em: 'AI momentum.' },
    { pre: 'Human hearts,', em: 'AI smarts.' },
  ];
  const [manifestoIndex, setManifestoIndex] = useState(() => Math.floor(Math.random() * 3));
  const [manifestoVisible, setManifestoVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setManifestoVisible(false);
      setTimeout(() => {
        setManifestoIndex(i => (i + 1) % 3);
        setManifestoVisible(true);
      }, 500);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="bg-[#111111] pt-32 pb-24 lg:pt-36 lg:pb-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <p className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-sans mb-5">
            {config.n} — AI Confidence
          </p>
          <div className="w-8 h-px bg-[#D4AF37] mb-10" />
          <h1 className="font-serif text-white text-[clamp(2.4rem,6vw,4.5rem)] leading-[1.05] mb-6 max-w-3xl">
            {config.title}
          </h1>
          <p className="text-[#D4AF37] text-[10px] tracking-[0.3em] uppercase font-sans mb-8">
            {config.audience}
          </p>
          <p className="text-white/60 text-lg leading-relaxed font-sans max-w-2xl mb-4">
            {config.outcome}
          </p>
          <p className="text-white/25 text-[11px] font-sans tracking-[0.2em] uppercase">{config.sub}</p>
        </div>
      </section>

      {/* Manifesto bar */}
      <div className="bg-[#D4AF37] py-16 lg:py-20 text-center overflow-hidden">
        <p
          className="font-serif text-[#111111] text-[clamp(2.4rem,5.5vw,4.8rem)] leading-[1.06] transition-opacity duration-500"
          style={{ opacity: manifestoVisible ? 1 : 0 }}
        >
          {manifestoStatements[manifestoIndex].pre}{' '}
          <span className="italic text-[#111111]/50">{manifestoStatements[manifestoIndex].em}</span>
        </p>
      </div>

      {/* What you'll get */}
      <section className="bg-white py-16 lg:py-24 border-t border-black/6">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

            {/* Learn */}
            <div>
              <p className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-sans mb-8">
                {config.learnLabel}
              </p>
              <ul className="space-y-3">
                {config.learn.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="text-[#D4AF37] shrink-0 mt-0.5 text-xs">—</span>
                    <span className="text-[#444444] text-sm font-sans leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Format */}
            <div>
              <p className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-sans mb-8">
                Format
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                {config.format.map((f, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-sans px-4 py-2 border border-black/12 text-[#888888] tracking-wide"
                  >
                    {f}
                  </span>
                ))}
              </div>

              <div className="border-t border-black/8 pt-10">
                <p className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-sans mb-3">
                  The AI Confidence Journey
                </p>
                <p className="text-[#888888] text-sm font-sans leading-relaxed">
                  Every programme follows our proven journey: Learn → Apply → Adapt → Future-Proof. You leave with clarity, skills and a plan, not slides you never go back to.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="bg-[#F5F5F5] py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <p className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-sans mb-8">Past Events</p>
          <div className="border border-black/8 bg-white p-8 flex flex-col sm:flex-row sm:items-center gap-6 max-w-2xl">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[#D4AF37] text-[10px] font-sans tracking-[0.2em] uppercase border border-[#D4AF37]/40 px-3 py-1">
                  {pastEvent.date}
                </span>
                <span className="text-[10px] font-sans tracking-[0.2em] uppercase px-3 py-1 bg-black/5 text-black/40">
                  Sold Out
                </span>
              </div>
              <h3 className="font-serif text-[#111111] text-xl leading-tight mb-1">
                {pastEvent.title}
              </h3>
              <p className="text-[#888888] text-sm font-sans">{pastEvent.location}</p>
            </div>
            <div className="shrink-0 flex flex-col gap-3">
              <button
                onClick={() => setActiveModal(config.waitlistCtaModal)}
                className="border border-[#D4AF37] text-[#D4AF37] px-6 py-3 text-[10px] tracking-[0.2em] uppercase font-sans hover:bg-[#D4AF37] hover:text-[#111111] transition-all duration-400"
              >
                Join Waitlist
              </button>
              <a
                href="https://aiday.solvedtogether.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center border border-black/15 text-[#888888] px-6 py-3 text-[10px] tracking-[0.2em] uppercase font-sans hover:border-black/30 hover:text-[#444444] transition-all duration-300"
              >
                View Full Event Details →
              </a>
            </div>
          </div>
          <p className="text-[#aaaaaa] text-xs font-sans mt-4">
            Previous cohorts sold out within days. Join the waitlist to hear first.
          </p>
        </div>
      </section>

      {/* 3 CTAs */}
      <section className="bg-[#111111] py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <p className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-sans mb-4">
            Get Started
          </p>
          <h2 className="font-serif text-white text-[clamp(1.8rem,4vw,3rem)] leading-tight mb-12 max-w-xl">
            Three ways to begin.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* 1, Waitlist */}
            <div className="border border-white/10 p-8 flex flex-col">
              <p className="text-[#D4AF37] text-[10px] tracking-[0.3em] uppercase font-sans mb-4">01</p>
              <h3 className="font-serif text-white text-xl leading-tight mb-3">
                Join the Waitlist
              </h3>
              <p className="text-white/40 text-sm font-sans leading-relaxed mb-8 flex-1">
                Be first to know when the next AI Confidence Day is announced. First access to early-bird pricing before we open publicly.
              </p>
              <button
                onClick={() => setActiveModal(config.waitlistCtaModal)}
                className="w-full text-center border border-white/20 text-white/70 hover:border-[#D4AF37] hover:text-[#D4AF37] text-[10px] tracking-[0.2em] uppercase font-sans py-4 transition-all duration-400"
              >
                Join Waitlist
              </button>
            </div>

            {/* 2, Public event */}
            <div className="border border-[#D4AF37]/30 p-8 flex flex-col">
              <p className="text-[#D4AF37] text-[10px] tracking-[0.3em] uppercase font-sans mb-4">02</p>
              <h3 className="font-serif text-white text-xl leading-tight mb-3">
                Attend a Public Event
              </h3>
              <p className="text-white/40 text-sm font-sans leading-relaxed mb-8 flex-1">
                Join the next scheduled AI Confidence Day. A focused, practical day designed to move you from uncertainty to action.
              </p>
              <button
                onClick={() => setActiveModal(config.publicCtaModal)}
                className="w-full text-center border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#111111] text-[10px] tracking-[0.2em] uppercase font-sans py-4 transition-all duration-400"
              >
                {config.publicCtaLabel}
              </button>
            </div>

            {/* 3, Private */}
            <div className="border border-white/10 p-8 flex flex-col">
              <p className="text-[#D4AF37] text-[10px] tracking-[0.3em] uppercase font-sans mb-4">03</p>
              <h3 className="font-serif text-white text-xl leading-tight mb-3">
                Request a Private Day
              </h3>
              <p className="text-white/40 text-sm font-sans leading-relaxed mb-8 flex-1">
                Bring AI Confidence to your organisation. We design a bespoke programme around your team, your challenges and your goals.
              </p>
              <button
                onClick={() => setActiveModal('private')}
                className="w-full text-center border border-white/20 text-white/70 hover:border-[#D4AF37] hover:text-[#D4AF37] text-[10px] tracking-[0.2em] uppercase font-sans py-4 transition-all duration-400"
              >
                {config.privateCtaLabel}
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] py-14 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">

            <Link href="/">
              <span className="font-serif text-white/60 text-sm">AI Confidence</span>
            </Link>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <span className="text-white/20 text-[9px] tracking-[0.25em] uppercase font-sans">A programme by</span>
              <div className="flex items-center gap-5">
                <a
                  href="https://collectiveintelligence.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white/90 text-xs font-sans tracking-wide transition-colors duration-300"
                >
                  Collective Intelligence
                </a>
                <span className="text-white/15 text-xs">·</span>
                <a
                  href="https://solvedtogether.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white/90 text-xs font-sans tracking-wide transition-colors duration-300"
                >
                  Solved Together
                </a>
              </div>
            </div>

            <div className="flex gap-6">
              <a href="#" className="text-white/55 hover:text-white/85 text-xs font-sans tracking-wide transition-colors duration-300">Privacy</a>
              <a href="#" className="text-white/55 hover:text-white/85 text-xs font-sans tracking-wide transition-colors duration-300">Contact</a>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8">
            <p className="text-white/45 text-xs font-sans text-center">
              © 2026 AI Confidence · Training. Leadership. Transformation.
            </p>
          </div>
        </div>
      </footer>

      {activeModal && (
        <LeadCaptureModal
          variant={activeModal}
          isOpen={true}
          onClose={() => setActiveModal(null)}
        />
      )}
    </>
  );
}
