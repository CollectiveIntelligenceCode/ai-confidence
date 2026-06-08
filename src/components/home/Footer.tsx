export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] py-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="font-serif text-white/40 text-sm">AI Confidence</span>
          <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
          <span className="text-white/20 text-xs font-sans">Collective Intelligence</span>
        </div>
        <p className="text-white/15 text-xs font-sans text-center">
          © 2026 AI Confidence · Built to last.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-white/25 hover:text-white/50 text-xs font-sans tracking-wide transition-colors duration-300">
            Privacy
          </a>
          <a href="#" className="text-white/25 hover:text-white/50 text-xs font-sans tracking-wide transition-colors duration-300">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
