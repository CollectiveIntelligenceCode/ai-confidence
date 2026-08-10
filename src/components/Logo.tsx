type Props = {
  size?: 'sm' | 'md' | 'lg';
  theme?: 'dark' | 'light';
  className?: string;
};

export default function Logo({ size = 'md', theme = 'dark', className = '' }: Props) {
  const sizes = {
    sm: { ai: 'text-3xl', conf: 'text-[7px]', pad: 'px-3 py-2' },
    md: { ai: 'text-5xl', conf: 'text-[8px]', pad: 'px-4 py-3' },
    lg: { ai: 'text-7xl', conf: 'text-[10px]', pad: 'px-6 py-5' },
  };
  const s = sizes[size];
  const isDark = theme === 'dark';

  return (
    <div className={`inline-flex flex-col items-center ${isDark ? 'bg-[#111111] border border-white/10' : ''} ${s.pad} ${className}`}>
      <span
        className={`font-serif font-bold leading-none ${isDark ? 'text-white' : 'text-[#111111]'} ${s.ai}`}
        style={{ letterSpacing: '-0.02em' }}
      >
        AI
      </span>
      <span
        className={`font-sans font-normal tracking-[0.45em] uppercase mt-1 ${s.conf} ${isDark ? 'text-white/90' : 'text-[#111111]/80'}`}
      >
        CONFIDENCE
      </span>
    </div>
  );
}
