import type { Metadata } from 'next';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Hero from '@/components/home/Hero';
import PathwayPyramid from '@/components/home/PathwayPyramid';
import AmplifyStatement from '@/components/home/AmplifyStatement';
import ConfidenceGap from '@/components/home/ConfidenceGap';
import ManifestoStrip from '@/components/home/ManifestoStrip';
import OurEdge from '@/components/home/OurEdge';
import EntryPoints from '@/components/home/EntryPoints';
import EventSection from '@/components/home/EventSection';
import HumanCentre from '@/components/home/HumanCentre';
import Testimonials from '@/components/home/Testimonials';
import Team from '@/components/home/Team';
import CommunityCards from '@/components/home/CommunityCards';
import FinalCTA from '@/components/home/FinalCTA';
import Footer from '@/components/home/Footer';

export const metadata: Metadata = {
  title: 'AI Confidence: Future-Proof Your Business Today',
  description: 'Build AI confidence across your people, teams, and organisation. Expert training and leadership programmes for thriving in an AI-enabled future.',
};

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content">
      <Hero />
      <AmplifyStatement />
      <PathwayPyramid />
      <ConfidenceGap />
      <ManifestoStrip />

      {/* Image break — boardroom facilitation session, leads into "What Makes Us Different" */}
      <div className="relative h-[52vw] max-h-[540px] min-h-[260px] overflow-hidden">
        <Image
          src="/images/9.jpeg"
          alt="Boardroom facilitation session with a leader guiding a strategic discussion"
          fill
          className="object-cover"
          style={{ objectPosition: '50% 55%' }}
          sizes="100vw"
        />
        {/* Top fades from gold (ManifestoStrip), bottom fades into dark (OurEdge) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/50 via-transparent to-[#111111]/60" />
      </div>

      <OurEdge />

      {/* Image break — minimalist architecture, visual pause before programmes */}
      <div className="relative h-[40vw] max-h-[420px] min-h-[220px] overflow-hidden">
        <Image
          src="/images/2.jpeg"
          alt="Minimalist modern architecture representing clarity, structure and confidence"
          fill
          className="object-cover"
          style={{ objectPosition: '50% 50%' }}
          sizes="100vw"
        />
        {/* Fade top edge into OurEdge's dark background, fade bottom into EntryPoints */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/70 via-transparent to-[#F5F5F5]/60" />
      </div>

      <EntryPoints />
      <EventSection />
      <HumanCentre />

      {/* Image break — executive boardroom, leads into testimonials */}
      <div className="relative h-[45vw] max-h-[500px] min-h-[240px] overflow-hidden">
        <Image
          src="/images/5.jpeg"
          alt="Executive leadership meeting in a premium boardroom"
          fill
          className="object-cover"
          style={{ objectPosition: '50% 40%' }}
          sizes="100vw"
        />
        {/* Fade from light (HumanCentre #F5F5F5) at top, into white (Testimonials) at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5F5F5]/60 via-transparent to-white/50" />
      </div>

      <Testimonials />
      <Team />
      <CommunityCards />
      <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
