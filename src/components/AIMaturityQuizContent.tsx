'use client';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/home/Footer';
import FadeIn from '@/components/FadeIn';
import { LeadCaptureModal } from '@/components/LeadCaptureModal';

const questions = [
  {
    id: 1,
    question: 'How would you describe your organisation\'s current approach to AI?',
    options: [
      { label: 'We have no formal AI strategy — it hasn\'t been prioritised yet', score: 1 },
      { label: 'We are experimenting with a few tools but nothing coordinated', score: 2 },
      { label: 'We have a defined direction with some early implementation', score: 3 },
      { label: 'AI is actively embedded across multiple parts of the business', score: 4 },
    ],
  },
  {
    id: 2,
    question: 'How confident is your leadership team when making decisions about AI?',
    options: [
      { label: 'Not confident — we don\'t know where to start', score: 1 },
      { label: 'Somewhat confident — we understand the basics but lack clarity', score: 2 },
      { label: 'Fairly confident — we have a direction and are starting to act', score: 3 },
      { label: 'Very confident — we are actively leading on this', score: 4 },
    ],
  },
  {
    id: 3,
    question: 'Does your organisation have any governance or policy around AI use?',
    options: [
      { label: 'No — nothing is in place', score: 1 },
      { label: 'We are in early discussions but nothing formal yet', score: 2 },
      { label: 'We have some informal guidelines in certain teams', score: 3 },
      { label: 'Yes — a formal policy and governance framework exists', score: 4 },
    ],
  },
  {
    id: 4,
    question: 'How are your people currently using AI day to day?',
    options: [
      { label: 'They are not — it has not been addressed', score: 1 },
      { label: 'Individual experimentation without structure or oversight', score: 2 },
      { label: 'Some teams are using approved tools in a structured way', score: 3 },
      { label: 'AI is systematically adopted with clear accountability', score: 4 },
    ],
  },
  {
    id: 5,
    question: 'How much board or senior leadership attention is AI getting right now?',
    options: [
      { label: 'It is not on the agenda yet', score: 1 },
      { label: 'It comes up occasionally but without clear ownership', score: 2 },
      { label: 'It is a regular discussion with growing urgency', score: 3 },
      { label: 'It is a defined strategic priority with executive sponsorship', score: 4 },
    ],
  },
  {
    id: 6,
    question: 'What is your biggest concern about AI in your organisation right now?',
    options: [
      { label: 'We do not know where to begin or what to prioritise', score: 1 },
      { label: 'Teams adopting AI without oversight or guardrails', score: 2 },
      { label: 'Security, compliance, or data risk', score: 3 },
      { label: 'Falling behind competitors or not realising enough value', score: 4 },
    ],
  },
];

type Band = {
  label: string;
  range: string;
  description: string;
  next: string;
  cta: string;
};

const bands: Band[] = [
  {
    label: 'AI Unaware',
    range: '6–10',
    description:
      'You are at the beginning of the AI journey. That is more common than you think — and the good news is that clarity comes quickly with the right guidance. The first step is naming the challenge, not choosing a tool.',
    next: 'An Executive AI Briefing is the right place to start. It is a 90-minute working session that gives you a clear picture of where AI can make the most difference in your organisation — complimentary for qualified organisations.',
    cta: 'Request an Executive AI Briefing',
  },
  {
    label: 'AI Aware',
    range: '11–15',
    description:
      'You understand the opportunity but the gap is structure and confidence. You have the awareness — what you need now is a clear framework, leadership alignment, and a plan that your organisation can actually execute.',
    next: 'An AI Confidence Day for your leadership team would give everyone the shared language, clarity, and confidence to move forward together. We can also start with an Executive AI Briefing if you need to build the business case first.',
    cta: 'Explore AI Confidence Day',
  },
  {
    label: 'AI Active',
    range: '16–20',
    description:
      'You are making real progress. AI is on the agenda and people are engaged. The next challenge is alignment — making sure adoption is consistent, governed, and accelerating in the right direction across the whole organisation.',
    next: 'A 90-Day Accelerator would help you move from pockets of progress to organisation-wide momentum. We design bespoke programmes for organisations at exactly this stage.',
    cta: 'Talk to us about the 90-Day Accelerator',
  },
  {
    label: 'AI Confident',
    range: '21–24',
    description:
      'You are ahead of most organisations. AI is embedded, governed, and treated as a strategic priority. The focus now is staying ahead — scaling what is working, closing remaining gaps, and building the long-term capability to lead as the landscape evolves.',
    next: 'An ongoing Advisory Partnership with AI Confidence would give you a trusted external perspective as you scale. We work with a small number of organisations at this stage as a strategic partner, not a supplier.',
    cta: 'Enquire about Advisory Partnership',
  },
];

function getBand(score: number): Band {
  if (score <= 10) return bands[0];
  if (score <= 15) return bands[1];
  if (score <= 20) return bands[2];
  return bands[3];
}

export default function AIMaturityQuizContent() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [modal, setModal] = useState(false);

  const totalScore = answers.reduce((a, b) => a + b, 0);
  const band = getBand(totalScore);
  const progress = Math.round((current / questions.length) * 100);

  function handleSelect(score: number) {
    setSelected(score);
  }

  function handleNext() {
    if (selected === null) return;
    const newAnswers = [...answers, selected];
    setAnswers(newAnswers);
    setSelected(null);
    if (current + 1 >= questions.length) {
      setShowResult(true);
    } else {
      setCurrent(current + 1);
    }
  }

  function handleRestart() {
    setCurrent(0);
    setAnswers([]);
    setSelected(null);
    setShowResult(false);
  }

  if (showResult) {
    return (
      <>
        <Navigation />
        <section className="bg-[#111111] pt-32 pb-24 lg:pt-40 lg:pb-32">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <FadeIn>
              <p className="text-[#D4AF37] text-[10px] tracking-[0.4em] uppercase font-sans mb-6">
                Your AI Maturity Score
              </p>
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full border border-[#D4AF37]/40 mb-8">
                <span className="font-serif text-[#D4AF37] text-3xl">{totalScore}</span>
              </div>
              <h1 className="font-serif text-white text-[clamp(2.2rem,5vw,3.8rem)] leading-tight mb-4">
                {band.label}
              </h1>
              <p className="text-white/40 text-[11px] font-sans tracking-[0.2em] uppercase mb-8">
                Score {totalScore} of 24
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-3xl mx-auto px-6 lg:px-12">
            <FadeIn>
              <p className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-sans mb-4">
                What this means
              </p>
              <p className="text-[#333333] text-lg font-sans leading-relaxed mb-12">
                {band.description}
              </p>

              <div className="border-l-2 border-[#D4AF37] pl-8 mb-14">
                <p className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-sans mb-3">
                  Recommended next step
                </p>
                <p className="text-[#444444] text-base font-sans leading-relaxed">
                  {band.next}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setModal(true)}
                  className="bg-[#D4AF37] text-[#111111] px-10 py-4 text-[11px] tracking-[0.3em] uppercase font-sans hover:bg-[#111111] hover:text-white transition-all duration-300"
                >
                  {band.cta}
                </button>
                <button
                  onClick={handleRestart}
                  className="border border-black/20 text-[#888888] px-10 py-4 text-[11px] tracking-[0.3em] uppercase font-sans hover:border-black/40 hover:text-[#444444] transition-all duration-300"
                >
                  Retake the quiz
                </button>
              </div>
            </FadeIn>
          </div>
        </section>

        <Footer />

        {modal && (
          <LeadCaptureModal
            variant="leaders"
            isOpen={true}
            onClose={() => setModal(false)}
          />
        )}
      </>
    );
  }

  const q = questions[current];

  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="bg-[#111111] pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <p className="text-[#D4AF37] text-[10px] tracking-[0.4em] uppercase font-sans mb-6">
              AI Maturity Assessment
            </p>
            <h1 className="font-serif text-white text-[clamp(2.2rem,5vw,3.8rem)] leading-tight mb-4">
              Where does your organisation<br />
              <span className="italic text-white/50">stand with AI?</span>
            </h1>
            <p className="text-white/55 text-base font-sans leading-relaxed max-w-xl mx-auto">
              Six straightforward questions. No technical knowledge required. You will receive an honest assessment and a recommended next step in under three minutes.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Progress bar */}
      <div className="bg-[#1a1a1a] h-1">
        <div
          className="h-1 bg-[#D4AF37] transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Question */}
      <section className="bg-white py-20 lg:py-28 min-h-[60vh]">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <FadeIn key={current}>
            <div className="mb-3 flex items-center gap-3">
              <span className="text-[#D4AF37] font-serif text-sm">
                {String(current + 1).padStart(2, '0')}
              </span>
              <span className="text-black/15 text-sm font-sans">
                / {String(questions.length).padStart(2, '0')}
              </span>
            </div>

            <h2 className="font-serif text-[#111111] text-[clamp(1.5rem,3vw,2.2rem)] leading-snug mb-10">
              {q.question}
            </h2>

            <div className="space-y-3 mb-10">
              {q.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleSelect(opt.score)}
                  className={`w-full text-left px-7 py-5 border transition-all duration-200 font-sans text-base leading-snug ${
                    selected === opt.score
                      ? 'border-[#D4AF37] bg-[#D4AF37]/6 text-[#111111]'
                      : 'border-black/10 text-[#555555] hover:border-[#D4AF37]/50 hover:text-[#111111]'
                  }`}
                >
                  <span className={`text-[10px] tracking-widest uppercase mr-4 font-sans ${selected === opt.score ? 'text-[#D4AF37]' : 'text-black/25'}`}>
                    {String.fromCharCode(65 + i)}
                  </span>
                  {opt.label}
                </button>
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={selected === null}
              className={`px-12 py-4 text-[11px] tracking-[0.3em] uppercase font-sans transition-all duration-300 ${
                selected !== null
                  ? 'bg-[#111111] text-white hover:bg-[#D4AF37] hover:text-[#111111]'
                  : 'bg-black/8 text-black/25 cursor-not-allowed'
              }`}
            >
              {current + 1 === questions.length ? 'See my results' : 'Next question'}
            </button>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
