import FadeIn from '@/components/FadeIn';

const stages = [
  {
    n: '01',
    title: 'Learn',
    desc: 'Build knowledge and practical skills.',
  },
  {
    n: '02',
    title: 'Apply',
    desc: 'Use AI tools with confidence in real work.',
  },
  {
    n: '03',
    title: 'Adapt',
    desc: 'Influence others and drive AI adoption.',
  },
  {
    n: '04',
    title: 'Future-proof',
    desc: 'Build a future-ready organisation that can adapt, compete and grow.',
  },
];

export default function ConfidenceJourney() {
  return (
    <section className="bg-[#111111] py-24 lg:py-36">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">

        <FadeIn>
          <p className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-sans mb-4">The Path</p>
          <h2 className="font-serif text-[clamp(2.2rem,5vw,4rem)] text-white mb-4 max-w-lg leading-tight">
            The AI Confidence Journey
          </h2>
          <div className="w-8 h-px bg-[#D4AF37] mb-16 lg:mb-20" />
        </FadeIn>

        {/* Desktop: horizontal */}
        <div className="hidden md:grid grid-cols-4 gap-0">
          {stages.map((stage, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="relative pr-8">
                {/* Connector line */}
                {i < stages.length - 1 && (
                  <div className="absolute top-5 right-0 left-[calc(2.5rem+16px)] h-px bg-white/10" style={{ left: '52px' }}>
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 text-white/20 text-xs">→</span>
                  </div>
                )}

                {/* Stage circle */}
                <div className="w-10 h-10 rounded-full border border-[#D4AF37]/40 flex items-center justify-center mb-6">
                  <span className="text-[#D4AF37] text-[10px] font-sans tracking-[0.15em]">{stage.n}</span>
                </div>

                <h3 className="font-serif text-white text-xl lg:text-2xl mb-3 leading-tight">{stage.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed font-sans">{stage.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Mobile: vertical */}
        <div className="md:hidden space-y-0">
          {stages.map((stage, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="flex gap-6 pb-10 relative">
                {/* Vertical line */}
                {i < stages.length - 1 && (
                  <div className="absolute left-5 top-10 bottom-0 w-px bg-white/10" />
                )}
                <div className="w-10 h-10 rounded-full border border-[#D4AF37]/40 flex items-center justify-center shrink-0">
                  <span className="text-[#D4AF37] text-[10px] font-sans tracking-[0.15em]">{stage.n}</span>
                </div>
                <div className="pt-2">
                  <h3 className="font-serif text-white text-xl mb-2 leading-tight">{stage.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed font-sans">{stage.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
