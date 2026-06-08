import FadeIn from '@/components/FadeIn';

const gaps = [
  {
    n: '01',
    label: 'Information isn\'t the problem',
    body: 'Everyone has access to the same tools, articles, and insights. The information is there. It always has been.',
  },
  {
    n: '02',
    label: 'Tools aren\'t the problem',
    body: 'New tools arrive every week. More capability, more choice, more noise. The market has never been more saturated.',
  },
  {
    n: '03',
    label: 'Confidence is the problem',
    body: 'Most leaders don\'t know where to start. Overwhelmed, uncertain, and paralysed by the size of the opportunity.',
  },
];

export default function ConfidenceGap() {
  return (
    <section className="bg-white py-24 lg:py-36">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">

        <FadeIn>
          <p className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-sans mb-4">The Problem</p>
          <h2 className="font-serif text-[clamp(2.2rem,5vw,4rem)] text-[#111111] mb-20 max-w-sm leading-tight">
            The Confidence Gap
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 mb-20">
          {gaps.map((item, i) => (
            <FadeIn key={i} delay={i * 120}>
              <div className="border-t border-black/10 pt-8">
                <p className="text-[#D4AF37] text-[10px] tracking-[0.3em] uppercase font-sans mb-5">{item.n}</p>
                <h3 className="font-serif text-xl lg:text-2xl text-[#111111] mb-4 leading-snug">
                  {item.label}
                </h3>
                <p className="text-[#888888] text-sm leading-relaxed font-sans">{item.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="border-t border-black/8 pt-12">
            <p className="font-serif italic text-[clamp(1.4rem,3vw,2.5rem)] text-[#111111] max-w-xl leading-snug">
              Confidence comes before capability.
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
