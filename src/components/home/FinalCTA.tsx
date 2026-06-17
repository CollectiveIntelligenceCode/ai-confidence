import FadeIn from '@/components/FadeIn';

const ctas = [
  { label: 'Join the Digital Cohort', href: 'https://ai-confidence-day.vercel.app', primary: true },
  { label: 'Explore Leadership Programme', href: '#entry-points', primary: false },
  { label: 'Train Your Organisation', href: '#entry-points', primary: false },
];

export default function FinalCTA() {
  return (
    <section className="bg-[#111111] py-28 lg:py-44">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">

        <FadeIn>
          <div className="w-px h-16 bg-[#D4AF37] mx-auto mb-14 opacity-40" />

          <h2 className="font-serif text-[clamp(2rem,5.5vw,4.2rem)] text-white leading-[1.1] mb-6">
            Build confident people,<br />
            <span className="italic text-white/50">capable teams and future-ready organisations.</span>
          </h2>

          <p className="text-white/30 font-sans text-sm leading-relaxed max-w-lg mx-auto mb-12">
            Whether you are starting with personal AI fluency, leadership confidence or organisation-wide transformation, AI Confidence gives you a clear path forward.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            {ctas.map((cta, i) => (
              <a
                key={i}
                href={cta.href}
                className={`text-[10px] tracking-[0.25em] uppercase px-8 py-4 font-sans transition-all duration-500 ${
                  cta.primary
                    ? 'bg-[#D4AF37] text-[#111111] hover:bg-white hover:text-[#111111]'
                    : 'border border-white/20 text-white/50 hover:border-[#D4AF37] hover:text-[#D4AF37]'
                }`}
              >
                {cta.label}
              </a>
            ))}
          </div>

          <div className="w-px h-10 bg-[#D4AF37] mx-auto opacity-20 mb-10" />

          <p className="font-serif italic text-white/20 text-lg lg:text-xl">
            AI should help us become more human, not less.
          </p>

          <div className="w-px h-16 bg-[#D4AF37] mx-auto mt-10 opacity-20" />
        </FadeIn>

      </div>
    </section>
  );
}
