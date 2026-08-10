'use client';
import { useState } from 'react';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import { LeadCaptureModal } from '@/components/LeadCaptureModal';
import FadeIn from '@/components/FadeIn';

const sessions = [
  {
    n: '01', time: 'Morning', title: 'Your AI Workflow',
    desc: 'How do CXOs and board members actually change their day-to-day using AI? This session is hands-on. You will use AI as a clone, as a board of advisors, as a personal strategist. Not a demo. A working session you walk out of with a workflow that is yours.',
    outcomes: [
      'A personal AI workflow built around your specific role',
      'Confidence to use AI tools without a team supporting you',
      'Practical techniques you can deploy the next morning',
      'AI on the move, real-time, mobile-first approaches',
    ],
  },
  {
    n: '02', time: 'Afternoon', title: 'AI Across Your Organisation',
    desc: 'This is not "everyone should use ChatGPT." This session is about the harder question: how do you lead an organisation through genuine AI transformation? Cross-functional thinking, systems, processes. The frameworks that let a leadership team act on AI instead of reacting to it.',
    outcomes: [
      'A framework to evaluate AI decisions at board level',
      'Language to align your leadership team on AI priorities',
      'How to evaluate vendor claims and answer board questions with confidence',
      'Clarity on what transformation actually looks like in practice',
    ],
  },
  {
    n: '03', time: 'Late Afternoon', title: 'Your AI Worries',
    desc: 'AI conversations in boardrooms always come with a second, quieter conversation: what about data governance? What about regulatory risk? What about security? This session addresses the questions that slow decisions and stall strategies.',
    outcomes: [
      'Why AI risk requires a fundamentally different playbook from other technology',
      'Data governance, privacy, and security, what boards actually need to know',
      'How companies implement AI governance without killing momentum',
      'Regulatory landscape, what is coming, what matters, what you can deprioritise',
    ],
  },
];

const faqs = [
  { q: 'Will there be recordings?', a: 'No. This is an in-person session with no recordings. All materials are sent to participants afterwards. Chatham House Rules mean the conversations in this room stay in this room.' },
  { q: 'Why is the group limited to 12?', a: 'Deliberately. We want a safe space where senior leaders can say "I do not know," ask real questions, and express concerns without judgement. A small group makes that possible.' },
  { q: 'Why is this in person?', a: 'We have seen a significant difference in impact between virtual and in-person sessions at leadership level. The connections formed in person are often more valuable than the content itself. Speed of learning, retention, quality of conversation, everything is better face to face.' },
  { q: 'Do I need technical knowledge?', a: 'No. This is specifically designed for non-technical leaders, CEOs, CFOs, CHROs, CMOs, COOs, board members. You do not need to code or understand machine learning. Just bring curiosity and willingness to learn by doing.' },
  { q: 'What if I cannot attend the full day?', a: 'The day is designed to flow from one session to the next. We strongly encourage full-day attendance. Arriving late or leaving early means missing context that builds throughout the day.' },
  { q: 'Is there a money-back guarantee?', a: 'Yes. If you attend the morning session and, before lunch, feel this day is not for you, let us know and we will refund you in full, no questions asked.' },
  { q: 'Are virtual sessions planned?', a: 'Not for the public programme. We run private CXO AI days for individual companies and PE portfolio companies, and can travel for those. The public session is an in-person London experience.' },
  { q: 'Do you have other dates later in the year?', a: 'We currently have no other public dates planned for the rest of this year. We do run these privately for companies with more flexibility on dates. Reach out if that is more suitable.' },
];

const testimonials = [
  { name: 'Samantha Graham', role: 'Founder and CEO, State of Mind', q: 'I have been in leadership for twenty years and I have never sat in a room where I felt that safe to say I genuinely did not know something. That alone was worth the day.' },
  { name: 'Dan Brown', role: 'International Sales Director, Dailymotion', q: 'Rujuta has a rare ability to translate complexity into something actionable. I left with a framework I actually used in a board meeting the following week.' },
  { name: 'Linda Ayoola', role: 'TEDx UK', q: 'Chris brought genuine strategic and technical knowledge to what felt like an overwhelming topic. His guidance was instrumental in helping us understand where AI could actually move the needle.' },
  { name: 'Evelyn Truter', role: 'Marketing Director, Ricoh Europe', q: 'Rujuta delivered transformative insights and inspired us to translate ideas into tangible, high-impact projects. A remarkable experience.' },
  { name: 'Samrat Ghosh', role: 'Cross Asset Sales, Aurel BGC', q: 'I expected theory. I got a working session that changed how I approach every conversation about AI in my business.' },
  { name: 'Mark Gomez', role: 'Global Sales Director, Wooshii', q: 'An introduction to how AI enables business in every aspect. I realised I am not as far on the AI journey as I thought.' },
];

export default function AIConfidenceDayPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Navigation />

      {/* HERO */}
      <section className="bg-[#111111] pt-40 pb-24 lg:pt-48 lg:pb-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          {/* Sold out banner */}
          <div className="fixed top-16 left-0 right-0 z-40 bg-[#0e0e0e] border-b border-white/10 py-3.5 px-6 lg:px-16 flex items-center justify-between gap-4">
            <p className="text-white/70 text-sm font-sans">
              <span className="text-white font-medium">This cohort is now sold out.</span>{' '}
              Join the waitlist and we&apos;ll notify you of cancellations and future dates.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="shrink-0 border border-[#D4AF37] text-[#D4AF37] px-6 py-2.5 text-[10px] tracking-[0.25em] uppercase hover:bg-[#D4AF37] hover:text-[#111111] transition-all duration-400 font-sans"
            >
              Join the Waitlist
            </button>
          </div>

          <FadeIn>
            <p className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-sans mb-5">
              Not another conference. Not another lecture.
            </p>
            <h1 className="font-serif text-white text-[clamp(2.4rem,6vw,5rem)] leading-[1.05] mb-8 max-w-4xl">
              You are the most capable person in the room.{' '}
              <span className="italic text-white/60">Except when the topic is AI.</span>
            </h1>
            <p className="text-white/65 text-lg font-sans leading-relaxed max-w-2xl mb-10">
              A private working day in London for CXOs and board members who are done nodding along on AI.
            </p>
            <p className="font-serif text-white text-2xl mb-10">One Day. Total Clarity.</p>
            <button
              onClick={() => setModalOpen(true)}
              className="border border-[#D4AF37] text-[#D4AF37] px-10 py-4 text-[10px] tracking-[0.25em] uppercase hover:bg-[#D4AF37] hover:text-[#111111] transition-all duration-500 font-sans"
            >
              Join the Waitlist
            </button>
          </FadeIn>
        </div>
      </section>

      {/* INFO BAR */}
      <div className="bg-[#F5F5F5] border-y border-black/8">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-black/8">
            {[
              { label: 'Date', value: '3rd July 2026' },
              { label: 'Location', value: 'London, UK' },
              { label: 'Format', value: 'Full-Day Workshop' },
              { label: 'Audience', value: 'CXOs & Board Members' },
            ].map((item, i) => (
              <div key={i} className="py-8 px-6 lg:px-8 text-center">
                <p className="text-[#888] text-[10px] tracking-[0.25em] uppercase font-sans mb-2">{item.label}</p>
                <p className="font-serif text-[#111111] text-lg">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CHATHAM NOTICE */}
      <div className="bg-[#D4AF37] py-4 text-center">
        <p className="text-[#111111] text-[10px] tracking-[0.35em] uppercase font-sans">Chatham House Rules Apply</p>
      </div>

      {/* THE REALITY */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <p className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-sans mb-4">The Reality</p>
            <h2 className="font-serif text-[#111111] text-[clamp(2rem,5vw,3.5rem)] leading-tight mb-12 max-w-2xl">
              The reality no one says out loud.
            </h2>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="relative w-full aspect-video mb-12 bg-black/5">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/X-GWD6l5708?rel=0&modestbranding=1"
                title="AI Confidence Day, the reality"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <p className="text-white/80 text-base font-sans leading-relaxed text-[#444]">
                AI is in every strategy deck. Your team is running experiments. Vendors are pitching AI-first solutions. Your board is asking questions that need confident answers.
              </p>
              <p className="text-[#444] text-base font-sans leading-relaxed">
                And privately? The signal is noisy and the clarity is nowhere. That is not a personal failing. It is almost universal at senior level, which is why almost no one is saying it out loud.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-black/8">
              {[
                { num: '74%', text: 'of CEOs say gaps in AI understanding are affecting their boardroom decisions', source: 'Cisco, 2025' },
                { num: '66%', text: 'of board directors report limited to no knowledge or experience with AI', source: 'McKinsey' },
                { num: '50%', text: 'of CEOs believe their job stability depends on getting AI right in 2026', source: 'BCG / WEF, 2026' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="font-serif text-[#D4AF37] text-6xl leading-none mb-3">{stat.num}</p>
                  <p className="text-[#444] text-sm font-sans leading-relaxed mb-1">{stat.text}</p>
                  <p className="text-[#888] text-[10px] tracking-[0.2em] uppercase font-sans">{stat.source}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* DOES THIS SOUND LIKE YOU */}
      <section className="bg-[#111111] py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <p className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-sans mb-4">Sound familiar?</p>
            <h2 className="font-serif text-white text-[clamp(2rem,5vw,3.5rem)] leading-tight mb-16">
              Does this sound like you?
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/6">
            {[
              'I nod in board meetings when AI comes up and hope nobody asks me a direct question.',
              'Every vendor tells me their solution is the one. I cannot tell the difference.',
              'My team is running AI experiments I did not authorise and do not fully understand.',
              'When my CTO talks about AI, I am not sure which questions I should even be asking.',
              'I know AI matters. I just do not know what I should actually be doing about it.',
              'I have sat through three AI presentations this quarter. I left all of them more confused than when I arrived.',
              'I use AI for emails, summaries, the odd report. I know there is more to it. I just have not had the time to figure out what.',
              'I have a feeling I am leaving 95% on the table. I just do not know what that 95% looks like.',
            ].map((thought, i) => (
              <FadeIn key={i} delay={i * 60}>
                <div className="bg-[#111111] p-8 lg:p-10">
                  <span className="font-serif text-[#D4AF37] text-4xl leading-none block mb-4 opacity-40">&ldquo;</span>
                  <p className="text-white/70 text-base font-sans leading-relaxed italic">{thought}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={200}>
            <p className="text-center mt-14 text-white/80 font-serif text-xl">
              If any of this sounds familiar, this day was designed for you.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* BEFORE & AFTER */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <h2 className="font-serif text-[#111111] text-[clamp(2rem,5vw,3.5rem)] leading-tight mb-16 text-center">
              What Changes In A Day
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <FadeIn>
              <p className="text-[#888] text-[10px] tracking-[0.3em] uppercase font-sans mb-6 pb-4 border-b border-black/10">Where you are now</p>
              {[
                'I use AI for emails and summaries. I am using about 5% of what is possible.',
                'I manage AI conversations by staying vague and deferring to my technical team.',
                'I cannot tell the difference between genuine capability and vendor marketing.',
                'Every department is running independent AI experiments with no shared framework.',
                'The board is asking questions about AI that I am not confident answering.',
                'I feel the pressure to lead on AI but have nowhere safe to admit what I do not know.',
              ].map((item, i) => (
                <div key={i} className="py-4 border-b border-black/8 flex gap-4">
                  <span className="text-[#888] shrink-0">—</span>
                  <p className="text-[#444] text-sm font-sans leading-relaxed">{item}</p>
                </div>
              ))}
            </FadeIn>
            <FadeIn delay={150}>
              <p className="text-[#D4AF37] text-[10px] tracking-[0.3em] uppercase font-sans mb-6 pb-4 border-b-2 border-[#D4AF37]">Where you will be</p>
              {[
                'I have a framework to evaluate any AI decision at board level, regardless of which tools emerge next.',
                'I can spot vendor nonsense within five minutes of a pitch.',
                'I have alignment language to direct my technical teams without needing to be a technician.',
                'I can lead any board conversation about AI with genuine confidence, not performed confidence.',
                'I have a personal AI workflow I built myself and can use from the next morning.',
                'I have a small, trusted group of peers, independent, neutral, no company politics, whenever I need a sounding board.',
              ].map((item, i) => (
                <div key={i} className="py-4 border-b border-black/8 flex gap-4">
                  <span className="text-[#D4AF37] shrink-0">✓</span>
                  <p className="text-[#444] text-sm font-sans leading-relaxed">{item}</p>
                </div>
              ))}
            </FadeIn>
          </div>
        </div>
      </section>

      {/* WHAT THIS DAY IS */}
      <section className="bg-[#F5F5F5] py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <p className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-sans mb-4">The Format</p>
            <h2 className="font-serif text-[#111111] text-[clamp(2rem,5vw,3.5rem)] leading-tight mb-16">What this day is.</h2>
          </FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {[
              { title: 'Private & Exclusive', desc: 'Ten to twelve senior leaders. No audience. No observers. Just the room. Everyone is here for the same reason you are.' },
              { title: 'Hands-On, Not Theoretical', desc: 'Two working sessions. You build things. You leave with frameworks and a workflow you made yourself, not slides you may never look at again.' },
              { title: 'Facilitated, Not Lectured', desc: 'Rujuta and Chris have run these rooms before. They know how to create the conditions for real thinking. Past attendees ask when the next one is.' },
              { title: 'Chatham House Rules', desc: 'Nothing shared in this room is attributed outside it. This is what makes genuine conversation possible, and it is why people come back.' },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="bg-white border-l-2 border-[#D4AF37] p-8">
                  <p className="text-[#D4AF37] text-[10px] tracking-[0.3em] uppercase font-sans mb-3">{item.title}</p>
                  <p className="text-[#444] text-sm font-sans leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div className="flex flex-wrap gap-3">
              {['Not a conference', 'Not a panel discussion', 'Not a software demo', 'Not a vendor showcase'].map((item, i) => (
                <span key={i} className="text-[10px] font-sans px-4 py-2 border border-black/12 text-[#888] tracking-wide bg-white">{item}</span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* THE DAY */}
      <section className="bg-[#111111] py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <p className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-sans mb-4">Programme</p>
            <h2 className="font-serif text-white text-[clamp(2rem,5vw,3.5rem)] leading-tight mb-16">The Day</h2>
          </FadeIn>
          <div>
            {sessions.map((s, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="grid grid-cols-1 lg:grid-cols-[120px,1fr] gap-8 py-12 border-t border-white/8">
                  <div className="lg:text-right pt-1">
                    <p className="text-[#D4AF37] text-[11px] tracking-[0.3em] font-sans opacity-60">{s.n}</p>
                    <p className="text-white/40 text-[10px] tracking-[0.2em] uppercase font-sans mt-1">{s.time}</p>
                  </div>
                  <div>
                    <h3 className="font-serif text-white text-2xl lg:text-3xl mb-4">{s.title}</h3>
                    <p className="text-white/65 text-sm font-sans leading-relaxed mb-6">{s.desc}</p>
                    <ul className="space-y-0">
                      {s.outcomes.map((o, j) => (
                        <li key={j} className="py-3 border-b border-white/8 flex gap-3">
                          <span className="text-[#D4AF37] shrink-0 text-sm">→</span>
                          <span className="text-white/65 text-sm font-sans leading-relaxed">{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU LEAVE WITH */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <p className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-sans mb-4">Outcomes</p>
            <h2 className="font-serif text-[#111111] text-[clamp(2rem,5vw,3.5rem)] leading-tight mb-4">What you leave with.</h2>
            <p className="text-[#888] text-base font-sans mb-16">Outcomes, not handouts.</p>
          </FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              'Clarity on what AI can actually do for your business, no hype, no jargon',
              'A framework to evaluate AI decisions with confidence, one that outlasts any specific tool',
              'The confidence to lead any board conversation about AI',
              'A personal AI workflow you built yourself and can use from the following morning',
              'Alignment language you can take back to your leadership team',
              'A safe, close-knit group of peers, independent from your company, free from politics, there when you need a sounding board',
            ].map((outcome, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="border-l-2 border-[#D4AF37] p-8 bg-[#F5F5F5]">
                  <p className="font-serif text-[#D4AF37] text-4xl opacity-30 leading-none mb-4">{String(i + 1).padStart(2, '0')}</p>
                  <p className="text-[#444] text-sm font-sans leading-relaxed">{outcome}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* IS THIS FOR YOU */}
      <section className="bg-[#F5F5F5] py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <h2 className="font-serif text-[#111111] text-[clamp(2rem,5vw,3.5rem)] leading-tight mb-16 text-center">Is this day for you?</h2>
          </FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <FadeIn>
              <p className="text-[#D4AF37] text-[10px] tracking-[0.3em] uppercase font-sans mb-6 pb-4 border-b-2 border-[#D4AF37]">This day is for you if&hellip;</p>
              {[
                'You are a non-technical CXO, CEO, CFO, CMO, CHRO, COO, CISO, who leads the business, not builds the technology',
                'You are a board member, executive or non-executive, steering a company through AI uncertainty',
                'You run a company or organisation with a team, ideally 50+ people',
                'You do not have an AI strategy, or you have one but want to confidently navigate it yourself',
                'You are done with just reading, listening, and talking about AI, you want to take the reins yourself',
                'You want to learn by doing, not by sitting in another audience',
              ].map((item, i) => (
                <div key={i} className="py-4 border-b border-black/8 flex gap-4">
                  <span className="text-[#D4AF37] font-semibold shrink-0">+</span>
                  <p className="text-[#444] text-sm font-sans leading-relaxed">{item}</p>
                </div>
              ))}
            </FadeIn>
            <FadeIn delay={150}>
              <p className="text-[#888] text-[10px] tracking-[0.3em] uppercase font-sans mb-6 pb-4 border-b border-black/12">This day is not for you if&hellip;</p>
              {[
                'You have a developer, engineering, or technical background and want a deep-dive into machine learning',
                'You prefer being talked at, panels, keynotes, slide decks',
                'You want theory without practice',
              ].map((item, i) => (
                <div key={i} className="py-4 border-b border-black/8 flex gap-4">
                  <span className="text-[#888] shrink-0">—</span>
                  <p className="text-[#444] text-sm font-sans leading-relaxed">{item}</p>
                </div>
              ))}
            </FadeIn>
          </div>
        </div>
      </section>

      {/* EVERYTHING INCLUDED */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <p className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-sans mb-4">Included</p>
            <h2 className="font-serif text-[#111111] text-[clamp(2rem,5vw,3.5rem)] leading-tight mb-16">Everything included.</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { title: 'All Materials', desc: 'Every framework, template, and resource from the day, sent to you afterwards' },
              { title: 'Full Catering', desc: 'Breakfast, lunch, and refreshments throughout the day' },
              { title: 'Peer Community', desc: 'A private group of leaders at your level, independent, neutral, no company politics' },
              { title: 'Certificate', desc: 'Personalised Certificate of Mastery with your name' },
              { title: 'Follow-Up Resources', desc: 'Continued access to frameworks and tools as AI evolves' },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 70}>
                <div className="border border-black/8 p-7 text-center h-full">
                  <p className="font-serif text-[#111111] text-base mb-3">{item.title}</p>
                  <p className="text-[#888] text-xs font-sans leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITATORS */}
      <section className="bg-[#111111] py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <p className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-sans mb-4">Your Facilitators</p>
            <h2 className="font-serif text-white text-[clamp(2rem,5vw,3.5rem)] leading-tight mb-16">In the room with you.</h2>
          </FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                photo: 'https://aiday.solvedtogether.co.uk/Chris%20Bradshaw%20Headshot.jpg',
                name: 'Chris Bradshaw',
                org: 'Collective Intelligence',
                desc: '22 years in technology and digital strategy. Enterprise AI Partner at Board of Innovation, founder of Collective Intelligence. Chris has worked with senior leaders at organisations including KPMG, BMW and Selfridges on AI adoption and decision-making strategy. He specialises in building personal AI workflows for CXOs and board members, and has a rare ability to make the complex feel immediately usable.',
              },
              {
                photo: 'https://aiday.solvedtogether.co.uk/Rujuta%20Singh.jpg',
                name: 'Rujuta Singh',
                org: 'Solved Together',
                desc: 'Over two decades leading large-scale enterprise transformation in Fortune 500 companies across insurance, banking, PE, public sector, education, real estate, and more. Ex-PwC, ex-Accenture, ex-Microsoft. Founder of Solved Together, combining neuroscience-based collaboration with deep transformation expertise to help leaders use AI as the lever to grow and transform, not just experiment.',
              },
            ].map((fac, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="border border-white/8 p-8 lg:p-10 flex flex-col sm:flex-row gap-8">
                  <div className="shrink-0">
                    <div className="w-24 h-24 rounded-full overflow-hidden border border-white/10">
                      <Image
                        src={fac.photo}
                        alt={fac.name}
                        width={96}
                        height={96}
                        className="object-cover object-top w-full h-full"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="font-serif text-white text-xl mb-1">{fac.name}</p>
                    <p className="text-[#D4AF37] text-[10px] tracking-[0.25em] uppercase font-sans mb-4">{fac.org}</p>
                    <p className="text-white/60 text-sm font-sans leading-relaxed">{fac.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <p className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-sans mb-4">From Past Workshops</p>
            <h2 className="font-serif text-[#111111] text-[clamp(2rem,5vw,3.5rem)] leading-tight mb-4">Real rooms. Real people.</h2>
            <p className="text-[#888] text-base font-sans mb-16">Real outcomes.</p>
          </FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="border border-black/8 p-8">
                  <span className="font-serif text-[#D4AF37] text-3xl opacity-30 block mb-4">&ldquo;</span>
                  <p className="text-[#444] text-sm font-sans leading-relaxed italic mb-6">{t.q}</p>
                  <p className="font-serif text-[#111111] text-base">{t.name}</p>
                  <p className="text-[#888] text-[10px] tracking-[0.15em] uppercase font-sans mt-1">{t.role}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING, SOLD OUT */}
      <section className="bg-[#F5F5F5] py-24 lg:py-32 text-center">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <p className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-sans mb-4">Pricing</p>
            <h2 className="font-serif text-[#111111] text-[clamp(2rem,5vw,3.5rem)] leading-tight mb-4">This cohort is now closed.</h2>
            <p className="text-[#888] text-base font-sans mb-16 max-w-xl mx-auto">All places are taken. Join the waitlist and we&apos;ll let you know about cancellations or future events.</p>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/8 mb-12 opacity-40 pointer-events-none max-w-3xl mx-auto">
              {[
                { tier: 'Early Bird', price: '£899', note: 'Until 19th June 2026' },
                { tier: 'Standard', price: '£1,099', note: 'After early bird expires' },
                { tier: 'On the Door', price: '£1,299', note: 'If spaces still available' },
              ].map((p, i) => (
                <div key={i} className="bg-white p-10 text-center">
                  <p className="text-[#888] text-[10px] tracking-[0.25em] uppercase font-sans mb-3">{p.tier}</p>
                  <p className="font-serif text-[#111111] text-5xl mb-1">{p.price}</p>
                  <p className="text-[#888] text-[10px] tracking-[0.15em] uppercase font-sans mb-4">+ VAT</p>
                  <p className="text-[#888] text-xs font-sans italic mb-8">{p.note}</p>
                  <div className="w-full bg-black/5 text-[#888] py-3 text-[10px] tracking-[0.2em] uppercase font-sans">Sold Out</div>
                </div>
              ))}
            </div>
            <button
              onClick={() => setModalOpen(true)}
              className="border border-[#D4AF37] text-[#D4AF37] px-10 py-4 text-[10px] tracking-[0.25em] uppercase hover:bg-[#D4AF37] hover:text-[#111111] transition-all duration-500 font-sans"
            >
              Join the Waitlist
            </button>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <p className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-sans mb-4">FAQ</p>
            <h2 className="font-serif text-[#111111] text-[clamp(2rem,5vw,3.5rem)] leading-tight mb-16">Frequently asked questions.</h2>
          </FadeIn>
          <div>
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-black/8">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left py-6 flex justify-between items-center gap-4"
                >
                  <span className="font-serif text-[#111111] text-lg leading-tight">{faq.q}</span>
                  <span className="text-[#D4AF37] text-2xl font-light shrink-0">{openFaq === i ? '–' : '+'}</span>
                </button>
                {openFaq === i && (
                  <div className="pb-6 text-[#444] text-sm font-sans leading-relaxed">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="bg-[#111111] py-32 text-center">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="w-12 h-px bg-[#D4AF37] mx-auto mb-12" />
            <h2 className="font-serif text-white text-[clamp(2rem,5vw,3.5rem)] leading-[1.2] italic mb-6">
              You do not have to figure this out alone.
            </h2>
            <p className="text-white/60 text-base font-sans leading-relaxed max-w-xl mx-auto mb-12">
              There is a room where the question &ldquo;what do I actually do about AI?&rdquo; is not only allowed, it is the point.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="border border-[#D4AF37] text-[#D4AF37] px-12 py-4 text-[10px] tracking-[0.25em] uppercase hover:bg-[#D4AF37] hover:text-[#111111] transition-all duration-500 font-sans"
            >
              Join the Waitlist
            </button>
            <p className="text-white/25 text-[10px] tracking-[0.25em] uppercase font-sans mt-6">Chatham House Rules Apply</p>
            <div className="w-12 h-px bg-[#D4AF37] mx-auto mt-12" />
          </FadeIn>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0a0a0a] py-14 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
            <span className="font-serif text-white/60 text-sm">AI Confidence Day</span>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <span className="text-white/20 text-[9px] tracking-[0.25em] uppercase font-sans">A programme by</span>
              <div className="flex items-center gap-5">
                <a href="https://collectiveintelligence.co" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white/90 text-xs font-sans tracking-wide transition-colors duration-300">Collective Intelligence</a>
                <span className="text-white/15 text-xs">·</span>
                <a href="https://solvedtogether.co.uk" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white/90 text-xs font-sans tracking-wide transition-colors duration-300">Solved Together</a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8">
            <p className="text-white/45 text-xs font-sans text-center">© 2026 AI Confidence · Training. Leadership. Transformation.</p>
          </div>
        </div>
      </footer>

      <LeadCaptureModal variant="waitlist" isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
