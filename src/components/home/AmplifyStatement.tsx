import FadeIn from '@/components/FadeIn';

export default function AmplifyStatement() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <FadeIn>
          <p className="font-serif text-[#111111] text-[clamp(1.5rem,3.5vw,2.8rem)] leading-snug max-w-5xl">
            We put humans at the centre. Our programmes don&apos;t replace human judgement —{' '}
            <span className="italic text-[#D4AF37]">they amplify it:</span>{' '}
            giving leaders and teams the confidence to understand, direct and leverage AI the right way.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
