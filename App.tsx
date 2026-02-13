import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import PromoBanner from './components/PromoBanner';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import ResortFeature from './components/ResortFeature';
import FooterCTA from './components/FooterCTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="bg-white min-h-screen text-slate-900 antialiased selection:bg-primary/30 selection:text-primary-dark">
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
      <Analytics />
    </div>
  );
};

export default App;