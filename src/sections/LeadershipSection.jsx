import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { FounderCard } from '../components/FounderCard';
import { leaders } from '../data/leaders';

gsap.registerPlugin(ScrollTrigger);

export function LeadershipSection() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.fromTo(".leader-heading",
      { y: 20, opacity: 0 },
      { scrollTrigger: { trigger: container.current, start: "top 85%" }, y: 0, opacity: 1, duration: 0.6 }
    );
    gsap.fromTo(".leader-card",
      { y: 30, opacity: 0 },
      { scrollTrigger: { trigger: ".leader-grid", start: "top 90%" }, y: 0, opacity: 1, duration: 0.5, stagger: 0.1 }
    );
  }, { scope: container });

  return (
    <section id="leadership" ref={container} className="py-24 relative z-10 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="leader-heading text-center mb-12 md:mb-16">
          <p className="text-purple-500 font-bold tracking-widest text-xs uppercase mb-2">Leadership</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Guided By Vision, Driven By Experience</h2>
        </div>
        
        <div className="leader-grid grid grid-cols-1 xl:grid-cols-2 gap-8 max-w-[1400px] mx-auto px-4 md:px-0">
          {leaders.map((leader) => (
            <div key={leader.id} className="leader-card w-full">
              <FounderCard founder={leader} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
