import Link from 'next/link';
import Logo from '@/components/Logo';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] py-14 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">

          {/* Logo */}
          <Link href="/">
            <Logo size="sm" theme="dark" />
          </Link>

          {/* Partners */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <span className="text-white/20 text-[9px] tracking-[0.25em] uppercase font-sans">A programme by</span>
            <div className="flex items-center gap-5">
              <a
                href="https://collectiveintelligence.co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white/90 text-xs font-sans tracking-wide transition-colors duration-300"
              >
                Collective Intelligence
              </a>
              <span className="text-white/15 text-xs">·</span>
              <a
                href="https://solvedtogether.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white/90 text-xs font-sans tracking-wide transition-colors duration-300"
              >
                Solved Together
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-6">
            <a href="#" className="text-white/55 hover:text-white/85 text-xs font-sans tracking-wide transition-colors duration-300">
              Privacy
            </a>
            <a href="#" className="text-white/55 hover:text-white/85 text-xs font-sans tracking-wide transition-colors duration-300">
              Contact
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8">
          <p className="text-white/45 text-xs font-sans text-center">
            © 2026 AI Confidence · Training. Leadership. Transformation.
          </p>
        </div>

      </div>
    </footer>
  );
}
