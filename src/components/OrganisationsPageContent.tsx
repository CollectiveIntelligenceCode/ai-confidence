'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/home/Footer';
import FadeIn from '@/components/FadeIn';
import { LeadCaptureModal } from '@/components/LeadCaptureModal';

type ModalVariant = 'organisations' | 'organisations_waitlist' | 'private';

const buildItems = [
  'AI-native operating model design',
  'Organisation-wide adoption roadmaps',
  'AI readiness and maturity assessments',
  'Internal champion and enablement programmes',
  'Team capability and fluency building',
  'Governance, risk and change frameworks',
  'Practical use case discovery labs',
  'Measurement, impact and ROI tracking',
];

const personas = [
  {
    label: 'HR or L&D Leader',
    desc: 'You need to upskill your workforce for an AI-native future and don\'t want a one-size-fits-all training programme.',
  },
  {
    label: 'CEO or COO',
    desc: 'You want AI embedded into your operations, not just talked about. You need a clear adoption roadmap.',
  },
  {
    label: 'Transformation Lead',
    desc: 'You\'re leading change and need a framework to guide confident, organisation-wide AI adoption.',
  },
];

const faqs = [
  {
    q: 'How is this different from generic AI training?',
    a: 'We design every programme around your organisation, your sector, your people and your specific challenges. There is no off-the-shelf course, only a bespoke pathway built with you.',
  },
  {
    q: 'What size organisations do you work with?',
    a: 'We work with teams and organisations of all sizes, from 20-person businesses to large enterprises. The approach scales. The discovery call helps us understand what is right for you.',
  },
  {
    q: 'Can the programme be delivered in-house?',
    a: 'Yes. All AI Confidence programmes for organisations are designed for in-house delivery, either on-site or virtually, at a pace and format that suits your team.',
  },
  {
    q: 'How do we get started?',
    a: 'Book a discovery call. We will spend 30 minutes understanding your organisation, your current AI maturity and your goals, then propose a tailored pathway.',
  },
];

export default function OrganisationsPageContent() {
  const [modal, setModal] = useState<ModalVariant | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [stickyVisible, setStickyVisible] = useState(false);
  const heroCtaRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const el = heroCtaRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setStickyVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="bg-[#111111] pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <p className="text-[#D4AF37] text-[10px] tracking-[0.4em] uppercase font-sans mb-6">
              03 — AI Confidence
            </p>
            <h1 className="font-serif text-white text-[clamp(2.6rem,6vw,4.8rem)] leading-[1.05] mb-6">
              AI Confidence<br />
              <span className="italic text-white/50">for Organisations</span>
            </h1>
            <p className="text-white/60 text-base leading-relaxed mb-10 max-w-xl mx-auto font-sans">
              Build an AI-native operating model and guide confident, organisation-wide AI adoption, from strategy to workforce capability.
            </p>
            <button
              ref={heroCtaRef}
              onClick={() => setModal('organisations')}
              className="inline-block bg-[#D4AF37] text-[#111111] px-12 py-4 text-[11px] tracking-[0.3em] uppercase font-sans hover:bg-white transition-all duration-300"
            >
              Book a Discovery Call
            </button>
            <p className="text-white/30 text-[11px] font-sans mt-5 tracking-wide">
              No commitment · 30-minute conversation · Tailored recommendations
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Trust strip */}
      <div className="bg-[#D4AF37] py-4 text-center">
        <p className="font-sans text-[#111111] text-[11px] tracking-[0.25em] uppercase">
          Every programme is designed around your organisation, your people and your goals
        </p>
      </div>

      {/* What you'll build */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <p className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-sans mb-4">You will build</p>
            <h2 className="font-serif text-[#111111] text-[clamp(2rem,4vw,3rem)] leading-tight mb-12 max-w-xl">
              The capability your organisation needs to thrive.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-0">
            {buildItems.map((item, i) => (
              <FadeIn key={i} delay={i * 40}>
                <div className="flex items-start gap-4 py-4 border-b border-black/6">
                  <span className="text-[#D4AF37] shrink-0 mt-0.5 text-xs">—</span>
                  <span className="text-[#444444] text-base font-sans leading-snug">{item}</span>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={200}>
            <div className="mt-14 text-center">
              <button
                onClick={() => setModal('organisations')}
                className="inline-block border border-[#D4AF37] text-[#D4AF37] px-10 py-4 text-[11px] tracking-[0.3em] uppercase font-sans hover:bg-[#D4AF37] hover:text-[#111111] transition-all duration-300"
              >
                Book a Discovery Call
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Image break */}
      <div className="relative h-[42vw] max-h-[480px] min-h-[240px] overflow-hidden">
        <Image
          src="/images/6.jpeg"
          alt="Human-centred executive roundtable discussion in a modern meeting room"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#111111]/30" />
      </div>

      {/* Who it's for */}
      <section className="bg-[#F5F5F0] py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <p className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-sans mb-4">Who it&apos;s for</p>
            <h2 className="font-serif text-[#111111] text-[clamp(2rem,4vw,3rem)] leading-tight mb-12">
              For organisations ready to move from interest to action.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {personas.map((p, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="bg-white border border-black/8 p-8 hover:border-[#D4AF37]/40 hover:scale-[1.02] transition-all duration-300 h-full">
                  <p className="text-[#D4AF37] text-[10px] tracking-[0.3em] uppercase font-sans mb-4">0{i + 1}</p>
                  <h3 className="font-serif text-[#111111] text-xl mb-4 leading-tight">{p.label}</h3>
                  <p className="text-[#666666] text-base font-sans leading-relaxed">{p.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Format + Journey */}
      <section className="bg-white py-20 lg:py-28 border-t border-black/6">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <FadeIn>
              <p className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-sans mb-4">Format</p>
              <h2 className="font-serif text-[#111111] text-[clamp(1.8rem,4vw,2.8rem)] leading-tight mb-8">
                Bespoke by design.
              </h2>
              <div className="flex flex-wrap gap-3">
                {['Team training', 'Live workshops', 'Certification programmes', 'Impact tracking'].map((f, i) => (
                  <span key={i} className="text-[10px] font-sans px-4 py-2 border border-black/12 text-[#888888] tracking-wide">
                    {f}
                  </span>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <p className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-sans mb-6">How it works</p>
              <ol className="space-y-6">
                {[
                  'Discover — understand your organisation, people and goals',
                  'Design — build a bespoke AI Confidence pathway',
                  'Deliver — run the programme with your teams',
                  'Embed — measure impact and build lasting capability',
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-5">
                    <span className="text-[#D4AF37] text-[10px] tracking-widest font-sans pt-0.5 shrink-0">0{i + 1}</span>
                    <span className="text-[#444444] text-base font-sans leading-snug">{step}</span>
                  </li>
                ))}
              </ol>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#111111] py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <p className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-sans mb-4">Questions</p>
            <h2 className="font-serif text-white text-[clamp(1.8rem,4vw,2.8rem)] leading-tight mb-12">
              Common questions.
            </h2>
          </FadeIn>
          <div>
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 60}>
                <div className="border-t border-white/10">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between py-5 text-left"
                  >
                    <span className="text-white font-sans text-base leading-snug pr-6">{faq.q}</span>
                    <span className="text-[#D4AF37] text-xl shrink-0 leading-none">
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{ maxHeight: openFaq === i ? '160px' : '0px' }}
                  >
                    <p className="text-white/60 text-base font-sans leading-relaxed pb-5">{faq.a}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
            <div className="border-t border-white/10" />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#D4AF37] py-20 lg:py-28 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <FadeIn>
            <p className="text-[#111111]/60 text-[10px] tracking-[0.35em] uppercase font-sans mb-6">Get started</p>
            <h2 className="font-serif text-[#111111] text-[clamp(2rem,5vw,3.5rem)] leading-tight mb-6">
              Let&apos;s talk about your organisation.
            </h2>
            <p className="text-[#111111]/70 text-base font-sans leading-relaxed mb-10 max-w-md mx-auto">
              Book a 30-minute discovery call. We will listen, understand your needs and recommend the right AI Confidence pathway for your team.
            </p>
            <button
              onClick={() => setModal('organisations')}
              className="inline-block bg-[#111111] text-white px-12 py-4 text-[11px] tracking-[0.3em] uppercase font-sans hover:bg-[#222222] transition-all duration-300"
            >
              Book a Discovery Call
            </button>
            <div className="mt-6">
              <button
                onClick={() => setModal('organisations_waitlist')}
                className="text-[#111111]/50 text-[11px] font-sans tracking-wide hover:text-[#111111]/80 transition-colors duration-200 underline underline-offset-4"
              >
                Not ready yet? Join our mailing list for updates →
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="lg:hidden h-20" />

      <Footer />

      {/* Sticky mobile CTA bar */}
      <div
        className={`lg:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-[#111111] border-t border-white/10 transition-transform duration-300 ${
          stickyVisible ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <button
          onClick={() => setModal('organisations')}
          className="w-full bg-[#D4AF37] text-[#111111] py-4 text-[11px] tracking-[0.3em] uppercase font-sans"
        >
          Book a Discovery Call
        </button>
      </div>

      {modal && (
        <LeadCaptureModal
          variant={modal}
          isOpen={true}
          onClose={() => setModal(null)}
        />
      )}
    </>
  );
}
