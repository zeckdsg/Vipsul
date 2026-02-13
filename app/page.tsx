import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import PromoBanner from '../components/PromoBanner';
import Testimonials from '../components/Testimonials';
import Process from '../components/Process';
import ResortFeature from '../components/ResortFeature';
import FooterCTA from '../components/FooterCTA';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <PromoBanner />
      <Testimonials />
      <Process />
      <ResortFeature />
      <FooterCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}