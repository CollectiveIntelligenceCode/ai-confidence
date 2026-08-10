import FadeIn from '@/components/FadeIn';

const ctas = [
  { label: 'Join the Digital Cohort', href: 'https://ai-confidence-day.vercel.app', primary: true },
  { label: 'Explore Leadership Programme', href: '#entry-points', primary: false },
  { label: 'Build Your AI Operating Model', href: '/organisations', primary: false },
];

export default function FinalCTA() {
  return (
    <section className="bg-[#111111] py-28 lg:py-44">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">

        <FadeIn>
          <div className="w-px h-16 bg-[#D4AF37] mx-auto mb-14 opacity-40" />

          <h2 className="font-serif text-[clamp(2rem,5.5vw,4.2rem)] text-white leading-[1.1] mb-6">
            Build confident people,<br />
            <span className="italic text-white/70">capable teams and future-ready organisations.</span>
          </h2>

          <p className="text-white/65 font-sans text-sm leading-relaxed max-w-lg mx-auto mb-12">
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

          <div className="w-px h-12 bg-[#D4AF37] mx-auto opacity-30 mb-14" />

          <div className="border border-[#D4AF37]/20 px-8 py-10 max-w-2xl mx-auto">
            <div className="text-[#D4AF37] text-3xl font-serif leading-none mb-6 opacity-40">&ldquo;</div>
            <p className="font-serif italic text-white text-[clamp(1.4rem,3vw,2.2rem)] leading-snug mb-6">
              AI should help us become more human, not less.
            </p>
            <div className="w-8 h-px bg-[#D4AF37] mx-auto opacity-40" />
          </div>

          <div className="w-px h-14 bg-[#D4AF37] mx-auto mt-14 opacity-20" />
        </FadeIn>

      </div>
    </section>
  );
}
