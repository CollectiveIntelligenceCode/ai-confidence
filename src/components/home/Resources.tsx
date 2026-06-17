import FadeIn from '@/components/FadeIn';

const resources = [
  {
    type: 'Guide',
    title: 'AI Confidence Starter Guide',
    desc: 'A practical first step for anyone beginning their AI journey. Where to start, what to ignore, and how to move forward with clarity.',
    tag: 'Free',
  },
  {
    type: 'Podcast',
    title: 'AI Confidence Podcast',
    desc: 'Honest conversations with leaders navigating AI in the real world. No hype. No jargon. Just real experience.',
    tag: 'Coming Soon',
  },
  {
    type: 'Framework',
    title: 'The AI Confidence Framework',
    desc: 'The complete framework — People, Data, Technology and Process — with Human at the centre. Built for practical application.',
    tag: 'Download',
  },
  {
    type: 'Programme',
    title: 'AI Confidence for Leaders',
    desc: 'Strategic AI confidence for founders, directors and senior teams. From uncertainty to a clear, actionable leadership position.',
    tag: 'Explore',
  },
  {
    type: 'Programme',
    title: 'AI Confidence Digital Cohort',
    desc: 'Hands-on AI fluency for individuals, consultants and teams. Practical skills you can use from day one.',
    tag: 'Join',
  },
  {
    type: 'Programme',
    title: 'AI Confidence for Organisations',
    desc: 'Team-wide AI enablement, readiness assessments and transformation support. Scale confidence across your organisation.',
    tag: 'Enquire',
  },
];

export default function Resources() {
  return (
    <section id="resources" className="bg-[#F5F5F5] py-24 lg:py-36">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">

        <FadeIn>
          <p className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-sans mb-4">Resources</p>
          <h2 className="font-serif text-[clamp(2.2rem,5vw,4rem)] text-[#111111] mb-4 max-w-sm leading-tight">
            Part of the movement
          </h2>
          <div className="w-8 h-px bg-[#D4AF37] mb-16 lg:mb-20" />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {resources.map((r, i) => (
            <FadeIn key={i} delay={i * 70}>
              <div className="border border-black/8 bg-white p-8 hover:border-[#D4AF37] transition-colors duration-400 group cursor-pointer h-full flex flex-col">
                <div className="flex items-start justify-between mb-5">
                  <span className="text-[#D4AF37] text-[10px] tracking-[0.3em] uppercase font-sans">{r.type}</span>
                  <span className="text-[#888888] text-[10px] tracking-wide font-sans border border-black/10 px-2.5 py-1">
                    {r.tag}
                  </span>
                </div>
                <h3 className="font-serif text-lg text-[#111111] mb-3 group-hover:text-[#D4AF37] transition-colors duration-300 leading-snug flex-1">
                  {r.title}
                </h3>
                <p className="text-[#888888] text-sm leading-relaxed font-sans">{r.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
