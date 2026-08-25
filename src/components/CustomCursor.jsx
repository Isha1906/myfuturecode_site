import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function CustomCursor() {
  const cursorDot = useRef(null);
  const cursorOutline = useRef(null);

  useEffect(() => {

    if (window.matchMedia("(max-width: 768px)").matches) return;

    const onMouseMove = (e) => {
      const { clientX, clientY } = e;

      gsap.to(cursorDot.current, {
        x: clientX,
        y: clientY,
        duration: 0,
      });

      gsap.to(cursorOutline.current, {
        x: clientX,
        y: clientY,
        duration: 0.15,
        ease: "power2.out"
      });
    };

    const onMouseEnter = () => {
      gsap.to(cursorOutline.current, {
        scale: 1.5,
        backgroundColor: "rgba(99, 102, 241, 0.1)",
        borderColor: "rgba(99, 102, 241, 0.8)",
        duration: 0.3
      });
    };

    const onMouseLeave = () => {
      gsap.to(cursorOutline.current, {
        scale: 1,
        backgroundColor: "transparent",
        borderColor: "rgba(99, 102, 241, 0.4)",
        duration: 0.3
      });
    };

    window.addEventListener('mousemove', onMouseMove);

    const attachListeners = () => {
      const clickables = document.querySelectorAll('a, button, input, textarea, select, [role="button"], .cursor-pointer');
      clickables.forEach((el) => {
        el.addEventListener('mouseenter', onMouseEnter);
        el.addEventListener('mouseleave', onMouseLeave);
      });
      return clickables;
    };

    let clickables = attachListeners();



    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      clickables.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnter);
        el.removeEventListener('mouseleave', onMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorDot}
        className="fixed top-0 left-0 w-2 h-2 bg-indigo-500 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-screen hidden md:block"
        style={{ willChange: 'transform' }}
      />
      <div
        ref={cursorOutline}
        className="fixed top-0 left-0 w-10 h-10 border border-indigo-400/40 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-colors hidden md:block"
        style={{ willChange: 'transform' }}
      />
    </>
  );
}
