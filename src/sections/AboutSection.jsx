import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Tilt from 'react-parallax-tilt';
import { FiTarget, FiEye, FiUsers, FiCheck } from 'react-icons/fi';
import { FaGem } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export function AboutSection() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.fromTo(".about-heading",
      { y: 30, opacity: 0 },
      { scrollTrigger: { trigger: container.current, start: "top 80%" }, y: 0, opacity: 1, duration: 0.8 }
    );
    gsap.fromTo(".about-card",
      { y: 40, opacity: 0 },
      { scrollTrigger: { trigger: ".about-card", start: "top 85%" }, y: 0, opacity: 1, duration: 0.8 }
    );
    gsap.fromTo(".about-col",
      { y: 20, opacity: 0 },
      { scrollTrigger: { trigger: ".about-card", start: "top 85%" }, y: 0, opacity: 1, duration: 0.6, stagger: 0.15, delay: 0.2 }
    );
  }, { scope: container });

  return (
    <section id="about" ref={container} className="py-24 relative z-10 bg-transparent">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="about-heading text-center mb-12 md:mb-16">
          <p className="text-purple-500 font-bold tracking-widest text-xs uppercase mb-3">About Us</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Building Experiences That Inspire Millions</h2>
        </div>

        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.15}
          glareColor="#ffffff"
          glarePosition="all"
          glareBorderRadius="32px"
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          perspective={2000}
          scale={1.02}
          transitionSpeed={1000}
          className="about-card rounded-[32px] w-full"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="bg-[#0b0f19] border border-white/10 rounded-[32px] p-8 lg:p-10 shadow-2xl relative overflow-hidden h-full" style={{ transformStyle: 'preserve-3d' }}>

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-0 lg:divide-x lg:divide-white/10" style={{ transformStyle: 'preserve-3d' }}>


              <div className="about-col lg:pr-8 lg:col-span-1 flex items-center" style={{ transform: 'translateZ(20px)' }}>
                <p className="text-slate-300 text-sm leading-relaxed">
                  At MFC, we are passionate about building innovative digital products that are not only intuitive and engaging but also meaningful and impactful. Our products are designed to solve real-world problems, inspire creativity, and connect millions of people around the world.
                </p>
              </div>


              <div className="about-col lg:px-8 flex flex-col items-center text-center" style={{ transform: 'translateZ(30px)' }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 text-fuchsia-500 bg-fuchsia-500/10 shadow-[0_0_15px_rgba(217,70,239,0.3)]">
                  <FiTarget size={28} />
                </div>
                <h3 className="text-white font-bold mb-2">Our Mission</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  To create innovative, high-quality digital products that solve real-world problems, inspire creativity, and deliver exceptional experiences to users worldwide.
                </p>
              </div>


              <div className="about-col lg:px-8 flex flex-col items-center text-center" style={{ transform: 'translateZ(30px)' }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 text-blue-400 bg-blue-400/10 shadow-[0_0_15px_rgba(96,165,250,0.3)]">
                  <FiEye size={28} />
                </div>
                <h3 className="text-white font-bold mb-2">Our Vision</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  To build a future where innovative digital products make everyday life more connected, engaging, and meaningful.
                </p>
              </div>


              <div className="about-col lg:px-8 flex flex-col items-center text-center" style={{ transform: 'translateZ(30px)' }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 text-emerald-400 bg-emerald-400/10 shadow-[0_0_15px_rgba(52,211,153,0.3)]">
                  <FaGem size={26} />
                </div>
                <h3 className="text-white font-bold mb-2">Our Values</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Passion, creativity, innovation, integrity, and a user-first approach in everything we build.
                </p>
              </div>


              <div className="about-col lg:pl-8 flex flex-col justify-center" style={{ transform: 'translateZ(20px)' }}>
                <div className="flex items-center gap-3 mb-4">
                  <FiUsers size={24} className="text-orange-400" />
                  <h3 className="text-white font-bold">Why Choose Us</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-300 text-xs">
                    <FiCheck className="text-orange-400" size={16} /> User First Approach
                  </li>
                  <li className="flex items-center gap-3 text-slate-300 text-xs">
                    <FiCheck className="text-orange-400" size={16} /> High Quality Products
                  </li>
                  <li className="flex items-center gap-3 text-slate-300 text-xs">
                    <FiCheck className="text-orange-400" size={16} /> Innovation Driven
                  </li>
                  <li className="flex items-center gap-3 text-slate-300 text-xs">
                    <FiCheck className="text-orange-400" size={16} /> Trusted by a Growing Community
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </Tilt>
      </div>
    </section>
  );
}
