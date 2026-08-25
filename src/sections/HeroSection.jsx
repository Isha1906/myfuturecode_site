import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { FiChevronDown, FiPlayCircle } from 'react-icons/fi';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Tilt from 'react-parallax-tilt';
import { StatsBar } from '../components/StatsBar';

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const container = useRef(null);

  useGSAP(() => {
    // Mechanical clip-path reveal
    gsap.set(".hero-line", { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)", y: 20 });

    gsap.to(".hero-line", {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      y: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: "power4.out",
      delay: 0.2
    });

    gsap.from(".hero-btn", {
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      delay: 1.2
    });
  }, { scope: container });

  return (
    <section id="hero" ref={container} className="relative min-h-[100dvh] flex flex-col justify-center items-center overflow-hidden pt-32 pb-24 text-center">
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center justify-center">
        <h1 className="font-display text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tighter mb-8 text-slate-50 leading-[1.05] uppercase max-w-5xl mx-auto">
          <div className="overflow-hidden"><div className="hero-line pb-2">Architecting</div></div>
          <div className="overflow-hidden"><div className="hero-line pb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">The Future</div></div>
          <div className="overflow-hidden"><div className="hero-line pb-2">Of Code</div></div>
        </h1>

        <div className="overflow-hidden mb-12">
          <p className="hero-line text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            We build high-performance digital experiences engineered for scale. Precision software development meeting stunning visual architecture.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="hero-btn">
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.3}
              glareColor="#ffffff"
              glarePosition="all"
              glareBorderRadius="0.125rem"
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={1000}
              scale={1.05}
              transitionSpeed={400}
              className="inline-block"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <button
                className="bg-gradient-to-r from-purple-600 to-blue-700 hover:from-purple-500 hover:to-blue-600 text-slate-50 border-none rounded-sm px-10 py-5 text-lg font-bold shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_30px_rgba(29,78,216,0.6)] transition-all uppercase tracking-wider cursor-pointer outline-none"
                onClick={() => document.getElementById('what-we-build').scrollIntoView({ behavior: 'smooth' })}
                style={{ transform: 'translateZ(20px)' }}
              >
                Explore Products
              </button>
            </Tilt>
          </div>
        </div>

        {/* Render the StatsBar here so it appears clearly on the Hero page */}
        <StatsBar />
      </div>
    </section>
  );
}
