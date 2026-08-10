'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/home/Footer';
import FadeIn from '@/components/FadeIn';
import { LeadCaptureModal } from '@/components/LeadCaptureModal';

type ModalVariant = 'cohort_waitlist' | 'private';

const learnItems = [
  'Understanding modern AI tools and capabilities',
  'Selecting the right tools for your work',
  'Prompting techniques and workflow design',
  'Building personal AI assistants',
  'Everyday productivity and automation',
  'Content creation with AI',
  'Research, synthesis and analysis',
  'Team collaboration and knowledge sharing',
];

const personas = [
  {
    label: 'Leader or Founder',
    desc: 'You want to understand AI deeply enough to lead your team through it, not just talk about it.',
  },
  {
    label: 'Consultant',
    desc: 'You need to bring AI into client engagements credibly and build it into your own practice.',
  },
  {
    label: 'Professional',
    desc: 'You want to go from AI-curious to AI-confident, with real skills you use every day.',
  },
];

const faqs = [
  {
    q: 'When does the next cohort start?',
    a: 'We are currently building the waitlist for our next cohort. Join now and you will be among the first to know the date, with priority access before we open publicly.',
  },
  {
    q: 'How much time does it require?',
    a: 'The Digital Cohort is designed for busy professionals. Expect to invest a few hours per week across live sessions, practical exercises and community engagement.',
  },
  {
    q: 'Is this for beginners or experienced AI users?',
    a: 'Both. We design the programme to meet you where you are, whether you have never used AI tools seriously or want to level up from occasional use to genuine fluency.',
  },
  {
    q: 'What happens after I join the waitlist?',
    a: 'You will receive a confirmation email, then early access to the cohort before we open publicly, along with occasional updates from the AI Confidence team.',
  },
];

export default function CohortPageContent() {
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
              01 — AI Confidence
            </p>
            <h1 className="font-serif text-white text-[clamp(2.6rem,6vw,4.8rem)] leading-[1.05] mb-6">
              AI Confidence<br />
              <span className="italic text-white/50">Digital Cohort</span>
            </h1>
            <p className="text-white/60 text-base leading-relaxed mb-10 max-w-xl mx-auto font-sans">
              Build practical AI fluency, the skills, habits and workflows that make AI work for you in real life, not just in theory.
            </p>
            <button
              ref={heroCtaRef}
              onClick={() => setModal('cohort_waitlist')}
              className="inline-block bg-[#D4AF37] text-[#111111] px-12 py-4 text-[11px] tracking-[0.3em] uppercase font-sans hover:bg-white transition-all duration-300"
            >
              Join the Waitlist
            </button>
            <p className="text-white/30 text-[11px] font-sans mt-5 tracking-wide">
              Free to join · First access to the next cohort
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Urgency strip */}
      <div className="bg-[#D4AF37] py-4 text-center">
        <p className="font-sans text-[#111111] text-[11px] tracking-[0.25em] uppercase">
          Previous cohort sold out quickly — join the waitlist now for priority access
        </p>
      </div>

      {/* What you'll learn */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <p className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-sans mb-4">You will learn</p>
            <h2 className="font-serif text-[#111111] text-[clamp(2rem,4vw,3rem)] leading-tight mb-12 max-w-xl">
              Everything you need to work confidently with AI.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-0">
            {learnItems.map((item, i) => (
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
                onClick={() => setModal('cohort_waitlist')}
                className="inline-block border border-[#D4AF37] text-[#D4AF37] px-10 py-4 text-[11px] tracking-[0.3em] uppercase font-sans hover:bg-[#D4AF37] hover:text-[#111111] transition-all duration-300"
              >
                Join the Waitlist
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Image break */}
      <div className="relative h-[42vw] max-h-[480px] min-h-[240px] overflow-hidden">
        <Image
          src="/images/1.jpeg"
          alt="Executive AI strategy workshop with a facilitator leading a group discussion"
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
              Built for people who lead.
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
                Practical, not just theoretical.
              </h2>
              <div className="flex flex-wrap gap-3">
                {['Digital cohort', 'Community access', 'Templates & resources', 'Live sessions'].map((f, i) => (
                  <span key={i} className="text-[10px] font-sans px-4 py-2 border border-black/12 text-[#888888] tracking-wide">
                    {f}
                  </span>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <p className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-sans mb-6">The journey</p>
              <ol className="space-y-6">
                {[
                  'Learn — understand AI and what it can do',
                  'Apply — build real workflows in your context',
                  'Adapt — refine with feedback and community',
                  'Future-Proof — stay ahead as AI evolves',
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
            <p className="text-[#111111]/60 text-[10px] tracking-[0.35em] uppercase font-sans mb-6">Secure your place</p>
            <h2 className="font-serif text-[#111111] text-[clamp(2rem,5vw,3.5rem)] leading-tight mb-6">
              Be first for the next cohort.
            </h2>
            <p className="text-[#111111]/70 text-base font-sans leading-relaxed mb-10 max-w-md mx-auto">
              Join the waitlist now. You will hear from us before we open publicly, with early-bird access and priority booking.
            </p>
            <button
              onClick={() => setModal('cohort_waitlist')}
              className="inline-block bg-[#111111] text-white px-12 py-4 text-[11px] tracking-[0.3em] uppercase font-sans hover:bg-[#222222] transition-all duration-300"
            >
              Join the Waitlist
            </button>
            <div className="mt-6">
              <button
                onClick={() => setModal('private')}
                className="text-[#111111]/50 text-[11px] font-sans tracking-wide hover:text-[#111111]/80 transition-colors duration-200 underline underline-offset-4"
              >
                Enquire about private training for your organisation →
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* pb-20 on mobile to clear sticky bar */}
      <div className="lg:hidden h-20" />

      <Footer />

      {/* Sticky mobile CTA bar */}
      <div
        className={`lg:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-[#111111] border-t border-white/10 transition-transform duration-300 ${
          stickyVisible ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <button
          onClick={() => setModal('cohort_waitlist')}
          className="w-full bg-[#D4AF37] text-[#111111] py-4 text-[11px] tracking-[0.3em] uppercase font-sans"
        >
          Join the Waitlist
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
