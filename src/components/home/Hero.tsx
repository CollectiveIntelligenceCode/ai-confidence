import FadeIn from '@/components/FadeIn';

const pathway = [
  {
    n: '01',
    title: 'AI Confidence Digital Cohort',
    sub: 'Tools · Skills · Confidence',
    width: 'max-w-sm',
  },
  {
    n: '02',
    title: 'AI Confidence for Leaders',
    sub: 'Strategy · Adoption · Change',
    width: 'max-w-lg',
  },
  {
    n: '03',
    title: 'AI Confidence for Organisations',
    sub: 'Team Enablement · Readiness · Scale',
    width: 'max-w-2xl',
  },
];

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#111111] flex flex-col justify-center relative overflow-hidden pt-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 w-full py-20 lg:py-28">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — copy */}
          <div>
            <FadeIn delay={0}>
              <p className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-sans mb-5">
                AI Confidence
              </p>
              <div className="w-8 h-px bg-[#D4AF37] mb-12" />
            </FadeIn>

            <FadeIn delay={160}>
              <h1 className="font-serif text-white leading-[1.08] mb-8">
                <span className="block text-[clamp(2.2rem,5.5vw,4.2rem)]">Future-proof your</span>
                <span className="block text-[clamp(2.2rem,5.5vw,4.2rem)]">business through</span>
                <span className="block italic text-[clamp(2.2rem,5.5vw,4.2rem)] text-white/80">confident AI adoption.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="max-w-md mb-10">
                <p className="text-white/60 text-base lg:text-lg leading-relaxed font-sans mb-4">
                  Most organisations don&apos;t have an AI problem.<br />
                  They have a confidence problem.
                </p>
                <p className="text-white/35 text-sm leading-relaxed font-sans">
                  We help people, teams and organisations build the capability, confidence and operating models needed to thrive in an AI-enabled future.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={420}>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <a
                  href="#entry-points"
                  className="border border-[#D4AF37] text-[#D4AF37] px-8 py-3.5 text-[10px] tracking-[0.25em] uppercase hover:bg-[#D4AF37] hover:text-[#111111] transition-all duration-500 font-sans"
                >
                  Find Your Path
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

          {/* Right — pathway pyramid */}
          <FadeIn delay={500} direction="none">
            <div className="flex flex-col gap-3">
              <p className="text-[#D4AF37] text-[10px] tracking-[0.3em] uppercase font-sans mb-4">
                Your Path
              </p>
              {pathway.map((item, i) => (
                <a
                  key={i}
                  href="#entry-points"
                  className={`${item.width} w-full group block border border-white/10 hover:border-[#D4AF37]/60 transition-all duration-400 p-5 lg:p-6`}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-[#D4AF37] text-[10px] tracking-[0.3em] font-sans mt-0.5 shrink-0">
                      {item.n}
                    </span>
                    <div>
                      <p className="text-white text-sm font-sans font-medium group-hover:text-[#D4AF37] transition-colors duration-300 leading-snug mb-1">
                        {item.title}
                      </p>
                      <p className="text-white/30 text-[11px] font-sans tracking-wide">
                        {item.sub}
                      </p>
                    </div>
                    <span className="ml-auto text-white/20 group-hover:text-[#D4AF37] transition-colors duration-300 text-sm">→</span>
                  </div>
                </a>
              ))}
            </div>
          </FadeIn>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-6 lg:left-12 flex flex-col items-center gap-3 opacity-20">
        <div className="w-px h-10 bg-white" />
        <span className="text-white text-[9px] tracking-[0.3em] uppercase font-sans">Scroll</span>
      </div>
    </section>
  );
}
