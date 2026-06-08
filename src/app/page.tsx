import Navigation from '@/components/Navigation';
import Hero from '@/components/home/Hero';
import ConfidenceGap from '@/components/home/ConfidenceGap';
import TheStory from '@/components/home/TheStory';
import Framework from '@/components/home/Framework';
import HumanAI from '@/components/home/HumanAI';
import EventSection from '@/components/home/EventSection';
import Testimonials from '@/components/home/Testimonials';
import Resources from '@/components/home/Resources';
import FinalCTA from '@/components/home/FinalCTA';
import Footer from '@/components/home/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <ConfidenceGap />
      <TheStory />
      <Framework />
      <HumanAI />
      <EventSection />
      <Testimonials />
      <Resources />
      <FinalCTA />
      <Footer />
    </>
  );
}
