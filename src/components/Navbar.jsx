import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { LuMenu, LuX, LuDownload, LuChevronDown } from 'react-icons/lu';
import { cn } from '../lib/utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Tilt from 'react-parallax-tilt';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoWidth, setLogoWidth] = useState('280px');
  
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateLogoWidth = () => {
      const w = window.innerWidth;
      if (w < 380) setLogoWidth('130px');
      else if (w < 480) setLogoWidth('160px');
      else if (w < 768) setLogoWidth('190px');
      else if (w < 1024) setLogoWidth('220px');
      else setLogoWidth('280px');
    };
    
    updateLogoWidth();
    window.addEventListener('resize', updateLogoWidth);
    return () => window.removeEventListener('resize', updateLogoWidth);
  }, []);

  const handleNavClick = (link) => {
    setIsMobileMenuOpen(false);
    
    if (link.path && link.path !== location.pathname) {
      navigate(link.path);
      setTimeout(() => {
        if (link.id) {
          const element = document.getElementById(link.id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          window.scrollTo(0, 0);
        }
      }, 100);
      return;
    }

    if (link.id) {
      const element = document.getElementById(link.id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  };

  useGSAP(() => {
    if (isMobileMenuOpen) {
      gsap.fromTo('.mobile-menu',
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, ease: 'power2.out' }
      );
      gsap.fromTo('.mobile-link',
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.3, stagger: 0.1, ease: 'power2.out', delay: 0.1 }
      );
    }
  }, [isMobileMenuOpen]);

  return (
    <div className="absolute top-0 left-0 w-full z-50 flex justify-center mt-6 px-4 pointer-events-none">
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.15}
        glareColor="#ffffff"
        glarePosition="all"
        glareBorderRadius="9999px"
        tiltMaxAngleX={5}
        tiltMaxAngleY={2}
        perspective={1200}
        scale={1.01}
        transitionSpeed={1000}
        className="relative w-full max-w-[1400px] h-[60px] md:h-[75px] lg:h-[90px] pointer-events-auto"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Glass Background Layer (Separated to fix Webkit 3D border-radius bug) */}
        <div className={cn(
          "absolute inset-0 rounded-full transition-all duration-300 pointer-events-none border border-white/5",
          isScrolled
            ? "bg-slate-900/80 backdrop-blur-xl shadow-lg"
            : "bg-slate-900/40 backdrop-blur-md"
        )} />

        {/* Content Wrapper */}
        <div className="relative w-full h-full flex items-center justify-between px-6 md:px-8" style={{ transformStyle: 'preserve-3d' }}>
        
        {/* Left: Logo Section */}
        <div className="flex items-center shrink-0" style={{ transform: 'translateZ(30px)' }}>
          <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick({ id: 'hero', path: '/' }); }} className="cursor-pointer outline-none block">
            <img
              src="new-logo.png"
              alt="My Future Code - IT Solutions Private Limited"
              style={{ width: logoWidth, height: 'auto' }}
              className="object-contain drop-shadow-md transition-all duration-500 hover:scale-110 hover:drop-shadow-[0_0_25px_rgba(168,85,247,0.8)]"
            />
          </a>
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden lg:flex flex-1 justify-center items-center gap-10" style={{ transformStyle: 'preserve-3d', transform: 'translateZ(20px)' }}>
          {NAV_LINKS.map((link) => (
            link.dropdown ? (
              <div key={link.id} className="relative group" style={{ transform: 'translateZ(10px)' }}>
                <button className="text-base font-medium text-slate-200 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 outline-none">
                  {link.label}
                  <LuChevronDown size={16} className="opacity-70 group-hover:rotate-180 transition-transform duration-300" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-2 w-56 shadow-2xl flex flex-col gap-1 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-blue-700" />
                    {link.dropdown.map((sublink, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleNavClick(sublink)}
                        className="text-left px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl transition-colors cursor-pointer outline-none"
                      >
                        {sublink.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <button
                key={link.id}
                onClick={() => handleNavClick(link)}
                className="text-base font-medium text-slate-200 hover:text-white transition-colors cursor-pointer outline-none"
                style={{ transform: 'translateZ(10px)' }}
              >
                {link.label}
              </button>
            )
          ))}
        </nav>

        {/* Right: CTA Button */}
        <div className="hidden lg:flex items-center shrink-0 w-[180px]" style={{ transform: 'translateZ(30px)' }}>
          {/* Empty spacer to keep center nav perfectly centered */}
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center shrink-0">
          <button
            className="text-slate-300 hover:text-white cursor-pointer transition-colors outline-none p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <LuX size={26} /> : <LuMenu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu absolute top-[calc(100%+12px)] left-0 right-0 bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:hidden shadow-2xl pointer-events-auto">
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                link.dropdown ? (
                  <div key={link.id} className="flex flex-col border-b border-white/5 pb-4 mb-2">
                    <span className="mobile-link text-left text-lg font-bold text-white mb-3">{link.label}</span>
                    <div className="flex flex-col gap-2 pl-4 border-l-2 border-white/10 ml-2">
                      {link.dropdown.map((sublink, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleNavClick(sublink)}
                          className="mobile-link text-left text-base font-medium text-slate-400 hover:text-purple-400 transition-colors cursor-pointer py-2"
                        >
                          {sublink.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link)}
                    className="mobile-link text-left text-lg font-bold text-white hover:text-purple-400 transition-colors py-4 border-b border-white/5 cursor-pointer"
                  >
                    {link.label}
                  </button>
                )
              ))}
              {/* Download CTA removed */}
            </nav>
          </div>
        )}
        </div>
      </Tilt>
    </div>
  );
}