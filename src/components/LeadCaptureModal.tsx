'use client';
import { useEffect, useRef, useState } from 'react';

type ModalVariant = 'cohort' | 'leaders' | 'organisations';

const config: Record<ModalVariant, { title: string; subtitle: string; submitLabel?: string }> = {
  cohort: {
    title: 'Apply to Join',
    subtitle: 'Applications are reviewed to ensure the cohort remains focused, practical and high-value.',
  },
  leaders: {
    title: 'Attend AI Confidence Day',
    subtitle: 'A practical leadership experience designed to help senior leaders move from AI uncertainty to action.',
  },
  organisations: {
    title: 'Request Information',
    subtitle: 'Tell us about your organisation and we\'ll recommend the most suitable AI Confidence pathway.',
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

  // Reset submitted state when reopened
  useEffect(() => {
    if (isOpen) setSubmitted(false);
  }, [isOpen]);

  if (!isOpen) return null;

  function handleOverlayClick(e: React.MouseEvent) {
    if (e.target === overlayRef.current) onClose();
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: connect to HubSpot / MailerLite
    setSubmitted(true);
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
              { id: 'organisation', label: 'Organisation', type: 'text', placeholder: 'Company or team name' },
              { id: 'role', label: 'Role', type: 'text', placeholder: 'Your title or function' },
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

            <div className="pt-3">
              <button
                type="submit"
                className="w-full bg-[#111111] text-white text-[10px] tracking-[0.25em] uppercase font-sans py-4 hover:bg-[#D4AF37] hover:text-[#111111] transition-all duration-400"
              >
                Start My AI Confidence Journey
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
