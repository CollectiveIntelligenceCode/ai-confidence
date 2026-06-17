import FadeIn from '@/components/FadeIn';

const problems = [
  {
    n: '01',
    headline: 'Leaders don\'t have clarity on AI strategy.',
    detail: 'Without a clear direction, organisations stall — investing in tools without knowing what they\'re trying to achieve.',
  },
  {
    n: '02',
    headline: 'Teams lack confidence and capability.',
    detail: 'Most people know AI exists. Very few know how to use it well, safely, and in a way that actually changes how they work.',
  },
  {
    n: '03',
    headline: 'Organisations are struggling to adapt fast enough.',
    detail: 'The pace of change is outrunning the ability to respond. Operating models built for a pre-AI world are already becoming a liability.',
  },
];

export default function ConfidenceGap() {
  return (
    <section className="bg-white py-24 lg:py-36">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">

        <FadeIn>
          <p className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-sans mb-4">The Challenge</p>
          <h2 className="font-serif text-[clamp(2.2rem,5vw,4rem)] text-[#111111] mb-4 max-w-xl leading-tight">
            The Future-Readiness Gap
          </h2>
          <div className="w-8 h-px bg-[#D4AF37] mb-16 lg:mb-20" />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 lg:mb-20">
          {problems.map((p, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="border border-black/8 p-8 lg:p-10 h-full">
                <span className="text-[#D4AF37] text-[10px] tracking-[0.3em] uppercase font-sans block mb-6">{p.n}</span>
                <h3 className="font-serif text-xl lg:text-2xl text-[#111111] leading-snug mb-4">
                  {p.headline}
                </h3>
                <p className="text-[#888888] text-sm leading-relaxed font-sans">{p.detail}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={200}>
          <div className="border-l-2 border-[#D4AF37] pl-8 py-2 max-w-2xl">
            <p className="font-serif text-[clamp(1.4rem,3.5vw,2rem)] text-[#111111] leading-snug">
              The risk isn&apos;t AI.
            </p>
            <p className="font-serif italic text-[clamp(1.4rem,3.5vw,2rem)] text-[#888888] leading-snug mt-1">
              The risk is being unprepared for what comes next.
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
