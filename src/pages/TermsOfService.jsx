import React, { useEffect } from 'react';
import Tilt from 'react-parallax-tilt';

export function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-32 pb-24 relative z-10 min-h-screen">

      <div className="absolute top-0 right-1/2 translate-x-1/2 w-full max-w-3xl h-[400px] bg-blue-900/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <div className="text-center mb-16">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 font-bold tracking-widest text-sm uppercase mb-4">
            Legal Agreement
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight">
            Terms of Service
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed text-lg">
            Please read these terms carefully before using our services.
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

            <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-md rounded-2xl border border-slate-800 shadow-2xl pointer-events-none group-hover:border-blue-500/30 transition-colors duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-600 to-indigo-700 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <section id="terms" className="relative p-8 md:p-12 rounded-2xl" style={{ transformStyle: 'preserve-3d' }}>
              <div className="space-y-6 text-slate-300 leading-relaxed text-sm md:text-base relative z-10" style={{ transform: 'translateZ(30px)' }}>
                <p>
                  By accessing or using MFC's website, products, or services, you agree to comply with these Terms of Service and all applicable laws and regulations. If you do not agree with these terms, please discontinue use of our services.
                </p>
                <h3 className="text-white font-bold text-lg mt-8 mb-4">1. Intellectual Property</h3>
                <p>
                  All content, products, features, designs, trademarks, logos, and other intellectual property available through MFC are owned by MFC or its licensors and are protected under applicable intellectual property laws. Unauthorized copying, distribution, or modification is prohibited.
                </p>
                <h3 className="text-white font-bold text-lg mt-8 mb-4">2. User Conduct</h3>
                <p>
                  You agree to use our products and services responsibly and in accordance with applicable laws. You must not misuse, interfere with, attempt unauthorized access to, or disrupt the operation of our services or other users' experiences.
                </p>
                <p className="pt-4 text-blue-400 font-semibold italic">Last updated: {new Date().toLocaleDateString()}</p>
              </div>
            </section>
          </Tilt>
        </div>
      </div>
    </main>
  );
}
