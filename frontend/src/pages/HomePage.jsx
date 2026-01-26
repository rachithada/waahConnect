import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';
import ClientLogos from '@/components/ClientLogos';
import ContactCTA from '@/components/ContactCTA';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

export const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Stats />
      <ClientLogos />
      <Testimonials />
      <Newsletter />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default HomePage;
