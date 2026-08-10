'use client';
import { useState } from 'react';
import Link from 'next/link';

type Answer = { label: string; scores: Record<string, number> };
type Question = { q: string; answers: Answer[] };

const questions: Question[] = [
  {
    q: 'What best describes your role?',
    answers: [
      { label: 'I am an individual, leader, founder or professional', scores: { cohort: 2, leaders: 1, organisations: 0 } },
      { label: 'I lead a team or sit on a leadership / board team', scores: { cohort: 0, leaders: 2, organisations: 1 } },
      { label: 'I am responsible for teams, workforce or organisation-wide change', scores: { cohort: 0, leaders: 1, organisations: 2 } },
    ],
  },
  {
    q: 'What is your primary goal right now?',
    answers: [
      { label: 'Build my own AI skills and confidence', scores: { cohort: 2, leaders: 0, organisations: 0 } },
      { label: 'Develop a clear AI strategy and lead my organisation through it', scores: { cohort: 0, leaders: 2, organisations: 1 } },
      { label: 'Upskill my team and build an AI-ready organisation', scores: { cohort: 0, leaders: 0, organisations: 2 } },
    ],
  },
  {
    q: 'How are you thinking about AI right now?',
    answers: [
      { label: 'I want to understand it properly and use it in my day-to-day work', scores: { cohort: 2, leaders: 0, organisations: 0 } },
      { label: 'I need to be able to lead on AI, strategy, governance, decisions', scores: { cohort: 0, leaders: 2, organisations: 0 } },
      { label: 'I need a structured programme to roll out AI capability across my organisation', scores: { cohort: 0, leaders: 1, organisations: 2 } },
    ],
  },
];

const results: Record<string, { n: string; title: string; summary: string; href: string; cta: string }> = {
  cohort: {
    n: '01',
    title: 'AI Confidence Digital Cohort',
    summary: 'The right place to start. Build practical AI skills, habits and workflows that you can put to work immediately, as a leader, founder or professional.',
    href: '/cohort',
    cta: 'Explore the Digital Cohort',
  },
  leaders: {
    n: '02',
    title: 'AI Confidence for Leaders',
    summary: 'You need clarity, strategy and the confidence to lead. This programme equips CxOs, board members and senior leaders to drive AI transformation from the top.',
    href: '/leaders',
    cta: 'Explore the Leadership Programme',
  },
  organisations: {
    n: '03',
    title: 'AI Confidence for Organisations',
    summary: 'You\'re thinking at scale. Build an AI-native operating model and guide confident, organisation-wide AI adoption, from strategy to workforce capability.',
    href: '/organisations',
    cta: 'Explore the Organisations Programme',
  },
};

export default function PathQuiz() {
  const [step, setStep] = useState<number>(0); // 0 = not started
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [result, setResult] = useState<string | null>(null);

  function handleAnswer(answer: Answer) {
    const next = [...answers, answer];
    if (next.length < questions.length) {
      setAnswers(next);
      setStep(next.length + 1);
    } else {
      // Score
      const totals: Record<string, number> = { cohort: 0, leaders: 0, organisations: 0 };
      next.forEach(a => {
        Object.entries(a.scores).forEach(([k, v]) => { totals[k] += v; });
      });
      const winner = Object.entries(totals).sort((a, b) => b[1] - a[1])[0][0];
      setAnswers(next);
      setResult(winner);
      setStep(questions.length + 1);
    }
  }

  function reset() {
    setStep(0);
    setAnswers([]);
    setResult(null);
  }

  const currentQuestion = step >= 1 && step <= questions.length ? questions[step - 1] : null;
  const res = result ? results[result] : null;

  return (
    <section id="quiz" className="bg-[#F5F5F5] py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <p className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-sans mb-4">Find Your Path</p>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,3.5rem)] text-[#111111] leading-tight mb-3 max-w-xl">
            Not sure where to start?
          </h2>
          <p className="text-[#666666] font-sans text-sm max-w-md leading-relaxed">
            Three questions. We&apos;ll tell you which AI Confidence programme is right for you.
          </p>
          <div className="w-8 h-px bg-[#D4AF37] mt-6" />
        </div>

        {/* Not started */}
        {step === 0 && (
          <div className="max-w-2xl">
            <div className="bg-white border border-black/8 p-10">
              <div className="flex gap-2 mb-8">
                {questions.map((_, i) => (
                  <div key={i} className="h-0.5 flex-1 bg-black/10 rounded-full" />
                ))}
              </div>
              <p className="font-serif text-[#111111] text-xl mb-2">
                One journey. Three entry points.
              </p>
              <p className="text-[#888888] text-sm font-sans leading-relaxed mb-8">
                Whether you&apos;re an individual building AI fluency, a leader navigating strategy, or an organisation ready to scale, there&apos;s a programme built for you.
              </p>
              <button
                onClick={() => setStep(1)}
                className="border border-[#111111] text-[#111111] px-8 py-4 text-[10px] tracking-[0.25em] uppercase hover:bg-[#111111] hover:text-white transition-all duration-500 font-sans"
              >
                Start the Quiz →
              </button>
            </div>
          </div>
        )}

        {/* Questions */}
        {currentQuestion && (
          <div className="max-w-2xl">
            <div className="bg-white border border-black/8 p-10">
              {/* Progress */}
              <div className="flex gap-2 mb-8">
                {questions.map((_, i) => (
                  <div key={i} className={`h-0.5 flex-1 rounded-full transition-colors duration-300 ${i < step ? 'bg-[#D4AF37]' : 'bg-black/10'}`} />
                ))}
              </div>
              <p className="text-[#D4AF37] text-[10px] tracking-[0.3em] uppercase font-sans mb-4">
                Question {step} of {questions.length}
              </p>
              <h3 className="font-serif text-[#111111] text-xl lg:text-2xl leading-tight mb-8">
                {currentQuestion.q}
              </h3>
              <div className="space-y-3">
                {currentQuestion.answers.map((answer, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(answer)}
                    className="w-full text-left border border-black/10 hover:border-[#D4AF37] p-5 text-sm font-sans text-[#444444] hover:text-[#111111] leading-relaxed transition-all duration-300 group"
                  >
                    <span className="text-[#D4AF37] text-[10px] tracking-[0.2em] font-sans mr-3 opacity-60 group-hover:opacity-100">
                      {String.fromCharCode(65 + i)}
                    </span>
                    {answer.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Result */}
        {res && (
          <div className="max-w-2xl">
            <div className="bg-white border border-black/8">
              {/* Gold top rule */}
              <div className="h-px w-full bg-[#D4AF37]" />
              <div className="p-10">
                <p className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-sans mb-2">Your Path</p>
                <p className="text-[#D4AF37] text-[10px] tracking-[0.3em] font-sans mb-6 opacity-60">{res.n}</p>
                <h3 className="font-serif text-[#111111] text-2xl lg:text-3xl leading-tight mb-5">
                  {res.title}
                </h3>
                <div className="w-6 h-px bg-[#D4AF37] mb-5" />
                <p className="text-[#555555] text-sm font-sans leading-relaxed mb-8">
                  {res.summary}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href={res.href}
                    className="block text-center border border-[#111111] text-[#111111] px-8 py-4 text-[10px] tracking-[0.25em] uppercase hover:bg-[#111111] hover:text-white transition-all duration-500 font-sans"
                  >
                    {res.cta}
                  </Link>
                  <button
                    onClick={reset}
                    className="text-[#888888] hover:text-[#111111] text-[10px] tracking-[0.2em] uppercase font-sans px-4 py-4 transition-colors duration-300"
                  >
                    Start Again
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
