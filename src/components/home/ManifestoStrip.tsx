'use client';
import { useState, useEffect } from 'react';

const statements = [
  { pre: 'Human-led,', em: 'AI-powered.' },
  { pre: 'Human wisdom,', em: 'AI momentum.' },
  { pre: 'Human hearts,', em: 'AI smarts.' },
];

export default function ManifestoStrip() {
  const [index, setIndex] = useState(() => Math.floor(Math.random() * 3));
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex(i => (i + 1) % 3);
        setVisible(true);
      }, 500);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#D4AF37] py-16 lg:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">

        <p className="text-[#111111]/50 text-[10px] tracking-[0.35em] uppercase font-sans mb-10 lg:mb-14 text-center">
          Our Philosophy
        </p>

        <div className="text-center min-h-[5rem] lg:min-h-[6rem] flex items-center justify-center">
          <p
            className="font-serif text-[clamp(2rem,5.5vw,4.5rem)] text-[#111111] leading-tight transition-opacity duration-500"
            style={{ opacity: visible ? 1 : 0 }}
          >
            {statements[index].pre}{' '}
            <span className="italic text-[#111111]/50">{statements[index].em}</span>
          </p>
        </div>

        <div className="mt-12 lg:mt-16 pt-10 border-t border-[#111111]/15 text-center">
          <p className="font-serif text-[clamp(1.4rem,3vw,2.2rem)] text-[#111111] leading-snug">
            Turn your organisation into an AI-powered innovation machine, without losing what makes you human.
          </p>
        </div>

      </div>
    </section>
  );
}
