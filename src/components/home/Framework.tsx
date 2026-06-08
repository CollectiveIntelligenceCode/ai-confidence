import FadeIn from '@/components/FadeIn';

const pillars = [
  {
    n: '01',
    title: 'Confidence',
    desc: 'The foundation. Before tools, before strategy — leaders need the psychological safety to begin. We build it deliberately.',
  },
  {
    n: '02',
    title: 'Clarity',
    desc: 'Cutting through the noise. Identifying where AI creates real leverage in your specific context, team, and industry.',
  },
  {
    n: '03',
    title: 'Capability',
    desc: 'Practical skills built in real time. Not theoretical. Not a slide deck. Hands-on capability that transfers immediately.',
  },
  {
    n: '04',
    title: 'Action',
    desc: 'A 90-day roadmap. Specific, sequenced, and designed for your organisation\'s pace and risk appetite.',
  },
  {
    n: '05',
    title: 'Transformation',
    desc: 'The long game. Embedding AI into how you think, operate, and lead — not as a tool, but as a mindset.',
  },
];

export default function Framework() {
  return (
    <section id="framework" className="bg-[#F5F5F5] py-24 lg:py-36">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">

        <FadeIn>
          <p className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-sans mb-4">The Approach</p>
          <h2 className="font-serif text-[clamp(2.2rem,5vw,4rem)] text-[#111111] mb-16 lg:mb-20 max-w-sm leading-tight">
            AI Confidence Framework
          </h2>
        </FadeIn>

        <div className="divide-y divide-black/8">
          {pillars.map((pillar, i) => (
            <FadeIn key={i} delay={i * 80}>
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-16 py-8 lg:py-10 group">
                <span className="text-[#D4AF37] font-sans text-[10px] tracking-[0.3em] uppercase w-8 shrink-0 mt-1">
                  {pillar.n}
                </span>
                <h3 className="font-serif text-2xl lg:text-3xl text-[#111111] md:w-44 shrink-0 leading-tight group-hover:text-[#D4AF37] transition-colors duration-300">
                  {pillar.title}
                </h3>
                <p className="text-[#888888] text-sm leading-relaxed font-sans max-w-lg">
                  {pillar.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
