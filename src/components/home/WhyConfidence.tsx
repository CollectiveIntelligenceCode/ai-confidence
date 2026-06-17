import FadeIn from '@/components/FadeIn';

const shifts = [
  'People understand the why',
  'Leaders know where to focus',
  'Teams have practical skills',
  'Workflows are redesigned',
  'Data is usable',
  'Governance is clear',
  'Adoption becomes part of the operating model',
];

export default function WhyConfidence() {
  return (
    <section className="bg-white py-24 lg:py-36">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">

        <FadeIn>
          <p className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-sans mb-4">Why It Matters</p>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.8rem)] text-[#111111] mb-4 max-w-3xl leading-tight">
            The organisations that thrive tomorrow are building confidence today.
          </h2>
          <div className="w-8 h-px bg-[#D4AF37] mb-16 lg:mb-20" />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          <FadeIn delay={100}>
            <p className="text-[#555555] text-base lg:text-lg leading-relaxed font-sans mb-8">
              AI adoption is not only an engineering challenge. It is a human, operating model, data, leadership and transformation challenge.
            </p>
            <p className="text-[#888888] text-sm leading-relaxed font-sans mb-10">
              The real shift happens when:
            </p>
            <ul className="space-y-4">
              {shifts.map((shift, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="text-[#D4AF37] shrink-0 font-sans text-xs mt-1">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[#333333] font-sans text-sm leading-snug">{shift}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={200} direction="none">
            <div className="flex flex-col justify-between h-full">
              <div className="border-l-2 border-[#D4AF37] pl-8 py-4">
                <p className="font-serif italic text-[clamp(2rem,5vw,3.2rem)] text-[#111111] leading-tight">
                  Confidence comes before capability.
                </p>
              </div>

              <div className="mt-12 pt-10 border-t border-black/8">
                <p className="text-[#888888] text-sm font-sans leading-relaxed max-w-sm">
                  That&apos;s why every programme, workshop and community we run is designed to build confidence first — and let capability follow naturally.
                </p>
              </div>
            </div>
          </FadeIn>

        </div>

      </div>
    </section>
  );
}
