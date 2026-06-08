import FadeIn from '@/components/FadeIn';

const testimonials = [
  {
    quote:
      'I arrived uncertain. I left with a plan. AI Confidence Day gave me the language and the confidence to lead my organisation through this transition.',
    name: 'Managing Director',
    company: 'Professional Services, London',
  },
  {
    quote:
      'The most useful leadership workshop I\'ve attended in years. Practical, calm, and completely free of the hype I\'ve come to expect from anything AI-related.',
    name: 'CEO',
    company: 'Financial Services, UK',
  },
  {
    quote:
      'Chris has a rare gift — he makes the complex feel manageable. We left with a framework we could actually act on, that same afternoon.',
    name: 'COO',
    company: 'Technology, Global',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#F5F5F5] py-24 lg:py-36">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">

        <FadeIn>
          <p className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-sans mb-4">Voices</p>
          <h2 className="font-serif text-[clamp(2.2rem,5vw,3.5rem)] text-[#111111] mb-16 lg:mb-20 max-w-sm leading-tight">
            What leaders say
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeIn key={i} delay={i * 120}>
              <div className="bg-white p-8 lg:p-10 h-full flex flex-col justify-between">
                <p className="font-serif italic text-[#333333] text-base lg:text-lg leading-relaxed mb-8">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="border-t border-black/6 pt-5">
                  <p className="text-[#111111] text-[10px] tracking-[0.25em] uppercase font-sans">{t.name}</p>
                  <p className="text-[#888888] text-xs font-sans mt-0.5">{t.company}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
