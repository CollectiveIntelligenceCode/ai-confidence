'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/96 backdrop-blur-sm border-b border-black/5">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">

          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-serif text-[#111111] text-base tracking-tight">AI Confidence</span>
            <span className="w-1 h-1 rounded-full bg-[#D4AF37] group-hover:scale-150 transition-transform duration-300" />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="#framework" className="text-[10px] tracking-[0.2em] uppercase text-[#888] hover:text-[#111] transition-colors duration-300 font-sans">
              Framework
            </Link>
            <Link href="#events" className="text-[10px] tracking-[0.2em] uppercase text-[#888] hover:text-[#111] transition-colors duration-300 font-sans">
              Events
            </Link>
            <Link href="#resources" className="text-[10px] tracking-[0.2em] uppercase text-[#888] hover:text-[#111] transition-colors duration-300 font-sans">
              Resources
            </Link>
            <Link href="#events" className="text-[10px] tracking-[0.2em] uppercase border border-[#D4AF37] text-[#D4AF37] px-5 py-2.5 hover:bg-[#D4AF37] hover:text-white transition-all duration-300 font-sans">
              Reserve Your Place
            </Link>
          </div>

          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-px bg-[#111] transition-all duration-300 origin-center ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-5 h-px bg-[#111] transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-px bg-[#111] transition-all duration-300 origin-center ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-72' : 'max-h-0'}`}>
        <div className="bg-white border-t border-black/5 px-6 py-6 space-y-5">
          <Link href="#framework" className="block text-[10px] tracking-[0.2em] uppercase text-[#888] font-sans" onClick={() => setOpen(false)}>Framework</Link>
          <Link href="#events" className="block text-[10px] tracking-[0.2em] uppercase text-[#888] font-sans" onClick={() => setOpen(false)}>Events</Link>
          <Link href="#resources" className="block text-[10px] tracking-[0.2em] uppercase text-[#888] font-sans" onClick={() => setOpen(false)}>Resources</Link>
          <Link href="#events" className="block text-center text-[10px] tracking-[0.2em] uppercase border border-[#D4AF37] text-[#D4AF37] px-5 py-3 font-sans" onClick={() => setOpen(false)}>
            Reserve Your Place
          </Link>
        </div>
      </div>
    </nav>
  );
}
