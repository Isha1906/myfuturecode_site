import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Tilt from 'react-parallax-tilt';
import { FiDownload, FiArrowRight } from 'react-icons/fi';
import { Button } from '../components/ui/Button';
import ctaGraphic from '../assets/cta-graphic.png';

gsap.registerPlugin(ScrollTrigger);

export function BottomCTASection() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.fromTo(".cta-content",
      { y: 30, opacity: 0 },
      { scrollTrigger: { trigger: container.current, start: "top 80%" }, y: 0, opacity: 1, duration: 0.8 }
    );
  }, { scope: container });

  return (
    <section ref={container} className="py-24 relative z-10 bg-transparent px-6">
      <div className="container mx-auto max-w-6xl cta-content">
        <div className="bg-gradient-to-r from-indigo-900/40 via-purple-900/40 to-slate-900 border border-white/10 rounded-[40px] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.5)]">


          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

          <div className="md:w-3/5 relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Ready To Experience Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Amazing?</span>
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-lg">
              Download our apps and games and begin your journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.15}
                glareColor="#ffffff"
                glarePosition="all"
                glareBorderRadius="9999px"
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                perspective={1000}
                scale={1.05}
                transitionSpeed={400}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full border-white/20 hover:border-purple-500 hover:text-purple-400 px-8 flex items-center justify-center gap-2 cursor-pointer h-full w-full outline-none"
                  onClick={() => document.getElementById('what-we-build')?.scrollIntoView({ behavior: 'smooth' })}
                  style={{ transform: 'translateZ(20px)' }}
                >
                  Explore Products <FiArrowRight size={18} />
                </Button>
              </Tilt>
            </div>
          </div>

          <div className="md:w-2/5 relative z-10 hidden md:block">
            <div className="w-full aspect-square bg-slate-900/40 rounded-full border border-white/10 flex items-center justify-center relative shadow-inner hover:scale-105 transition-transform duration-700 ease-out group overflow-hidden">

              <div className="absolute inset-4 rounded-full border border-purple-500/30 border-dashed group-hover:border-purple-400/50 animate-[spin_10s_linear_infinite]" />


              <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full scale-75 pointer-events-none" />

              <img
                src={ctaGraphic}
                alt="Amazing Graphic"
                className="w-full h-full object-cover relative z-10 drop-shadow-[0_0_40px_rgba(147,51,234,0.5)] group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
