import React, { useEffect } from 'react';
import Tilt from 'react-parallax-tilt';

export function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-32 pb-24 relative z-10 min-h-screen">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-purple-900/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <div className="text-center mb-16">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 font-bold tracking-widest text-sm uppercase mb-4">
            Our Commitments
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed text-lg">
            We are committed to transparency, protecting your privacy, and ensuring a safe and trustworthy experience across all MFC products and services.
          </p>
        </div>

        <div className="space-y-16">
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.15}
            glareColor="#ffffff"
            glarePosition="all"
            glareBorderRadius="16px"
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            perspective={2000}
            scale={1.02}
            transitionSpeed={1000}
            gyroscope={true}
            className="w-full relative group"
            style={{ transformStyle: 'preserve-3d' }}
          >

            <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-md rounded-2xl border border-slate-800 shadow-2xl pointer-events-none group-hover:border-purple-500/30 transition-colors duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-600 to-blue-700 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <section id="privacy" className="relative p-8 md:p-12 rounded-2xl" style={{ transformStyle: 'preserve-3d' }}>
              <div className="space-y-6 text-slate-300 leading-relaxed text-sm md:text-base relative z-10" style={{ transform: 'translateZ(30px)' }}>
                <p>
                  At MFC, your privacy is important to us. This Privacy Policy explains how we collect, use, store, and protect your personal information when you visit our website or use our products and services.
                </p>
                <h3 className="text-white font-bold text-lg mt-8 mb-4">1. Information We Collect</h3>
                <p>
                  We may collect personal information such as your name, email address, and other details that you voluntarily provide when creating an account, contacting us, or using our products. We may also collect certain technical information, including device details, browser type, and usage data, to improve our services.
                </p>
                <h3 className="text-white font-bold text-lg mt-8 mb-4">2. Use of Your Information</h3>
                <p>
                  We use your information to provide and improve our products, personalize your experience, communicate important updates, respond to your inquiries, enhance security, and comply with legal obligations. We do not sell your personal information to third parties.
                </p>
                <p className="pt-4 text-purple-400 font-semibold italic">Last updated: {new Date().toLocaleDateString()}</p>
              </div>
            </section>
          </Tilt>
        </div>
      </div>
    </main>
  );
}
