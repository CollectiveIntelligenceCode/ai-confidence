'use client';
import Link from 'next/link';
import { useState } from 'react';
import Logo from '@/components/Logo';

const links = [
  { label: 'Digital Cohort', href: '/cohort' },
  { label: 'For Leaders', href: '/leaders' },
  { label: 'For Organisations', href: '/organisations' },
  { label: 'AI Confidence Day', href: '/ai-confidence-day' },
  { label: 'How We Work', href: '/how-it-works' },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/96 backdrop-blur-sm border-b border-black/5">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 relative">

          <Link href="/">
            <Logo size="sm" theme="light" className="py-1" />
          </Link>

          <div className="hidden lg:flex items-center gap-7 absolute left-1/2 -translate-x-1/2">
            {links.map(l => (
              <Link key={l.label} href={l.href} className="text-[10px] tracking-[0.18em] uppercase text-[#888] hover:text-[#111] transition-colors duration-300 font-sans whitespace-nowrap">
                {l.label}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex items-center">
            <Link href="/find-your-path" className="text-[10px] tracking-[0.18em] uppercase border border-[#D4AF37] text-[#D4AF37] px-5 py-2.5 hover:bg-[#D4AF37] hover:text-white transition-all duration-300 font-sans whitespace-nowrap">
              Find Your Path
            </Link>
          </div>

          <button
            className="lg:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-px bg-[#111] transition-all duration-300 origin-center ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-5 h-px bg-[#111] transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-px bg-[#111] transition-all duration-300 origin-center ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </div>

      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-96' : 'max-h-0'}`}>
        <div className="bg-white border-t border-black/5 px-6 py-6 space-y-5">
          {links.map(l => (
            <Link key={l.label} href={l.href} className="block text-[10px] tracking-[0.2em] uppercase text-[#888] font-sans" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link href="/find-your-path" className="block text-center text-[10px] tracking-[0.2em] uppercase border border-[#D4AF37] text-[#D4AF37] px-5 py-3 font-sans" onClick={() => setOpen(false)}>
            Find Your Path
          </Link>
        </div>
      </div>
    </nav>
  );
}
