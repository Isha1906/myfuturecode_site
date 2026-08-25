import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Tilt from 'react-parallax-tilt';
import { FiShield, FiCpu, FiUsers, FiLock, FiGlobe, FiRefreshCw } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const features = [
  { title: "Premium Quality", desc: "Top-notch design & flawless performance", icon: <FiShield size={28} className="text-purple-500" /> },
  { title: "Innovative Ideas", desc: "Creative solutions for modern problems", icon: <FiCpu size={28} className="text-pink-500" /> },
  { title: "User Focused", desc: "Products that users love and trust", icon: <FiUsers size={28} className="text-blue-500" /> },
  { title: "Secure & Safe", desc: "Best practices to keep data safe", icon: <FiLock size={28} className="text-green-500" /> },
  { title: "Global Community", desc: "Millions of users around the world", icon: <FiGlobe size={28} className="text-emerald-500" /> },
  { title: "Regular Updates", desc: "Constant improvements and new features", icon: <FiRefreshCw size={28} className="text-orange-500" /> },
];

export function OperationsSection() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.fromTo(".feat-heading",
      { y: 20, opacity: 0 },
      { scrollTrigger: { trigger: container.current, start: "top 80%" }, y: 0, opacity: 1, duration: 0.6 }
    );
    gsap.fromTo(".feat-item",
      { y: 30, opacity: 0 },
      { scrollTrigger: { trigger: ".feat-grid", start: "top 85%" }, y: 0, opacity: 1, duration: 0.5, stagger: 0.1 }
    );
  }, { scope: container });

  return (
    <section id="operations" ref={container} className="py-24 bg-transparent relative z-10">
      <div className="container mx-auto px-6">
        <div className="feat-heading text-center mb-12 md:mb-16">
          <p className="text-purple-500 font-bold tracking-widest text-xs uppercase">Why Millions Love Our Products</p>
        </div>
        
        <div className="feat-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
          {features.map((feat, idx) => (
            <Tilt
              key={idx}
              glareEnable={false}
              tiltMaxAngleX={30}
              tiltMaxAngleY={30}
              perspective={1000}
              scale={1.1}
              transitionSpeed={1000}
              className="feat-item cursor-pointer"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="flex flex-col items-center text-center group bg-slate-900/30 p-4 rounded-xl border border-white/5 hover:border-purple-500/30 hover:shadow-[0_10px_30px_rgba(168,85,247,0.2)] transition-all h-full" style={{ transformStyle: 'preserve-3d' }}>
                <div 
                  className="mb-4 p-3 rounded-full bg-slate-800 border border-white/10 transition-transform duration-300 shadow-[0_0_15px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_25px_rgba(147,51,234,0.4)]"
                  style={{ transform: 'translateZ(50px)' }}
                >
                  {feat.icon}
                </div>
                <div style={{ transform: 'translateZ(30px)' }}>
                  <h4 className="text-sm font-bold text-white mb-1">{feat.title}</h4>
                  <p className="text-xs text-slate-400 leading-tight">{feat.desc}</p>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}
