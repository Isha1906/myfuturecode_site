import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { SiGoogleplay, SiApple, SiUnity, SiFirebase, SiGooglecloud } from 'react-icons/si';
import { FaAws, FaMicrosoft } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const trustedLogos = [
  { name: 'Google Play', icon: <SiGoogleplay size={36} className="text-[#414141] hover:text-[#414141]" style={{ fill: "url(#googleplay-gradient)" }} /> },
  { name: 'App Store', icon: <SiApple size={36} className="text-white" /> },
  { name: 'Unity', icon: <SiUnity size={36} className="text-white" /> },
  { name: 'Firebase', icon: <SiFirebase size={36} className="text-[#FFCA28]" /> },
  { name: 'AWS', icon: <FaAws size={36} className="text-[#FF9900]" /> },
  { name: 'Google Cloud', icon: <SiGooglecloud size={36} className="text-[#4285F4]" /> },
  { name: 'Microsoft', icon: <FaMicrosoft size={36} className="text-[#00A4EF]" /> },
];

export function TrustedBySection() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.fromTo(".trusted-content",
      { y: 20, opacity: 0 },
      { scrollTrigger: { trigger: container.current, start: "top 90%" }, y: 0, opacity: 1, duration: 0.8 }
    );
  }, { scope: container });

  return (
    <section ref={container} className="py-24 bg-transparent">
      <div className="container mx-auto px-6 trusted-content">
        <p className="text-center text-purple-500 font-bold tracking-widest text-xs uppercase mb-8">Trusted & Featured On</p>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">

          <div className="flex items-center gap-2 text-white font-bold text-xl"><SiGoogleplay size={28} className="text-[#414141] fill-[#414141]" style={{ fill: "url(#googleplay-gradient)" }} /> Google Play</div>
          <div className="flex items-center gap-2 text-white font-bold text-xl"><SiApple size={28} /> App Store</div>
          <div className="flex items-center gap-2 text-white font-bold text-xl"><SiUnity size={28} /> Unity</div>
          <div className="flex items-center gap-2 text-white font-bold text-xl"><SiFirebase size={28} className="text-[#FFCA28]" /> Firebase</div>
          <div className="flex items-center gap-2 text-white font-bold text-xl"><FaAws size={28} className="text-[#FF9900]" /> aws</div>
          <div className="flex items-center gap-2 text-white font-bold text-xl"><SiGooglecloud size={28} className="text-[#4285F4]" /> Google Cloud</div>
          <div className="flex items-center gap-2 text-white font-bold text-xl"><FaMicrosoft size={28} className="text-[#00A4EF]" /> Microsoft</div>

        </div>
      </div>
    </section>
  );
}
