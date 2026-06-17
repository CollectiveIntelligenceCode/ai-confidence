import FadeIn from '@/components/FadeIn';

const pillars = [
  {
    title: 'Ethics',
    desc: 'Responsibility. Security. Trust.',
    detail: 'Responsible AI is not a constraint — it is a competitive advantage. We help organisations embed ethical thinking, security practices and governance into how they adopt and use AI, so confidence is built on solid foundations.',
    pos: 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2',
  },
  {
    title: 'Data',
    desc: 'Quality. Context. Confidence.',
    detail: 'AI is changing how organisations think about data. The challenge is no longer simply cleaning data — it is understanding what data matters, what can be generated, what can be enriched and how to use it responsibly. We help organisations build practical data confidence so they can move faster, reduce waste and make better decisions.',
    pos: 'top-1/2 right-0 translate-x-1/2 -translate-y-1/2',
  },
  {
    title: 'Technology',
    desc: 'Tools. Automation. Enablement.',
    detail: 'The right tools, selected and implemented for your context — not the most hyped ones. Practical, purposeful, enabling.',
    pos: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2',
  },
  {
    title: 'Process',
    desc: 'Design. Systems. Workflows.',
    detail: 'AI must be embedded in how work actually happens. We redesign workflows and operating models to make AI a natural part of every day.',
    pos: 'top-1/2 left-0 -translate-x-1/2 -translate-y-1/2',
  },
];

export default function Framework() {
  return (
    <section id="framework" className="bg-[#F5F5F5] py-24 lg:py-36">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">

        <FadeIn>
          <p className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-sans mb-4">The Approach</p>
          <h2 className="font-serif text-[clamp(2.2rem,5vw,4rem)] text-[#111111] mb-4 max-w-sm leading-tight">
            The AI Confidence Framework
          </h2>
          <div className="w-8 h-px bg-[#D4AF37] mb-16 lg:mb-20" />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — visual system */}
          <FadeIn delay={100} direction="none">
            <div className="relative mx-auto" style={{ width: '320px', height: '320px' }}>
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-[#D4AF37]/20" />
              {/* Inner ring */}
              <div className="absolute inset-12 rounded-full border border-[#D4AF37]/30" />
              {/* Centre */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-[#D4AF37] mx-auto flex items-center justify-center mb-2">
                    <span className="text-[#111111] text-[10px] font-sans tracking-[0.12em] uppercase font-semibold">Human</span>
                  </div>
                  <p className="text-[#888888] text-[10px] font-sans tracking-wide">at the centre</p>
                </div>
              </div>
              {/* Pillar nodes */}
              {/* Top — Ethics */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 text-center">
                <div className="w-10 h-10 rounded-full bg-[#111111] border border-[#D4AF37]/40 flex items-center justify-center mx-auto mb-1.5">
                  <span className="text-white text-[9px] font-sans">E</span>
                </div>
                <p className="text-[#111111] text-[10px] font-sans tracking-[0.1em] uppercase whitespace-nowrap">Ethics</p>
              </div>
              {/* Right — Data */}
              <div className="absolute top-1/2 right-0 translate-x-6 -translate-y-1/2 text-center">
                <div className="w-10 h-10 rounded-full bg-[#111111] border border-[#D4AF37]/40 flex items-center justify-center mx-auto mb-1.5">
                  <span className="text-white text-[9px] font-sans">D</span>
                </div>
                <p className="text-[#111111] text-[10px] font-sans tracking-[0.1em] uppercase whitespace-nowrap">Data</p>
              </div>
              {/* Bottom — Technology */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-6 text-center">
                <div className="w-10 h-10 rounded-full bg-[#111111] border border-[#D4AF37]/40 flex items-center justify-center mx-auto mb-1.5">
                  <span className="text-white text-[9px] font-sans">T</span>
                </div>
                <p className="text-[#111111] text-[10px] font-sans tracking-[0.1em] uppercase whitespace-nowrap">Technology</p>
              </div>
              {/* Left — Process */}
              <div className="absolute top-1/2 left-0 -translate-x-6 -translate-y-1/2 text-center">
                <div className="w-10 h-10 rounded-full bg-[#111111] border border-[#D4AF37]/40 flex items-center justify-center mx-auto mb-1.5">
                  <span className="text-white text-[9px] font-sans">Pr</span>
                </div>
                <p className="text-[#111111] text-[10px] font-sans tracking-[0.1em] uppercase whitespace-nowrap">Process</p>
              </div>
            </div>
          </FadeIn>

          {/* Right — pillar details */}
          <div className="divide-y divide-black/8">
            {pillars.map((pillar, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="py-7 group">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-serif text-xl lg:text-2xl text-[#111111] group-hover:text-[#D4AF37] transition-colors duration-300 leading-tight">
                      {pillar.title}
                    </h3>
                    <span className="text-[#D4AF37] text-[10px] font-sans tracking-wide">— {pillar.desc}</span>
                  </div>
                  <p className="text-[#888888] text-sm leading-relaxed font-sans">{pillar.detail}</p>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>

        <FadeIn delay={300}>
          <div className="mt-16 lg:mt-20 border-t border-black/8 pt-10 max-w-2xl">
            <p className="font-serif italic text-[#888888] text-lg lg:text-xl leading-relaxed">
              AI confidence is built when ethics, data, technology and process evolve together — with the human always at the centre.
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
