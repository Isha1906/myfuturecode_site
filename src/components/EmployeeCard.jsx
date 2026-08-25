import React from 'react';
import Tilt from 'react-parallax-tilt';

export function EmployeeCard({ employee, onClick }) {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.3}
      glareColor="#a855f7"
      glarePosition="all"
      tiltMaxAngleX={20}
      tiltMaxAngleY={20}
      perspective={1000}
      scale={1.05}
      transitionSpeed={1000}
      gyroscope={false}
      className="h-full rounded-2xl cursor-pointer"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div
        onClick={() => onClick && onClick(employee)}
        className="flex flex-col h-full bg-[#0a0a15]/90 backdrop-blur-sm border border-purple-500/10 rounded-2xl overflow-hidden group transition-all duration-300 hover:border-purple-500/30 hover:shadow-[0_15px_30px_rgba(168,85,247,0.4)] relative"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div
          className="w-full h-full aspect-[4/5] overflow-hidden relative bg-transparent rounded-2xl"
          style={{ transform: 'translateZ(40px)' }}
        >
          <picture>
            <source srcSet={employee.photoWebp} type="image/webp" />
            <img
              src={employee.photo}
              alt={employee.name}
              className="w-full h-full object-cover object-[20%] transition-transform duration-500 group-hover:scale-110"
            />
          </picture>

          {/* Gradient overlay to ensure text is readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

          {/* Text Content overlaying the image */}
          <div
            className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5 flex flex-col items-center text-center z-10 pointer-events-none"
            style={{ transform: 'translateZ(50px)' }}
          >
            <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-0.5 sm:mb-1 drop-shadow-md leading-tight">{employee.name}</h3>
            <p className="text-[10px] sm:text-xs md:text-sm text-purple-300 font-medium drop-shadow-md leading-tight">{employee.role}</p>
          </div>
        </div>
      </div>
    </Tilt>
  );
}
