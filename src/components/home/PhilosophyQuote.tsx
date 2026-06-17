import FadeIn from '@/components/FadeIn';

export default function PhilosophyQuote() {
  return (
    <section className="bg-white py-24 lg:py-40">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <FadeIn direction="none">
          <div className="flex flex-col items-start">
            <div className="w-px h-16 bg-[#D4AF37] mb-14 opacity-60" />
            <blockquote className="font-serif text-[clamp(1.7rem,4.5vw,3.2rem)] text-[#111111] leading-[1.2] max-w-3xl">
              The organisations that thrive tomorrow will not be the ones using the most AI tools.
              <br /><br />
              <span className="italic text-[#888888]">
                They will be the ones solving the most important problems with confidence.
              </span>
            </blockquote>
            <div className="w-px h-16 bg-[#D4AF37] mt-14 opacity-60" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
