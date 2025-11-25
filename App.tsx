import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductShowcase from './components/ProductShowcase';
import ProcessSection from './components/ProcessSection';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-black text-white selection:bg-accent selection:text-black">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <AboutSection />
        <ProcessSection />
        <ProductShowcase />
        <GallerySection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;