import FadeIn from '@/components/FadeIn';

const differentiators = [
  {
    n: '01',
    headline: 'We start with the problem, not the tools.',
    body: 'Most AI programmes lead with technology. We lead with your business. Every engagement starts by understanding the real challenge, the decision that needs to be made, the team that needs to change, the operating model that needs to evolve. AI is the enabler. The problem is the starting point.',
  },
  {
    n: '02',
    headline: 'Facilitation is our superpower.',
    body: 'Our team are in the top 1% of facilitators in the world, trained by the world\'s leading facilitation organisations and with decades of experience running strategy sessions, workshops and transformation programmes for major global enterprises. We are not AI enthusiasts who learned to facilitate. We are world-class facilitators who now do this with AI. Nobody else in this space can say that.',
  },
  {
    n: '03',
    headline: 'We help leaders make better decisions, not just learn tools.',
    body: 'Our job is not to make you a developer. It is to give you the clarity, frameworks and confidence to make the right calls about AI, in the boardroom, in your strategy sessions, and across your organisation. Leadership enabling, decision quality, and strategic adoption are what we are here for.',
  },
  {
    n: '04',
    headline: 'We have done it. At scale. Across industries.',
    body: 'This is not theoretical. Our team has led AI adoption and transformation programmes for organisations including KPMG, BMW, Selfridges, Barclays Capital and Bank of America, across insurance, banking, private equity, public sector, education, real estate, biotech and more. The frameworks we bring are battle-tested.',
  },
];

export default function OurEdge() {
  return (
    <section className="bg-[#111111] pt-24 lg:pt-36 pb-12 lg:pb-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">

        <FadeIn>
          <p className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-sans mb-4">What Makes Us Different</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 mb-4">
            <h2 className="font-serif text-[clamp(2.2rem,5vw,4rem)] text-white leading-tight">
              There is no shortage of AI training.<br />
              <span className="italic text-white/50">There is a shortage of this.</span>
            </h2>
            <div className="flex items-end">
              <p className="text-white/65 text-sm font-sans leading-relaxed max-w-sm">
                Every other AI programme starts with the tools. We start with the people, the problem and the decision that needs to be made. That is a fundamentally different approach, and it is why it works.
              </p>
            </div>
          </div>
          <div className="w-8 h-px bg-[#D4AF37] mb-16 lg:mb-20" />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/6">
          {differentiators.map((d, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="bg-[#111111] p-8 lg:p-10 h-full">
                <span className="text-[#D4AF37] text-[10px] tracking-[0.3em] font-sans block mb-6 opacity-50">{d.n}</span>
                <h3 className="font-serif text-white text-xl lg:text-2xl leading-tight mb-5">
                  {d.headline}
                </h3>
                <div className="w-6 h-px bg-[#D4AF37] mb-5 opacity-40" />
                <p className="text-white/70 text-sm font-sans leading-relaxed">
                  {d.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Facilitation pull-quote */}
        <FadeIn delay={200}>
          <div className="mt-16 lg:mt-24 border-t border-[#D4AF37]/20 pt-16 lg:pt-20">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.6fr] gap-10 lg:gap-20 items-start">

              <div>
                <p className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-sans mb-5">Our Shared Superpower</p>
                <div className="w-8 h-px bg-[#D4AF37] mb-6" />
                <p className="text-white/40 text-xs font-sans leading-relaxed tracking-wide">
                  This is what makes us a team, not just a group of consultants.
                </p>
              </div>

              <div className="relative pl-6 border-l border-[#D4AF37]/30">
                <span className="absolute -top-2 -left-px font-serif text-[#D4AF37] text-5xl leading-none opacity-30">&ldquo;</span>
                <p className="font-serif text-white text-[clamp(1.3rem,2.8vw,2rem)] leading-snug">
                  We were all trained at the highest level by the world&apos;s leading facilitation organisations. We use the same frameworks, speak the same language, and think alike —
                </p>
                <p className="font-serif italic text-[#D4AF37] text-[clamp(1.3rem,2.8vw,2rem)] leading-snug mt-4">
                  which is why a team that came together recently moves like one that has worked together for years.
                </p>
              </div>

            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
