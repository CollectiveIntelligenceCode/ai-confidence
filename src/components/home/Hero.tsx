import Image from 'next/image';
import FadeIn from '@/components/FadeIn';

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#111111] flex flex-col justify-center relative overflow-hidden pt-16">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/7.jpeg"
          alt=""
          fill
          className="object-cover object-center opacity-[0.22]"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/50 via-transparent to-[#111111]/70" />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 w-full py-14 lg:py-20 text-center relative">

        <FadeIn delay={0}>
          <h1 className="font-serif text-white leading-[1.06] mb-10">
            <span className="block text-[clamp(2.8rem,6.5vw,5.5rem)]">AI Confidence: Future-proof your</span>
            <span className="block text-[clamp(2.8rem,6.5vw,5.5rem)]">business through</span>
            <span className="block italic text-[clamp(2.8rem,6.5vw,5.5rem)] text-white/70">confident AI adoption.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={200}>
          <p className="text-white/65 text-base lg:text-lg leading-relaxed font-sans mb-10 max-w-xl mx-auto">
            Most organisations don&apos;t have an AI problem.<br />
            They have a <span className="text-[#D4AF37]">confidence problem.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/find-your-path"
              className="border border-[#D4AF37] text-[#D4AF37] px-8 py-3.5 text-[10px] tracking-[0.25em] uppercase hover:bg-[#D4AF37] hover:text-[#111111] transition-all duration-500 font-sans"
            >
              Find Your Path
            </a>
            <a
              href="#events"
              className="border border-white/20 text-white/60 px-8 py-3.5 text-[10px] tracking-[0.25em] uppercase hover:border-white/50 hover:text-white/90 transition-all duration-300 font-sans"
            >
              See Our Events
            </a>
          </div>
        </FadeIn>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-20">
        <div className="w-px h-8 bg-white" />
        <span className="text-white text-[9px] tracking-[0.3em] uppercase font-sans">Scroll</span>
      </div>
    </section>
  );
}
