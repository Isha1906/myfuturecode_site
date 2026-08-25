import React from 'react';
import { FiDownload, FiBox, FiGlobe, FiStar } from 'react-icons/fi';
import Tilt from 'react-parallax-tilt';

export function StatsBar() {
  const stats = [
    { icon: <FiDownload className="text-purple-500" size={24} />, value: "10M+", label: "Downloads" },
    { icon: <FiBox className="text-purple-500" size={24} />, value: "50+", label: "Products" },
    { icon: <FiGlobe className="text-purple-500" size={24} />, value: "100+", label: "Countries" },
    { icon: <FiStar className="text-purple-500" size={24} />, value: "4.8", label: "Average Rating" },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto mt-16 px-6 relative z-10">
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.15}
        glareColor="#ffffff"
        glarePosition="all"
        glareBorderRadius="16px"
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        perspective={1500}
        scale={1.02}
        transitionSpeed={1000}
        className="w-full relative"
        style={{ transformStyle: 'preserve-3d' }}
      >

        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] pointer-events-none" />


        <div className="relative p-4 md:p-6 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6" style={{ transformStyle: 'preserve-3d' }}>
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col md:flex-row items-center gap-2 md:gap-4 lg:gap-5 justify-center w-full" style={{ transform: 'translateZ(30px)' }}>
              <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 flex items-center justify-center bg-slate-900/50 rounded-lg md:rounded-xl border border-white/10 shadow-inner">
                {stat.icon}
              </div>
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-none mb-1">{stat.value}</div>
                <div className="text-slate-400 text-[10px] md:text-sm font-medium">{stat.label === 'Average Rating' ? 'Rating' : stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </Tilt>
    </div>
  );
}
