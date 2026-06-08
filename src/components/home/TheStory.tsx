import FadeIn from '@/components/FadeIn';

const outcomes = [
  { stat: '70%', label: 'of time reclaimed' },
  { stat: '↑', label: 'Revenue increased' },
  { stat: '×3', label: 'New products built' },
  { stat: '∞', label: 'More time with family' },
];

export default function TheStory() {
  return (
    <section className="bg-[#111111] py-24 lg:py-36">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          <FadeIn>
            <div>
              <p className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-sans mb-10">The Story</p>
              <p className="font-serif italic text-white/90 text-2xl lg:text-3xl leading-[1.5] mb-8">
                &ldquo;One year ago I rebuilt my business around an AI-first operating model.&rdquo;
              </p>
              <p className="text-white/45 text-sm leading-relaxed mb-5 font-sans">
                Not to remove people. Not to cut costs. But to create space for what actually matters — presence, creativity, and meaningful work.
              </p>
              <p className="text-white/45 text-sm leading-relaxed mb-10 font-sans">
                Revenue increased. New products were built. Work expanded globally. And I was present — truly present — for the things that mattered most.
              </p>
              <div className="border-t border-white/8 pt-6">
                <p className="font-serif italic text-white/60 text-base mb-1">
                  The most important metric wasn&apos;t revenue.
                </p>
                <p className="font-serif italic text-[#D4AF37] text-base">It was presence.</p>
              </div>
              <p className="text-white/25 text-[10px] tracking-[0.3em] uppercase font-sans mt-6">
                — Chris Bradshaw, Founder
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="grid grid-cols-2 gap-6 lg:gap-8 lg:pt-16">
              {outcomes.map((item, i) => (
                <div key={i} className="border-t border-white/10 pt-6">
                  <p className="font-serif text-[#D4AF37] text-4xl lg:text-5xl mb-2 leading-none">{item.stat}</p>
                  <p className="text-white/35 text-xs tracking-wide font-sans">{item.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
