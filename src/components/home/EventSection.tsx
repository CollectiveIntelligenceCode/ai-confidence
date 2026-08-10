'use client';
import { useState } from 'react';
import FadeIn from '@/components/FadeIn';
import { LeadCaptureModal } from '@/components/LeadCaptureModal';

export default function EventSection() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
    <section id="events" className="bg-[#111111] py-24 lg:py-36">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">

        <FadeIn>
          <p className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-sans mb-4">Past Events</p>
          <h2 className="font-serif text-[clamp(2.2rem,5vw,4rem)] text-white mb-4 max-w-2xl leading-tight">
            AI Confidence Day —{' '}
            <span className="italic text-white/50">in the room.</span>
          </h2>
          <p className="text-white/65 font-sans text-base max-w-xl leading-relaxed mb-4">
            A private, hands-on working day in London. You leave with a personal AI workflow you built yourself, not slides you never go back to.
          </p>
          <div className="w-8 h-px bg-[#D4AF37] mb-16 lg:mb-20" />
        </FadeIn>

        {/* Single event + waitlist side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-0">

          {/* Video card */}
          <FadeIn>
            <div className="border border-white/8 flex flex-col h-full">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/X-GWD6l5708?rel=0&modestbranding=1"
                  title="AI Confidence Day, CXOs & Board Members"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-[#D4AF37] text-[10px] font-sans tracking-[0.2em] uppercase border border-[#D4AF37]/30 px-3 py-1">
                    3rd July 2026
                  </span>
                  <span className="text-[10px] font-sans tracking-[0.2em] uppercase px-3 py-1 bg-white/8 text-white/50">
                    Sold Out
                  </span>
                </div>
                <h3 className="font-serif text-white text-xl lg:text-2xl leading-tight mb-4">
                  For CXOs & Board Members
                </h3>
                <p className="text-white/70 text-sm font-sans leading-relaxed">
                  You are the most capable person in the room, except when the topic is AI. A private day to build genuine clarity, lead any board conversation with confidence, and stop nodding along.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Waitlist panel */}
          <FadeIn delay={120}>
            <div className="border border-[#D4AF37]/30 flex flex-col h-full p-8 lg:p-10">

              <p className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-sans mb-6">Join the Waitlist</p>

              <h3 className="font-serif text-white text-2xl lg:text-3xl leading-tight mb-6">
                The next AI Confidence Day is coming.{' '}
                <span className="italic text-white/60">Be first to know.</span>
              </h3>

              <div className="w-6 h-px bg-[#D4AF37] mb-8" />

              <div className="space-y-5 mb-10 flex-1">
                {[
                  'Get notified the moment the next date is announced, before we open publicly.',
                  'First access to early bird pricing, which sold out within days on both previous cohorts.',
                  'Cancellation notices for the current cohort, if a place becomes available.',
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="text-[#D4AF37] text-xs mt-1 shrink-0">—</span>
                    <p className="text-white/70 text-sm font-sans leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setModalOpen(true)}
                className="block w-full text-center border border-[#D4AF37] text-[#D4AF37] px-8 py-4 text-[10px] tracking-[0.25em] uppercase hover:bg-[#D4AF37] hover:text-[#111111] transition-all duration-500 font-sans"
              >
                Join the Waitlist
              </button>
              <p className="text-white/50 text-[11px] font-sans text-center mt-4 leading-relaxed">
                No commitment. We will contact you when the next date is confirmed.
              </p>

            </div>
          </FadeIn>

        </div>

      </div>
    </section>
    <LeadCaptureModal
      variant="waitlist"
      isOpen={modalOpen}
      onClose={() => setModalOpen(false)}
    />
    </>
  );
}
