import FadeIn from '@/components/FadeIn';

const resources = [
  {
    type: 'Guide',
    title: 'The AI Confidence Starter Guide',
    desc: 'A practical framework for leaders beginning their AI journey. Where to start, what to ignore, and how to move forward.',
    tag: 'Free',
  },
  {
    type: 'Podcast',
    title: 'AI Confidence Podcast',
    desc: 'Honest conversations with leaders navigating AI in the real world. No hype. No jargon.',
    tag: 'Coming Soon',
  },
  {
    type: 'Framework',
    title: 'The Five Pillars Framework',
    desc: 'The complete AI Confidence Framework — Confidence, Clarity, Capability, Action, Transformation.',
    tag: 'Download',
  },
  {
    type: 'Articles',
    title: 'Insights & Perspectives',
    desc: 'Long-form thinking on AI, leadership, and the future of work — written for people who think slowly.',
    tag: 'Read',
  },
];

export default function Resources() {
  return (
    <section id="resources" className="bg-white py-24 lg:py-36">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">

        <FadeIn>
          <p className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-sans mb-4">Resources</p>
          <h2 className="font-serif text-[clamp(2.2rem,5vw,4rem)] text-[#111111] mb-16 lg:mb-20 max-w-sm leading-tight">
            Build Your Confidence
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {resources.map((r, i) => (
            <FadeIn key={i} delay={i * 90}>
              <div className="border border-black/8 p-8 hover:border-[#D4AF37] transition-colors duration-400 group cursor-pointer h-full">
                <div className="flex items-start justify-between mb-5">
                  <span className="text-[#D4AF37] text-[10px] tracking-[0.3em] uppercase font-sans">{r.type}</span>
                  <span className="text-[#888888] text-[10px] tracking-wide font-sans border border-black/10 px-2.5 py-1">
                    {r.tag}
                  </span>
                </div>
                <h3 className="font-serif text-xl text-[#111111] mb-3 group-hover:text-[#D4AF37] transition-colors duration-300 leading-snug">
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
