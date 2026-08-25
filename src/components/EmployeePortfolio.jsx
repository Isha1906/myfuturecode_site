import React, { useEffect, useRef } from 'react';
import { FiUser, FiCode, FiCalendar, FiArrowLeft } from 'react-icons/fi';
import gsap from 'gsap';
import Tilt from 'react-parallax-tilt';
import { employeePortfolios } from '../data/employeportfolio';
import { managerAndOperationalPortfolios } from '../data/managerandoperationalportfolio';

export function EmployeePortfolio({ employee: basicEmployee, onBack }) {
  const containerRef = useRef(null);

  // Merge the basic employee info (name, role, photo) with their extended portfolio data
  const portfolios = basicEmployee.isManager ? managerAndOperationalPortfolios : employeePortfolios;
  const employee = {
    ...basicEmployee,
    ...(portfolios[basicEmployee.id] || {})
  };

  useEffect(() => {
    // Scroll the section into view smoothly when portfolio opens
    if (containerRef.current) {
      const topOffset = containerRef.current.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }

    // Animate the portfolio card in
    gsap.fromTo(containerRef.current,
      { opacity: 0, y: 40, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "power4.out" }
    );
  }, []);

  return (
    <Tilt
      tiltMaxAngleX={2}
      tiltMaxAngleY={2}
      perspective={3000}
      scale={1}
      transitionSpeed={3000}
      gyroscope={true}
      className="w-full max-w-5xl mx-auto"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div ref={containerRef} className="w-full flex flex-col bg-[#0b0b10] border border-purple-500/20 rounded-[2rem] overflow-hidden shadow-[0_30px_100px_rgba(168,85,247,0.15)] relative" style={{ transformStyle: 'preserve-3d' }}>
        
        {/* ── Header Area ── */}
        <div className="p-4 sm:p-6 pb-0 flex items-center w-full z-50">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 px-4 sm:px-5 py-2 sm:py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all border border-white/5 hover:border-white/20"
          >
            <FiArrowLeft size={16} /> Back to Team
          </button>
        </div>

        <div className="flex flex-col md:flex-row w-full p-5 sm:p-8 md:p-12 gap-8 md:gap-16">
          
          {/* ── Left Column — Avatar & Info ── */}
          <div className="w-full md:w-[35%] flex flex-col items-center text-center md:items-start md:text-left relative z-10" style={{ transform: 'translateZ(30px)' }}>
            
            {/* Avatar with Glow */}
            <div className="relative mb-6 md:mb-8">
              <div className="absolute inset-0 bg-purple-600/30 rounded-full blur-[40px] md:blur-[60px] transform scale-110" />
              <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full p-[2px] bg-gradient-to-b from-purple-500 via-purple-500/20 to-transparent relative z-10">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#0a0a15]">
                   <img
                    src={employee.photo}
                    alt={employee.name}
                    className="w-full h-full object-cover object-[center_20%]"
                  />
                </div>
              </div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
              {employee.name}
            </h2>
            <p className="text-purple-400 text-base sm:text-lg font-medium">
              {employee.role}
            </p>
            
            {/* Glowing line */}
            <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-purple-500 to-transparent rounded-full my-5 md:my-6 opacity-70 mx-auto md:mx-0" />

            {/* Experience Box */}
            {employee.experience && (
              <div className="flex items-center gap-3 sm:gap-4 bg-white/5 border border-white/10 rounded-2xl p-3 sm:p-4 pr-6 sm:pr-8 w-fit mt-2">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                  <FiCalendar size={20} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-white font-bold text-base sm:text-lg leading-tight">{employee.experience}</span>
                  <span className="text-slate-400 text-xs sm:text-sm">Experience</span>
                </div>
              </div>
            )}
          </div>

          {/* ── Vertical Divider for Desktop ── */}
          <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

          {/* ── Right Column — About & Skills ── */}
          <div className="w-full md:w-[65%] flex flex-col relative z-10" style={{ transform: 'translateZ(20px)' }}>
            
            {/* About Section */}
            <div className="mb-8 md:mb-10">
              <h3 className="text-xs sm:text-sm font-bold text-white uppercase tracking-[0.15em] mb-4 md:mb-6 flex items-center gap-3">
                <FiUser className="text-purple-400" size={20} /> ABOUT ME
              </h3>
              {employee.bio ? (
                <p className="text-slate-300 text-base md:text-lg leading-relaxed font-light">
                  {employee.bio}
                </p>
              ) : (
                <p className="text-white/40 italic">No bio provided.</p>
              )}
            </div>

            <div className="border-t border-white/10 mb-8 w-full" />

            {/* Skills Section */}
            {employee.skills?.length > 0 && (
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-[0.15em] mb-6 flex items-center gap-3">
                  <FiCode className="text-purple-400" size={20} /> SKILLS
                </h3>
                <div className="flex flex-wrap gap-3">
                  {employee.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm font-normal px-5 py-2.5 bg-white/5 border border-white/10 text-slate-300 hover:border-purple-500/50 hover:text-white transition-all duration-300 rounded-full cursor-default flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </Tilt>
  );
}
