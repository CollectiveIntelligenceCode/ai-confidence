import FadeIn from '@/components/FadeIn';

const qualities = [
  'Leadership',
  'Judgment',
  'Creativity',
  'Relationships',
  'Facilitation',
  'Empathy',
];

export default function HumanAI() {
  return (
    <section className="bg-white py-24 lg:py-36">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          <FadeIn>
            <div>
              <p className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-sans mb-4">Human + AI</p>
              <h2 className="font-serif text-[clamp(2.2rem,5vw,4.5rem)] text-[#111111] leading-tight mb-8">
                What AI<br />Doesn&apos;t<br />Replace
              </h2>
              <div className="w-8 h-px bg-[#D4AF37] mb-8" />
              <p className="font-serif italic text-[#111111] text-xl lg:text-2xl leading-relaxed mb-4">
                AI amplifies human potential.
              </p>
              <p className="text-[#888888] text-sm leading-relaxed font-sans">
                It doesn&apos;t replace it. The qualities that define great leadership — judgment, empathy, creativity — become more valuable, not less, in an AI-enabled world.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={160}>
            <div className="grid grid-cols-2 gap-3">
              {qualities.map((q, i) => (
                <div
                  key={i}
                  className="border border-black/8 px-6 py-5 hover:border-[#D4AF37] transition-colors duration-400 group"
                >
                  <p className="font-serif text-lg text-[#111111] group-hover:text-[#D4AF37] transition-colors duration-300">
                    {q}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
