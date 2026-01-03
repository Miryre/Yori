import React from 'react';
import Hero from './components/Hero';
import Why from './components/Why';
import HowItWorks from './components/HowItWorks';
import Values from './components/Values';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Why />
      <HowItWorks />
      <Values />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
