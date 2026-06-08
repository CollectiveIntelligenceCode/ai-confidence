import FadeIn from '@/components/FadeIn';

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#111111] flex flex-col justify-center relative overflow-hidden pt-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 w-full py-24">

        <FadeIn delay={0}>
          <p className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-sans mb-5">
            AI Confidence
          </p>
          <div className="w-8 h-px bg-[#D4AF37] mb-16" />
        </FadeIn>

        <FadeIn delay={180}>
          <h1 className="font-serif italic text-white leading-[1.04] mb-10">
            <span className="block text-[clamp(2.8rem,8vw,6.5rem)]">More Freedom.</span>
            <span className="block text-[clamp(2.8rem,8vw,6.5rem)]">More Impact.</span>
            <span className="block text-[clamp(2.8rem,8vw,6.5rem)]">More Life.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={360}>
          <div className="max-w-lg mb-12">
            <p className="text-white/50 text-base lg:text-lg leading-relaxed font-sans">
              Most organisations don&apos;t have an AI problem.
              <br />
              They have a confidence problem.
            </p>
            <p className="text-white/30 text-sm lg:text-base leading-relaxed mt-4 font-sans">
              AI Confidence helps leaders and organisations move from uncertainty to action.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={480}>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <a
              href="#events"
              className="border border-[#D4AF37] text-[#D4AF37] px-8 py-3.5 text-[10px] tracking-[0.25em] uppercase hover:bg-[#D4AF37] hover:text-[#111111] transition-all duration-500 font-sans"
            >
              Attend AI Confidence Day
            </a>
            <a
              href="#framework"
              className="text-white/35 hover:text-white/70 text-[10px] tracking-[0.25em] uppercase px-2 py-3.5 transition-colors duration-300 flex items-center gap-2 font-sans"
            >
              Explore the Framework
              <span className="text-[#D4AF37]">→</span>
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-6 lg:left-12 flex flex-col items-center gap-3 opacity-25">
        <div className="w-px h-10 bg-white" />
        <span className="text-white text-[9px] tracking-[0.3em] uppercase font-sans rotate-0">Scroll</span>
      </div>
    </section>
  );
}
