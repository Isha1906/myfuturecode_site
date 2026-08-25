import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Tilt from 'react-parallax-tilt';
import { FiSearch, FiPenTool, FiCode, FiCheckSquare, FiSend, FiRefreshCw } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { id: 1, title: "Research", desc: "Understanding user needs", icon: <FiSearch size={24} /> },
  { id: 2, title: "Design", desc: "Creating clean, modern UI/UX", icon: <FiPenTool size={24} /> },
  { id: 3, title: "Development", desc: "Building with latest technologies", icon: <FiCode size={24} /> },
  { id: 4, title: "Testing", desc: "Ensuring quality & bug-free apps", icon: <FiCheckSquare size={24} /> },
  { id: 5, title: "Launch", desc: "Releasing to stores successfully", icon: <FiSend size={24} /> },
  { id: 6, title: "Updates", desc: "Continuous updates & new features", icon: <FiRefreshCw size={24} /> }
];

export function ProcessSection() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.fromTo(".process-heading",
      { y: 30, opacity: 0 },
      { scrollTrigger: { trigger: container.current, start: "top 80%" }, y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );
    gsap.fromTo(".process-step",
      { y: 40, opacity: 0 },
      { scrollTrigger: { trigger: ".process-track", start: "top 85%" }, y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: "back.out(1.5)" }
    );
    gsap.fromTo(".process-line",
      { scaleX: 0 },
      { scrollTrigger: { trigger: ".process-track", start: "top 85%" }, scaleX: 1, transformOrigin: "left center", duration: 1.5, ease: "power2.inOut" }
    );
    gsap.fromTo(".process-line-mobile",
      { strokeDasharray: 300, strokeDashoffset: 300 },
      { scrollTrigger: { trigger: ".process-step", start: "top 85%" }, strokeDashoffset: 0, duration: 2, ease: "power2.inOut" }
    );
  }, { scope: container });

  return (
    <section id="process" ref={container} className="py-24 relative z-10 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="process-heading text-center mb-12 md:mb-16">
          <p className="text-purple-500 font-bold tracking-widest text-sm uppercase mb-2">Our Product Life Cycle</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">How We Innovate and Launch</h2>
        </div>

        <div className="process-track relative max-w-6xl mx-auto hidden md:block mb-8">
          {/* Horizontal Line connecting icons */}
          <div className="absolute top-8 left-[8%] right-[8%] h-[2px] bg-slate-900/10 z-0">
            <div className="process-line w-full h-full bg-gradient-to-r from-purple-500/20 via-purple-500 to-purple-500/20" />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Mobile Zigzag Line */}
          <div className="absolute left-[25%] right-[25%] md:hidden z-0 pointer-events-none" style={{ top: '32px', height: 'calc(66.66%)' }}>
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full stroke-purple-500/50 fill-none" style={{ strokeWidth: 2, vectorEffect: 'non-scaling-stroke' }}>
              <path className="process-line-mobile" d="M 0,0 L 100,0 L 0,50 L 100,50 L 0,100 L 100,100" pathLength="300" />
            </svg>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 relative z-10 text-center">
            {steps.map((step) => (
              <Tilt
                key={step.id}
                glareEnable={false}
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                perspective={1000}
                scale={1.05}
                transitionSpeed={1000}
                className="process-step group cursor-pointer"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="flex flex-col items-center h-full" style={{ transformStyle: 'preserve-3d' }}>
                  <div
                    className="w-16 h-16 rounded-2xl bg-slate-800/90 border border-white/10 flex items-center justify-center text-purple-500 transition-colors duration-300 group-hover:bg-purple-500 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(147,51,234,0.4)] mb-6"
                    style={{ transform: 'translateZ(30px)' }}
                  >
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2" style={{ transform: 'translateZ(20px)' }}>{step.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed max-w-[120px] mx-auto" style={{ transform: 'translateZ(10px)' }}>{step.desc}</p>
                </div>
              </Tilt>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
