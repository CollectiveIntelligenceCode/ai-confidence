'use client';
import { useEffect, useRef, useState } from 'react';

type ModalVariant = 'cohort' | 'leaders' | 'organisations' | 'waitlist' | 'private' | 'cohort_waitlist' | 'leaders_waitlist' | 'organisations_waitlist';

const config: Record<ModalVariant, { title: string; subtitle: string }> = {
  cohort: {
    title: 'Apply to Join',
    subtitle: 'Applications are reviewed to ensure the cohort remains focused, practical and high-value.',
  },
  leaders: {
    title: 'Attend AI Confidence Day',
    subtitle: 'A practical leadership experience designed to help senior leaders move from AI uncertainty to action.',
  },
  organisations: {
    title: 'Book a Discovery Call',
    subtitle: 'Tell us about your organisation and we\'ll recommend the most suitable AI Confidence pathway.',
  },
  waitlist: {
    title: 'Join the Waitlist',
    subtitle: 'Be first to know when the next AI Confidence Day is announced, before we open publicly.',
  },
  private: {
    title: 'Request a Private Day',
    subtitle: 'Bring AI Confidence to your organisation. We\'ll design a programme around your team\'s needs.',
  },
  cohort_waitlist: {
    title: 'Join the Waitlist — Digital Cohort',
    subtitle: 'Be first to know when the next cohort opens. We\'ll reach out before we open publicly.',
  },
  leaders_waitlist: {
    title: 'Join the Waitlist — For Leaders',
    subtitle: 'Be first to know when the next AI Confidence Day for Leaders is announced.',
  },
  organisations_waitlist: {
    title: 'Join the Waitlist — For Organisations',
    subtitle: 'Register your interest and we\'ll be in touch as soon as the next intake opens.',
  },
};

type Props = {
  variant: ModalVariant;
  isOpen: boolean;
  onClose: () => void;
};

export function LeadCaptureModal({ variant, isOpen, onClose }: Props) {
  const { title, subtitle } = config[variant];
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Reset state when reopened
  useEffect(() => {
    if (isOpen) { setSubmitted(false); setError(null); setLoading(false); }
  }, [isOpen]);

  if (!isOpen) return null;

  function handleOverlayClick(e: React.MouseEvent) {
    if (e.target === overlayRef.current) onClose();
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const form = e.currentTarget as HTMLFormElement;
    const data = Object.fromEntries(new FormData(form));
    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, variant }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? 'Something went wrong.');
      setSubmitted(true);
    } catch (err: unknown) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-[200] flex items-center justify-center p-6"
      style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(4px)' }}
    >
      <div
        className="bg-white w-full max-w-lg relative"
        style={{ boxShadow: '0 24px 80px rgba(0,0,0,0.25)' }}
      >
        {/* Gold top rule */}
        <div className="h-px w-full bg-[#D4AF37]" />

        {/* Header */}
        <div className="px-10 pt-10 pb-8 border-b border-black/8">
          <p className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-sans mb-3">
            AI Confidence
          </p>
          <h2 className="font-serif text-2xl lg:text-3xl text-[#111111] leading-tight mb-3">
            {title}
          </h2>
          <p className="text-[#888888] text-sm font-sans leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-8 text-[#888] hover:text-[#111] transition-colors duration-200 font-sans text-xl leading-none"
          aria-label="Close"
        >
          ×
        </button>

        {/* Form or Thank You */}
        {submitted ? (
          <div className="px-10 py-16 text-center">
            <div className="w-12 h-px bg-[#D4AF37] mx-auto mb-8" />
            <h3 className="font-serif text-2xl text-[#111111] mb-4">Thank you.</h3>
            <p className="text-[#888888] text-sm font-sans leading-relaxed max-w-xs mx-auto">
              We&apos;ll be in touch shortly with the next steps.
            </p>
            <div className="w-12 h-px bg-[#D4AF37] mx-auto mt-8" />
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-10 py-8 space-y-5">
            {[
              { id: 'name', label: 'Name', type: 'text', placeholder: 'Your full name' },
              { id: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
              { id: 'role', label: 'Job Title', type: 'text', placeholder: 'e.g. CEO, Head of HR, Director' },
              { id: 'organisation', label: 'Company Name', type: 'text', placeholder: 'Your organisation' },
            ].map(field => (
              <div key={field.id}>
                <label
                  htmlFor={field.id}
                  className="block text-[10px] tracking-[0.2em] uppercase font-sans text-[#888888] mb-2"
                >
                  {field.label}
                </label>
                <input
                  id={field.id}
                  name={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  required
                  className="w-full border border-black/12 px-4 py-3 text-sm font-sans text-[#111111] placeholder:text-[#bbb] focus:outline-none focus:border-[#D4AF37] transition-colors duration-200 bg-white"
                />
              </div>
            ))}

            {/* Company size */}
            <div>
              <label
                htmlFor="companySize"
                className="block text-[10px] tracking-[0.2em] uppercase font-sans text-[#888888] mb-2"
              >
                Company Size
              </label>
              <select
                id="companySize"
                name="companySize"
                required
                defaultValue=""
                className="w-full border border-black/12 px-4 py-3 text-sm font-sans text-[#111111] focus:outline-none focus:border-[#D4AF37] transition-colors duration-200 bg-white appearance-none"
              >
                <option value="" disabled>Select…</option>
                <option value="1-10">1–10 employees</option>
                <option value="11-50">11–50 employees</option>
                <option value="51-250">51–250 employees</option>
                <option value="251-1000">251–1,000 employees</option>
                <option value="1000+">1,000+ employees</option>
              </select>
            </div>

            {error && (
              <p className="text-red-600 text-xs font-sans text-center">{error}</p>
            )}

            <div className="pt-3">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#111111] text-white text-[10px] tracking-[0.25em] uppercase font-sans py-4 hover:bg-[#D4AF37] hover:text-[#111111] transition-all duration-400 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending…' : 'Start My AI Confidence Journey'}
              </button>
            </div>

            <p className="text-[#aaaaaa] text-[10px] font-sans text-center leading-relaxed pt-1">
              We will never share your details. You can unsubscribe at any time.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
