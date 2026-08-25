import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useLenis } from './hooks/useLenis';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { ParticleBackground } from './components/ParticleBackground';
import { Scene } from './components/canvas/Scene';
import { Home, About, Contact, PrivacyPolicy, TermsOfService } from './pages';

function App() {

  useLenis();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-400 selection:bg-purple-500/30 overflow-x-hidden w-full max-w-[100vw] relative z-0 font-sans">
      <CustomCursor />
      <ParticleBackground />
      <Scene />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
