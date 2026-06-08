import FadeIn from '@/components/FadeIn';

const features = [
  'AI Confidence Framework deep-dive',
  'Leadership immersion sessions',
  'Peer-to-peer working groups',
  '90-day action planning',
  'Real implementation — not theory',
  'Ongoing community access',
];

export default function EventSection() {
  return (
    <section id="events" className="bg-[#111111] py-24 lg:py-36">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          <FadeIn>
            <div>
              <p className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-sans mb-8">The Event</p>
              <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] text-white leading-tight mb-8">
                AI Confidence Day
              </h2>
              <div className="space-y-1 mb-10">
                <p className="font-serif italic text-white/60 text-xl">One day.</p>
                <p className="font-serif italic text-white/60 text-xl">Practical frameworks.</p>
                <p className="font-serif italic text-white/60 text-xl">Real conversations.</p>
                <p className="font-serif italic text-white/60 text-xl">Immediate action.</p>
              </div>
              <p className="text-white/35 text-sm leading-relaxed font-sans max-w-md mb-10">
                A leadership workshop designed to help organisations understand, adopt and implement AI confidently. No jargon. No hype. Just clarity and a path forward.
              </p>
              <a
                href="/events/ai-day-london-2026"
                className="inline-block border border-[#D4AF37] text-[#D4AF37] px-8 py-3.5 text-[10px] tracking-[0.25em] uppercase hover:bg-[#D4AF37] hover:text-[#111111] transition-all duration-500 font-sans"
              >
                Reserve Your Place
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="border border-white/8 p-8 lg:p-10">
              <div className="flex items-center justify-between mb-8">
                <p className="text-white/25 text-[10px] tracking-[0.3em] uppercase font-sans">Next Event</p>
                <span className="border border-[#D4AF37]/40 text-[#D4AF37] text-[10px] tracking-widest uppercase px-3 py-1 font-sans">
                  London 2026
                </span>
              </div>
              <p className="font-serif text-white text-2xl mb-1">AI Confidence Day</p>
              <p className="text-white/30 text-sm font-sans mb-8">One full day · Leadership workshop</p>
              <div className="border-t border-white/8 pt-6 space-y-4">
                {features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-1 h-1 rounded-full bg-[#D4AF37] shrink-0" />
                    <span className="text-white/40 text-xs font-sans tracking-wide">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
