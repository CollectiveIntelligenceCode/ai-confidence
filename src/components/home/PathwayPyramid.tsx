'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import FadeIn from '@/components/FadeIn';

// Pyramid: apex (300,10), base corners (0,464)(600,464) — wide & flat so text fits
const levels = [
  {
    n: '01',
    title: 'Digital Cohort',
    sub: '',
    href: '/cohort',
    points: '300,10 208,150 392,150',
    baseFill: '#1e1e1e',
    hoverFill: '#2c2c2c',
    nY: 90,
    titleY: 118,
    subY: 0,
    titleSize: 13,
  },
  {
    n: '02',
    title: 'For Leaders',
    sub: 'CxOs, Board Members & Senior Leaders',
    href: '/leaders',
    points: '208,152 107,302 493,302 392,152',
    baseFill: '#191919',
    hoverFill: '#252525',
    nY: 218,
    titleY: 244,
    subY: 268,
    titleSize: 20,
  },
  {
    n: '03',
    title: 'For Organisations',
    sub: 'Teams & Organisations',
    href: '/organisations',
    points: '107,304 0,464 600,464 493,304',
    baseFill: '#141414',
    hoverFill: '#1f1f1f',
    nY: 360,
    titleY: 390,
    subY: 416,
    titleSize: 22,
  },
];

export default function PathwayPyramid() {
  const [hovered, setHovered] = useState<number | null>(null);
  const router = useRouter();

  return (
    <section className="bg-[#111111] py-24 lg:py-36">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left: heading + copy */}
            <div>
              <p className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-sans mb-4">
                Our Programmes
              </p>
              <h2 className="font-serif text-[clamp(2.2rem,5vw,4rem)] text-white leading-tight mb-6">
                One journey.<br />
                <span className="italic text-white/50">Three entry points.</span>
              </h2>
              <div className="w-8 h-px bg-[#D4AF37] mb-6" />
              <p className="text-white/65 text-sm font-sans leading-relaxed max-w-sm">
                Whether you&apos;re an individual leader, a senior executive, or building capability across your organisation, there is a pathway designed for you.
              </p>
            </div>

            {/* Right: SVG pyramid */}
            <div className="flex justify-center lg:justify-end">
              <svg
                viewBox="0 0 600 474"
                className="w-full"
                aria-label="Programme pathways pyramid"
              >
                {levels.map((level, i) => (
                  <g
                    key={i}
                    style={{ cursor: 'pointer' }}
                    onClick={() => router.push(level.href)}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    aria-label={level.title}
                  >
                    <polygon
                      points={level.points}
                      fill={hovered === i ? level.hoverFill : level.baseFill}
                      stroke="#D4AF37"
                      strokeWidth="1"
                      style={{ transition: 'fill 0.3s ease' }}
                    />

                    <text
                      x="300"
                      y={level.nY}
                      textAnchor="middle"
                      fill={hovered === i ? '#D4AF37' : 'rgba(212,175,55,0.5)'}
                      fontSize="11"
                      fontFamily="Arial, sans-serif"
                      letterSpacing="4"
                      style={{ transition: 'fill 0.3s ease' }}
                    >
                      {level.n}
                    </text>

                    <text
                      x="300"
                      y={level.titleY}
                      textAnchor="middle"
                      fill={hovered === i ? '#ffffff' : 'rgba(255,255,255,0.9)'}
                      fontSize={level.titleSize}
                      fontFamily="Georgia, 'Times New Roman', serif"
                      style={{ transition: 'fill 0.3s ease' }}
                    >
                      {level.title}
                    </text>

                    {level.sub && (
                      <text
                        x="300"
                        y={level.subY}
                        textAnchor="middle"
                        fill={hovered === i ? 'rgba(212,175,55,0.7)' : 'rgba(255,255,255,0.3)'}
                        fontSize="11"
                        fontFamily="Arial, sans-serif"
                        letterSpacing="0.5"
                        style={{ transition: 'fill 0.3s ease' }}
                      >
                        {level.sub}
                      </text>
                    )}

                    {hovered === i && (
                      <text
                        x="300"
                        y={level.sub ? level.subY + 24 : level.titleY + 20}
                        textAnchor="middle"
                        fill="#D4AF37"
                        fontSize="10"
                        fontFamily="Arial, sans-serif"
                        letterSpacing="2"
                      >
                        EXPLORE →
                      </text>
                    )}
                  </g>
                ))}
              </svg>
            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  );
}
