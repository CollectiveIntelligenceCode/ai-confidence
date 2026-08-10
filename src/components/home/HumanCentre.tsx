'use client';
import { useState } from 'react';
import FadeIn from '@/components/FadeIn';

const nodes = [
  {
    label: 'ETHICS',
    abbr: 'E',
    style: { left: '50%', top: '0%' },
    title: 'Ethics',
    desc: 'Ensuring AI decisions are transparent, fair and aligned with your values. We build governance and accountability into every programme from the start — not as an afterthought.',
  },
  {
    label: 'PROCESS',
    abbr: 'Pr',
    style: { left: '0%', top: '50%' },
    title: 'Process',
    desc: 'Redesigning the way your organisation works so AI enhances your workflows rather than disrupting them. Better decisions, faster execution, fewer bottlenecks.',
  },
  {
    label: 'DATA',
    abbr: 'D',
    style: { left: '100%', top: '50%' },
    title: 'Data',
    desc: 'Understanding what data you hold, how it flows and how to use it responsibly. The foundation of any effective AI strategy — before you touch a single tool.',
  },
  {
    label: 'TECHNOLOGY',
    abbr: 'T',
    style: { left: '50%', top: '100%' },
    title: 'Technology',
    desc: 'Selecting and deploying the right AI tools for your context. Not the most advanced — the right ones for your team, your goals and your budget.',
  },
];

type ActiveNode = { label: string; title: string; desc: string };

const humanNode: ActiveNode = {
  label: 'HUMAN',
  title: 'Human',
  desc: 'Every decision, strategy and outcome starts and ends with people. AI amplifies human judgement — it never replaces it. Our programmes keep your people, their values and their capabilities at the centre of everything.',
};

export default function HumanCentre() {
  const [active, setActive] = useState<ActiveNode | null>(null);

  function toggle(node: ActiveNode) {
    setActive(prev => prev?.label === node.label ? null : node);
  }

  return (
    <section className="bg-[#F5F5F5] py-24 lg:py-36 overflow-hidden">
      <style>{`
        @keyframes slow-orbit {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes counter-orbit {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }
        .orbit-ring  { animation: slow-orbit 28s linear infinite; }
        .orbit-label { animation: counter-orbit 28s linear infinite; }
      `}</style>

      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left, animated diagram */}
          <FadeIn direction="none">
            <div className="flex items-center justify-center py-8">
              <div className="relative w-72 h-72 lg:w-96 lg:h-96">

                {/* Static rings */}
                <div className="absolute inset-0 rounded-full border border-[#D4AF37]/25" />
                <div className="absolute inset-[15%] rounded-full border border-[#D4AF37]/12" />

                {/* Centre, Human */}
                <div
                  className="absolute inset-[30%] rounded-full bg-[#D4AF37] flex flex-col items-center justify-center shadow-lg z-10 cursor-pointer transition-all duration-300"
                  style={{
                    boxShadow: active?.label === 'HUMAN'
                      ? '0 0 0 3px #111111, 0 6px 24px rgba(212,175,55,0.5)'
                      : undefined,
                    transform: active?.label === 'HUMAN' ? 'scale(1.08)' : 'scale(1)',
                  }}
                  onClick={() => toggle(humanNode)}
                >
                  <span className="font-sans font-semibold text-[#111111] text-[10px] tracking-[0.2em] uppercase">HUMAN</span>
                  <span className="font-sans text-[#111111]/60 text-[8px] tracking-wide mt-0.5">at the centre</span>
                </div>

                {/* Orbiting nodes */}
                <div
                  className="orbit-ring absolute inset-0"
                  style={{ animationPlayState: active ? 'paused' : 'running' }}
                >
                  {nodes.map((node) => {
                    const isActive = active?.label === node.label;
                    return (
                      <div
                        key={node.label}
                        style={{
                          position: 'absolute',
                          left: node.style.left,
                          top: node.style.top,
                        }}
                      >
                        <div style={{ transform: 'translate(-50%, -50%)' }}>
                          <div
                            className="orbit-label flex flex-col items-center gap-1.5 cursor-pointer"
                            style={{ animationPlayState: active ? 'paused' : 'running' }}
                            onClick={() => toggle(node)}
                          >
                            <div
                              className="w-10 h-10 lg:w-11 lg:h-11 rounded-full flex items-center justify-center shadow-md transition-all duration-300"
                              style={{
                                background: isActive ? '#D4AF37' : '#111111',
                                transform: isActive ? 'scale(1.2)' : 'scale(1)',
                              }}
                            >
                              <span
                                className="font-sans text-[11px] font-medium transition-colors duration-300"
                                style={{ color: isActive ? '#111111' : '#ffffff' }}
                              >
                                {node.abbr}
                              </span>
                            </div>
                            <span
                              className="text-[8px] lg:text-[9px] tracking-[0.2em] font-sans uppercase whitespace-nowrap transition-colors duration-300"
                              style={{ color: isActive ? '#D4AF37' : '#111111' }}
                            >
                              {node.label}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>
            </div>
            {/* Node description panel */}
            <div
              className="mt-6 transition-all duration-300 overflow-hidden"
              style={{ maxHeight: active ? '120px' : '0px', opacity: active ? 1 : 0 }}
            >
              {active && (
                <div className="border border-[#D4AF37]/30 bg-white p-5">
                  <p className="text-[#D4AF37] text-[10px] tracking-[0.3em] uppercase font-sans mb-2">{active.title}</p>
                  <p className="text-[#444444] text-sm font-sans leading-relaxed">{active.desc}</p>
                </div>
              )}
            </div>
          </FadeIn>

          {/* Right, copy */}
          <FadeIn delay={200}>
            <p className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-sans mb-4">
              Our Philosophy
            </p>
            <h2 className="font-serif text-[clamp(2rem,4.5vw,3.5rem)] text-[#111111] leading-tight mb-6 max-w-lg">
              Technology changes.<br />
              <span className="italic text-[#111111]/60">Humans lead.</span>
            </h2>
            <div className="w-8 h-px bg-[#D4AF37] mb-8" />

            <div className="space-y-5 max-w-md">
              <p className="text-[#444444] text-base leading-relaxed font-sans">
                We don&apos;t believe AI should replace human judgement. We believe it should <span className="text-[#111111] font-medium">amplify it</span>, multiplying the impact of your expertise, creativity and decisions so you can achieve more, faster, and with greater confidence.
              </p>
              <p className="text-[#666666] text-sm leading-relaxed font-sans">
                Our programmes help people become <span className="font-medium text-[#444444]">AI-native</span>: capable of understanding, directing and leveraging the technology the right way, so their human judgement is amplified, not replaced.
              </p>
              <p className="text-[#666666] text-sm leading-relaxed font-sans">
                Every programme we build keeps people at the centre. Ethics, process, data and technology are the tools. Your people, and their amplified capabilities, are the constant.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                { label: 'Human-led', detail: 'People drive strategy' },
                { label: 'AI-amplified', detail: 'Technology multiplies impact' },
                { label: 'Ethically grounded', detail: 'Governance built in' },
                { label: 'Outcome focused', detail: 'Results that last' },
              ].map((item) => (
                <div key={item.label} className="border-l-2 border-[#D4AF37]/40 pl-4">
                  <p className="text-[#111111] text-sm font-sans font-medium">{item.label}</p>
                  <p className="text-[#888888] text-xs font-sans mt-0.5">{item.detail}</p>
                </div>
              ))}
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
