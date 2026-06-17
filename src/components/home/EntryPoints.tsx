import FadeIn from '@/components/FadeIn';

const entries = [
  {
    n: '01',
    title: 'AI Confidence\nDigital Cohort',
    audience: 'For Individuals, Consultants & Teams',
    outcome: 'Build practical AI fluency and confidence.',
    learnLabel: 'You will learn',
    learn: [
      'Understanding modern AI',
      'Tool selection',
      'Prompting and workflows',
      'Building personal assistants',
      'Everyday productivity',
      'Content creation',
      'Research and analysis',
      'Team collaboration',
    ],
    format: ['Digital cohort', 'Community access', 'Templates & resources', 'Live sessions'],
    cta: 'Join the Digital Cohort',
    href: 'https://ai-confidence-day.vercel.app',
    dark: false,
  },
  {
    n: '02',
    title: 'AI Confidence\nfor Leaders',
    audience: 'For Founders, Directors & Senior Teams',
    outcome: 'Build strategic confidence and lead AI transformation.',
    learnLabel: 'You will explore',
    learn: [
      'AI strategy',
      'Operating models',
      'Governance & risk',
      'Change management',
      'AI opportunity mapping',
      'Workforce transformation',
      'Capability building',
      'Adoption roadmaps',
    ],
    format: ['Workshops', 'Executive sessions', 'Leadership cohorts', 'Advisory support'],
    cta: 'Explore Leadership Programme',
    href: 'https://ai-confidence-day.vercel.app',
    dark: true,
  },
  {
    n: '03',
    title: 'AI Confidence\nfor Organisations',
    audience: 'For Teams & Organisations',
    outcome: 'Build an AI-ready workforce with the skills, confidence and training to scale AI impact.',
    learnLabel: 'You will enable',
    learn: [
      'AI readiness assessments',
      'Team training programmes',
      'Internal champions',
      'AI fluency & capability building',
      'Practical use case labs',
      'Change & adoption support',
      'Measurement & impact tracking',
    ],
    format: ['Team training', 'Live workshops', 'Certification programmes', 'Impact tracking'],
    cta: 'Train Your Organisation',
    href: 'https://ai-confidence-day.vercel.app',
    dark: false,
  },
];

export default function EntryPoints() {
  return (
    <section id="entry-points" className="bg-[#F5F5F5] py-24 lg:py-36">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">

        <FadeIn>
          <p className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-sans mb-4">The Programmes</p>
          <h2 className="font-serif text-[clamp(2.2rem,5vw,4rem)] text-[#111111] mb-3 max-w-2xl leading-tight">
            One journey. Three entry points. Unlimited impact.
          </h2>
          <div className="w-8 h-px bg-[#D4AF37] mb-16 lg:mb-20" />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {entries.map((entry, i) => (
            <FadeIn key={i} delay={i * 120}>
              <div className={`flex flex-col h-full ${entry.dark ? 'bg-[#111111]' : 'bg-white'} border ${entry.dark ? 'border-white/8' : 'border-black/8'}`}>

                {/* Card header */}
                <div className={`p-8 border-b ${entry.dark ? 'border-white/8' : 'border-black/8'}`}>
                  <span className={`text-[#D4AF37] text-[10px] tracking-[0.3em] uppercase font-sans block mb-5`}>{entry.n}</span>
                  <h3 className={`font-serif text-2xl lg:text-3xl leading-tight mb-4 whitespace-pre-line ${entry.dark ? 'text-white' : 'text-[#111111]'}`}>
                    {entry.title}
                  </h3>
                  <p className={`text-[10px] tracking-[0.18em] uppercase font-sans mb-4 ${entry.dark ? 'text-white/40' : 'text-[#888888]'}`}>
                    {entry.audience}
                  </p>
                  <p className={`text-sm leading-relaxed font-sans font-medium ${entry.dark ? 'text-white/70' : 'text-[#444444]'}`}>
                    {entry.outcome}
                  </p>
                </div>

                {/* Learning items */}
                <div className={`p-8 border-b flex-1 ${entry.dark ? 'border-white/8' : 'border-black/8'}`}>
                  <p className={`text-[10px] tracking-[0.2em] uppercase font-sans mb-5 ${entry.dark ? 'text-[#D4AF37]' : 'text-[#D4AF37]'}`}>
                    {entry.learnLabel}
                  </p>
                  <ul className="space-y-2.5">
                    {entry.learn.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="text-[#D4AF37] mt-0.5 shrink-0 text-xs">—</span>
                        <span className={`text-sm font-sans leading-snug ${entry.dark ? 'text-white/60' : 'text-[#555555]'}`}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Format */}
                <div className={`px-8 pt-6 pb-2 border-b ${entry.dark ? 'border-white/8' : 'border-black/8'}`}>
                  <p className={`text-[10px] tracking-[0.2em] uppercase font-sans mb-4 ${entry.dark ? 'text-[#D4AF37]' : 'text-[#D4AF37]'}`}>Format</p>
                  <div className="flex flex-wrap gap-2 pb-6">
                    {entry.format.map((f, j) => (
                      <span key={j} className={`text-[10px] font-sans px-3 py-1.5 border tracking-wide ${entry.dark ? 'border-white/15 text-white/50' : 'border-black/12 text-[#888888]'}`}>
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="p-8">
                  <a
                    href={entry.href}
                    className={`block text-center text-[10px] tracking-[0.25em] uppercase py-4 border transition-all duration-400 font-sans ${
                      entry.dark
                        ? 'border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#111111]'
                        : 'border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white'
                    }`}
                  >
                    {entry.cta}
                  </a>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
