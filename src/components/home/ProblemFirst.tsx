import FadeIn from '@/components/FadeIn';

const cards = [
  {
    word: 'Problem',
    question: 'What challenge are we trying to solve?',
  },
  {
    word: 'Opportunity',
    question: 'Where could AI create value?',
  },
  {
    word: 'Tool',
    question: 'Which technology is best suited to the task?',
  },
];

export default function ProblemFirst() {
  return (
    <section className="bg-[#111111] py-24 lg:py-36">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">

        <FadeIn>
          <p className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-sans mb-4">The Mindset</p>
          <h2 className="font-serif text-[clamp(2.2rem,5vw,4rem)] text-white mb-4 max-w-xl leading-tight">
            Problem First.<br />
            <span className="italic text-white/50">Tool Second.</span>
          </h2>
          <div className="w-8 h-px bg-[#D4AF37] mb-12 lg:mb-16" />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16 lg:mb-20">

          <FadeIn delay={100}>
            <div className="space-y-5 text-white/55 font-sans text-base lg:text-lg leading-relaxed">
              <p>Most organisations start with AI tools.</p>
              <p>The most successful organisations start with business problems.</p>
              <p>New tools appear every week.</p>
              <p>What matters is understanding where AI can create meaningful value, improve decisions, remove friction and unlock new opportunities.</p>
              <p className="text-white/80 font-medium">AI Confidence helps leaders focus on outcomes before technology.</p>
            </div>
          </FadeIn>

          <FadeIn delay={180}>
            <div className="space-y-4">
              {cards.map((card, i) => (
                <div key={i} className="border border-white/8 p-7 flex items-start gap-6 group hover:border-[#D4AF37]/30 transition-colors duration-400">
                  <span className="text-[#D4AF37] text-[10px] tracking-[0.3em] uppercase font-sans shrink-0 mt-0.5 w-20">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="font-serif text-white text-lg lg:text-xl mb-1.5 group-hover:text-[#D4AF37] transition-colors duration-300">
                      {card.word}
                    </p>
                    <p className="text-white/35 text-sm font-sans leading-snug">{card.question}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

        </div>

        <FadeIn delay={250}>
          <div className="border-t border-white/8 pt-10 max-w-2xl">
            <p className="font-serif italic text-white/35 text-lg lg:text-xl leading-relaxed">
              The future belongs to organisations that are problem-led, not tool-led.
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
