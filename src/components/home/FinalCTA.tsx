import FadeIn from '@/components/FadeIn';

export default function FinalCTA() {
  return (
    <section className="bg-[#111111] py-28 lg:py-44">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <FadeIn>
          <div className="w-px h-16 bg-[#D4AF37] mx-auto mb-14 opacity-50" />

          <h2 className="font-serif text-[clamp(2rem,6vw,5rem)] text-white leading-[1.1] mb-8">
            The future isn&apos;t waiting.
            <br />
            <span className="italic text-white/35">It&apos;s being built.</span>
          </h2>

          <p className="text-white/30 font-sans text-sm leading-relaxed max-w-sm mx-auto mb-12">
            And the organisations that build it best will do so with confidence.
          </p>

          <a
            href="#events"
            className="inline-block border border-[#D4AF37] text-[#D4AF37] px-10 py-4 text-[10px] tracking-[0.3em] uppercase hover:bg-[#D4AF37] hover:text-[#111111] transition-all duration-500 font-sans"
          >
            Join AI Confidence
          </a>

          <div className="w-px h-16 bg-[#D4AF37] mx-auto mt-14 opacity-50" />
        </FadeIn>
      </div>
    </section>
  );
}
