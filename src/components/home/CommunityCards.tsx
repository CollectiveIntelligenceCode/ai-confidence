import FadeIn from '@/components/FadeIn';

export default function CommunityCards() {
  return (
    <section id="community" className="bg-[#111111] py-24 lg:py-36">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">

        <FadeIn>
          <p className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-sans mb-4">Community</p>
          <h2 className="font-serif text-[clamp(2.2rem,5vw,4rem)] text-white mb-3 max-w-2xl leading-tight">
            The AI Confidence Community
          </h2>
          <p className="text-white/35 font-sans text-sm mb-4 max-w-sm">
            Two communities. One mission. Building confidence at every level.
          </p>
          <div className="w-8 h-px bg-[#D4AF37] mb-16 lg:mb-20" />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

          {/* AI Confidence Collective */}
          <FadeIn delay={100}>
            <div className="border border-white/10 p-8 lg:p-10 flex flex-col h-full hover:border-[#D4AF37]/30 transition-colors duration-400">
              <div className="mb-8">
                <span className="text-[#D4AF37] text-[10px] tracking-[0.3em] uppercase font-sans block mb-5">01</span>
                <h3 className="font-serif text-2xl lg:text-3xl text-white mb-3 leading-tight">
                  AI Confidence Collective
                </h3>
                <p className="text-white/40 text-[10px] tracking-[0.18em] uppercase font-sans">
                  For practitioners, teams and consultants
                </p>
              </div>

              {/* Journey */}
              <div className="flex items-center gap-2 mb-8">
                {['Join', 'Learn', 'Connect', 'Grow'].map((step, i, arr) => (
                  <div key={step} className="flex items-center gap-2">
                    <span className="text-[10px] font-sans text-[#D4AF37] tracking-wide">{step}</span>
                    {i < arr.length - 1 && <span className="text-white/20 text-xs">→</span>}
                  </div>
                ))}
              </div>

              <ul className="space-y-3 mb-10 flex-1">
                {[
                  'Join our training and community.',
                  'Build skills and share knowledge.',
                  'Collaborate and support each other.',
                  'Create opportunities and career growth.',
                ].map((line, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#D4AF37] mt-0.5 shrink-0 text-xs">—</span>
                    <span className="text-white/50 text-sm font-sans leading-snug">{line}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#entry-points"
                className="block text-center text-[10px] tracking-[0.25em] uppercase py-4 border border-white/20 text-white/60 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-400 font-sans"
              >
                Join the Collective
              </a>
            </div>
          </FadeIn>

          {/* AI Confidence Leaders Circle */}
          <FadeIn delay={180}>
            <div className="border border-[#D4AF37]/25 bg-[#D4AF37]/[0.03] p-8 lg:p-10 flex flex-col h-full hover:border-[#D4AF37]/50 transition-colors duration-400 relative overflow-hidden">
              {/* Subtle gold gradient top */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />

              <div className="mb-8">
                <span className="text-[#D4AF37] text-[10px] tracking-[0.3em] uppercase font-sans block mb-5">02</span>
                <h3 className="font-serif text-2xl lg:text-3xl text-white mb-2 leading-tight">
                  AI Confidence<br />Leaders Circle
                </h3>
                <div className="flex items-center gap-2 mt-3">
                  <span className="text-[10px] tracking-[0.18em] uppercase font-sans border border-[#D4AF37]/30 text-[#D4AF37] px-3 py-1">
                    Executive
                  </span>
                  <span className="text-[10px] tracking-[0.18em] uppercase font-sans border border-[#D4AF37]/30 text-[#D4AF37] px-3 py-1">
                    Private
                  </span>
                </div>
                <p className="text-white/40 text-[10px] tracking-[0.18em] uppercase font-sans mt-3">
                  For founders, directors, executives and board members
                </p>
              </div>

              {/* Journey */}
              <div className="flex items-center gap-2 mb-8">
                {['Connect', 'Share', 'Lead', 'Transform'].map((step, i, arr) => (
                  <div key={step} className="flex items-center gap-2">
                    <span className="text-[10px] font-sans text-[#D4AF37] tracking-wide">{step}</span>
                    {i < arr.length - 1 && <span className="text-[#D4AF37]/30 text-xs">→</span>}
                  </div>
                ))}
              </div>

              <ul className="space-y-3 mb-10 flex-1">
                {[
                  'Join a trusted peer network.',
                  'Exchange insights and experiences.',
                  'Address challenges and opportunities.',
                  'Lead transformation with confidence.',
                ].map((line, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#D4AF37] mt-0.5 shrink-0 text-xs">—</span>
                    <span className="text-white/60 text-sm font-sans leading-snug">{line}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#entry-points"
                className="block text-center text-[10px] tracking-[0.25em] uppercase py-4 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#111111] transition-all duration-400 font-sans"
              >
                Explore Leaders Circle
              </a>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
