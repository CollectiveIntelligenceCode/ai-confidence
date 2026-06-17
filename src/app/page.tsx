import Navigation from '@/components/Navigation';
import Hero from '@/components/home/Hero';
import ConfidenceGap from '@/components/home/ConfidenceGap';
import ProblemFirst from '@/components/home/ProblemFirst';
import ConfidenceJourney from '@/components/home/ConfidenceJourney';
import PhilosophyQuote from '@/components/home/PhilosophyQuote';
import EntryPoints from '@/components/home/EntryPoints';
import Framework from '@/components/home/Framework';
import CommunityCards from '@/components/home/CommunityCards';
import WhyConfidence from '@/components/home/WhyConfidence';
import Resources from '@/components/home/Resources';
import Testimonials from '@/components/home/Testimonials';
import FinalCTA from '@/components/home/FinalCTA';
import Footer from '@/components/home/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <ConfidenceGap />
      <ProblemFirst />
      <ConfidenceJourney />
      <PhilosophyQuote />
      <EntryPoints />
      <Framework />
      <CommunityCards />
      <WhyConfidence />
      <Resources />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </>
  );
}
