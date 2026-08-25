
import React from 'react';
import Tilt from 'react-parallax-tilt';

export function AppCard({ app }) {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.3}
      glareColor="#a855f7"
      glarePosition="all"
      glareBorderRadius="24px"
      tiltMaxAngleX={20}
      tiltMaxAngleY={20}
      perspective={1000}
      scale={1.05}
      transitionSpeed={1000}
      className="w-full max-w-[240px] mx-auto cursor-pointer"
      style={{ transformStyle: 'preserve-3d', borderRadius: '24px', isolation: 'isolate' }}
    >
      <div
        className="group w-full aspect-square relative cursor-pointer overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_rgba(168,85,247,0.4)]"
        onClick={() => window.open(app.url, '_blank', 'noopener,noreferrer')}
        style={{ transformStyle: 'preserve-3d', borderRadius: '24px', border: '1px solid rgba(255, 255, 255, 0.05)', isolation: 'isolate' }}
      >
        <div className="absolute inset-0 overflow-hidden" style={{ borderRadius: '24px', isolation: 'isolate' }}>
          <img
            src={app.icon}
            alt={`${app.name} icon`}
            className="w-full h-full object-cover object-center scale-[1.15] transition-transform duration-500 group-hover:scale-[1.25]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none" />
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 p-4 flex flex-col items-center text-center z-10 pointer-events-none"
          style={{ transform: 'translateZ(40px)' }}
        >
          <h3 className="text-base font-bold text-white mb-1 drop-shadow-md leading-tight">{app.name}</h3>
        </div>
      </div>
    </Tilt>
  );
}