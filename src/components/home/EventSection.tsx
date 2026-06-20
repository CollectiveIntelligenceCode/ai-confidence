import FadeIn from '@/components/FadeIn';

// TODO: Replace with real YouTube video IDs when provided
const events = [
  {
    date: '19th June 2026',
    title: 'For Consultants & Small Business Owners',
    description: 'Stop spending time on what AI can do. Start spending it on what only you can do. A day to build your personal AI workflow, advise clients with confidence, and operate like a team of five.',
    youtubeId: '3lATCQTJ9v4',
  },
  {
    date: '3rd July 2026',
    title: 'For CXOs & Board Members',
    description: 'You are the most capable person in the room — except when the topic is AI. A private day to build genuine clarity, lead any board conversation with confidence, and stop nodding along.',
    youtubeId: 'PLACEHOLDER_2',
  },
];

export default function EventSection() {
  return (
    <section id="events" className="bg-[#111111] py-24 lg:py-36">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">

        <FadeIn>
          <p className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-sans mb-4">Past Events</p>
          <h2 className="font-serif text-[clamp(2.2rem,5vw,4rem)] text-white mb-4 max-w-2xl leading-tight">
            AI Confidence Day —{' '}
            <span className="italic text-white/50">in the room.</span>
          </h2>
          <p className="text-white/40 font-sans text-base max-w-xl leading-relaxed mb-4">
            A private, hands-on working day in London. You leave with a personal AI workflow you built yourself — not slides you never go back to.
          </p>
          <div className="w-8 h-px bg-[#D4AF37] mb-16 lg:mb-20" />
        </FadeIn>

        {/* Event cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {events.map((event, i) => (
            <FadeIn key={i} delay={i * 120}>
              <div className="border border-white/8 flex flex-col h-full">

                {/* Video embed */}
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  {event.youtubeId === 'PLACEHOLDER_1' || event.youtubeId === 'PLACEHOLDER_2' ? (
                    <div className="absolute inset-0 bg-white/5 flex items-center justify-center">
                      <p className="text-white/20 text-xs font-sans tracking-widest uppercase">Video coming</p>
                    </div>
                  ) : (
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${event.youtubeId}?rel=0&modestbranding=1`}
                      title={event.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  )}
                </div>

                {/* Card content */}
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-[#D4AF37] text-[10px] font-sans tracking-[0.2em] uppercase border border-[#D4AF37]/30 px-3 py-1">
                      {event.date}
                    </span>
                    <span className="text-[10px] font-sans tracking-[0.2em] uppercase px-3 py-1 bg-white/8 text-white/50">
                      Sold Out
                    </span>
                  </div>

                  <h3 className="font-serif text-white text-xl lg:text-2xl leading-tight mb-4">
                    {event.title}
                  </h3>
                  <p className="text-white/40 text-sm font-sans leading-relaxed flex-1">
                    {event.description}
                  </p>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>

        {/* Footer trust note + waitlist CTA */}
        <FadeIn delay={200}>
          <div className="border-t border-white/8 pt-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <p className="font-serif italic text-white/35 text-lg max-w-lg leading-relaxed">
              Both cohorts are now closed. A new AI Confidence Day is coming soon.
            </p>
            <a
              href="#entry-points"
              className="shrink-0 border border-[#D4AF37] text-[#D4AF37] px-8 py-3.5 text-[10px] tracking-[0.25em] uppercase hover:bg-[#D4AF37] hover:text-[#111111] transition-all duration-500 font-sans whitespace-nowrap"
            >
              Join the Waitlist
            </a>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
