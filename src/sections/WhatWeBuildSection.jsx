import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Tilt from 'react-parallax-tilt';
import { FaGamepad, FaAndroid, FaApple } from 'react-icons/fa';
import { products } from '../data/products';

export function WhatWeBuildSection() {
  const container = useRef(null);

  useGSAP(() => {
    // Heading animation
    gsap.fromTo(".wwb-heading",
      { y: 30, opacity: 0 },
      { scrollTrigger: { trigger: container.current, start: "top 80%" }, y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );
    
    // Batch animation for grid cards
    ScrollTrigger.batch(".wwb-card", {
      start: "top 85%",
      onEnter: batch => gsap.fromTo(batch, 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "elastic.out(1, 0.75)", overwrite: true }
      ),
    });
  }, { scope: container });

  const renderIcon = (iconName) => {
    switch(iconName) {
      case 'gamepad': 
        return <FaGamepad size={40} className="text-blue-500 group-hover:text-blue-400 transition-colors" />;
      case 'android': 
        return <FaAndroid size={40} className="text-[#3DDC84] group-hover:text-green-400 transition-colors" />;
      case 'apple': 
        return <FaApple size={40} className="text-white group-hover:text-gray-300 transition-colors" />;
      default: return null;
    }
  };

  return (
    <section id="what-we-build" ref={container} className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="wwb-heading text-center mb-12 md:mb-16">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 font-bold tracking-widest text-sm uppercase mb-2">Our Products</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-50 uppercase tracking-tight">System Architecture</h2>
        </div>

        <div className="wwb-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Tilt
              key={product.id}
              glareEnable={true}
              glareMaxOpacity={0.15}
              glareColor="#a855f7"
              glarePosition="all"
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={1000}
              scale={1.02}
              transitionSpeed={1000}
              className="wwb-card"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div 
                className="bg-slate-900/40 backdrop-blur-md rounded-sm p-8 border border-slate-800 transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(147,51,234,0.2)] flex flex-col h-full group relative overflow-hidden"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div 
                  className="mb-12 transform transition-transform duration-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_20px_rgba(147,51,234,0.5)] origin-left"
                  style={{ transform: 'translateZ(60px)' }}
                >
                  {renderIcon(product.iconName)}
                </div>
                <div style={{ transform: 'translateZ(40px)' }}>
                  <h3 className="font-display text-2xl font-bold text-slate-50 mb-3 uppercase tracking-wide">{product.title}</h3>
                  <p className="text-slate-400 mb-8 flex-grow leading-relaxed">{product.description}</p>
                  <div 
                    onClick={() => document.getElementById(product.targetId)?.scrollIntoView({ behavior: 'smooth' })}
                    className="font-semibold text-sm flex items-center gap-2 text-purple-500 hover:text-purple-400 transition-colors uppercase tracking-widest cursor-pointer w-fit outline-none"
                  >
                    Explore <span className="transform transition-transform group-hover:translate-x-1">&rarr;</span>
                  </div>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}
