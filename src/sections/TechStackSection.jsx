import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Tilt from 'react-parallax-tilt';
import { SiFlutter, SiAndroid, SiSwift, SiKotlin, SiUnity, SiFirebase, SiNodedotjs, SiLaravel, SiGooglecloud, SiGithub, SiFigma } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const technologies = [
  { name: 'Flutter', icon: <SiFlutter size={32} className="text-[#02569B]" /> },
  { name: 'Android', icon: <SiAndroid size={32} className="text-[#3DDC84]" /> },
  { name: 'Swift', icon: <SiSwift size={32} className="text-[#F05138]" /> },
  { name: 'Kotlin', icon: <SiKotlin size={32} className="text-[#7F52FF]" /> },
  { name: 'Unity', icon: <SiUnity size={32} className="text-white" /> },
  { name: 'Firebase', icon: <SiFirebase size={32} className="text-[#FFCA28]" /> },
  { name: 'Node.js', icon: <SiNodedotjs size={32} className="text-[#339933]" /> },
  { name: 'Laravel', icon: <SiLaravel size={32} className="text-[#FF2D20]" /> },
  { name: 'AWS', icon: <FaAws size={32} className="text-[#FF9900]" /> },
  { name: 'Google Cloud', icon: <SiGooglecloud size={32} className="text-[#4285F4]" /> },
  { name: 'GitHub', icon: <SiGithub size={32} className="text-white" /> },
  { name: 'Figma', icon: <SiFigma size={32} className="text-[#F24E1E]" /> },
];

export function TechStackSection() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.fromTo(".tech-heading",
      { y: 30, opacity: 0 },
      { scrollTrigger: { trigger: container.current, start: "top 85%" }, y: 0, opacity: 1, duration: 0.8 }
    );
    gsap.fromTo(".tech-item",
      { y: 20, opacity: 0, scale: 0.9 },
      { scrollTrigger: { trigger: ".tech-grid", start: "top 90%" }, y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.05, ease: "back.out(1.5)" }
    );
  }, { scope: container });

  return (
    <section id="technologies" ref={container} className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="tech-heading text-center mb-12 md:mb-16">
          <p className="text-purple-500 font-bold tracking-widest text-sm uppercase mb-2">Technologies We Use</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Built Using Modern Technologies</h2>
        </div>

        <div className="tech-grid flex flex-wrap justify-center gap-4 md:gap-6 max-w-5xl mx-auto">
          {technologies.map((tech, idx) => (
            <Tilt
              key={idx}
              glareEnable={false}
              tiltMaxAngleX={30}
              tiltMaxAngleY={30}
              perspective={1000}
              scale={1.1}
              transitionSpeed={1000}
              className="tech-item cursor-pointer"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div 
                className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] bg-slate-900/50 backdrop-blur-sm border border-white/5 rounded-2xl flex flex-col items-center justify-center gap-3 transition-all duration-300 group hover:border-purple-500/30 hover:shadow-[0_15px_30px_rgba(168,85,247,0.2)]"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div 
                  className="transition-transform duration-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] group-hover:drop-shadow-[0_0_20px_rgba(147,51,234,0.5)]"
                  style={{ transform: 'translateZ(50px)' }}
                >
                  {tech.icon}
                </div>
                <span 
                  className="text-xs font-medium text-slate-400 group-hover:text-white transition-colors"
                  style={{ transform: 'translateZ(30px)' }}
                >
                  {tech.name}
                </span>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}
